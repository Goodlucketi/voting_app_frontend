import { useState } from "react"
import AuthForm from "./AuthForm"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const [isSignUp, setIsSignUp] = useState(true)
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    
    const toggleForm = ()=>{
        setIsSignUp(!isSignUp)
    }
    const validateForm = (e)=>{
        if(isSignUp){
            if(!fullname || !email || !phone || !password){
                toast.error("All fields are required")
                return false
            }
        }else{
            if(!email || !password){
                toast.error("All fields are required")
                return false
            }
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            toast.error("Please enter a valid email address");
            return false;
        }
        return true;
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!validateForm(e)){
            return
        }
        if(isSignUp){
           
            try {
                const response = await(fetch('http://localhost/votingapp/controllers/voterRegistration.php', {
                    method: 'POST',
                    body: JSON.stringify({fullname, email, phone, password}),
                }))
                const result = await response.json()
                console.log(result.success);
                
                if (result.success){
                    toast.success("Registration Successful, Please Login")
                    setFullname('');
                    setEmail('');
                    setPhone('')
                    setPassword('');
                }else{
                    toast.error(result.message || "Failed to register voter")
                }
            } catch (error) {
                toast.error(error.message || "There are issues registering the voter")
            } 
        }
        else{
            console.log("Login Form");
            try {
                const response = await(fetch('http://localhost/votingapp/controllers/voterLogin.php', {
                    method: 'POST',
                    body: JSON.stringify({email, password}),
                }))
                const result = await response.json()
                if (result.success){
                    localStorage.setItem('token', result.token)
                    toast.success("Login Successful... Please Wait")
                    setEmail('');
                    setPassword('');
                    setTimeout(()=>{
                        navigate('/dashboard')
                    }, 3000)
                    
                }else{
                    toast.error(result.message|| "Email or Password Incorrect")
                }
            } catch (error) {
                toast.error(error.message || "Login Credentials don't match")
            } 
        }
    }
    return ( 
        <header className="landing md:fixed md:h-screen h-auto w-full text-white md:pt-16 lg:pt-20 md:pb-16">
            <ToastContainer
                position="top-right"
                autoClose={3000} 
                style={{ position:'fixed', top:'100px', right:'20px'}}    
            />
            <main className="w-11/12 mx-auto md:flex justify-around">
                <div className=" text pt-10 md:pt-28 p-4 md:w-5/12">
                    <h1 className=" text-2xl md:text-4xl text-center md:text-left font-bold">WELCOME TO OUR <br/> <span className="text-cyan-400 py-3 text-3xl md:text-5xl">VOTING PLATFORM</span></h1>
                    <p className="text-blue my-2 md:text-lg text-center md:text-left">Sign up and Login to Vote</p>
                </div>
                <div className="form md:w-5/12">
                    <AuthForm
                        title={isSignUp ? "Sign Up" : "Login"}
                        option={isSignUp ? "Register" : "Login"}
                        isSignUp={isSignUp}
                        onSubmit={handleSubmit}
                        toggleForm={toggleForm}
                        setFullname={setFullname}
                        setEmail={setEmail}
                        setPhone={setPhone}
                        setPassword={setPassword}
                        fullname={fullname}
                        email={email}
                        phone={phone}
                        password={password}
                    />
                </div>
            </main>
        </header>
     );
}
 
export default LandingPage;