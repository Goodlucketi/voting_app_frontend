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
    const [voterId, setVoterId] = useState('');
    const [selectedLga, setSelectedLga] = useState('')
    const [selectedState, setSelectedState] = useState("")
    const [gender, setGender] = useState('')
    const [ward, setWard] = useState('')
    const [ageRange, setAgeRange] = useState('')
    const navigate = useNavigate()
    
    const registeredVoters = ['abcd1234', 'efgh5678', 'ijkl9102', 'mnop1034', 'qrst3241']

    const toggleForm = ()=>{
        setIsSignUp(!isSignUp)
    }
    const validateForm = (e)=>{
        if(isSignUp){
            if(!fullname || !email || !phone || !voterId || !password || !selectedLga || !selectedState || !gender || !ward || !ageRange){
                toast.error("All fields are required")
                return false
            }
            if(registeredVoters.includes(voterId)){
                toast.success('Voter Approved')
                return true
            }else{
                toast.error('Voter not eligible (Incorrect Voter ID)')
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
                const response = await(fetch('https://app.snosfortress.com/controllers/voterRegistration.php', {
                    method: 'POST',
                    body: JSON.stringify({fullname, email, voterId, phone, password, selectedLga, selectedState, ageRange, gender, ward}),
                }))
                const result = await response.json()
                console.log(result.success);
                
                if (result.success){
                    toast.success("Registration Successful, Please Login")
                    setFullname('');
                    setEmail('');
                    setPhone('');
                    setVoterId('');
                    setPassword('');
                    setAgeRange('')
                    setGender('')
                    setSelectedLga('')
                    setSelectedState('')
                    setWard('')
                }else{
                    toast.error(result.message || "Failed to register voter")
                }
            } catch (error) {
                toast.error(error.message || "There are issues registering the voter")
            } 
        }
        else{
            try {
                const response = await(fetch('https://app.snosfortress.com/controllers/voterLogin.php', {
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
        <header className="landing md:fixed md:overflow-scroll md:h-screen h-auto w-full text-white md:pt-16 lg:pt-20 md:pb-16">
            <ToastContainer
                position="top-right"
                autoClose={3000} 
                style={{ position:'fixed', top:'100px', right:'20px'}}    
            />
            <main className="w-11/12 mx-auto md:flex justify-around">
                <div className=" text pt-10 md:pt-32 p-4 md:w-5/12">
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
                        setVoterId={setVoterId}
                        setPassword={setPassword}
                        setSelectedState={setSelectedState}
                        setSelectedLga={setSelectedLga}
                        setAgeRange={setAgeRange}
                        setWard={setWard}
                        setGender={setGender}
                        fullname={fullname}
                        email={email}
                        phone={phone}
                        password={password}
                        gender={gender}
                        ageRange={ageRange}
                        selectedLga={selectedLga}
                        selectedState={selectedState}
                        ward={ward}
                        voterId={voterId}
                    />
                </div>
            </main>
        </header>
     );
}
 
export default LandingPage;