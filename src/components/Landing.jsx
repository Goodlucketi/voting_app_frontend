import { useState } from "react"
import AuthForm from "./AuthForm"

const LandingPage = () => {
    const [isSignUp, setIsSignUp] = useState(true)
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleForm = ()=>{
        setIsSignUp(!isSignUp)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(isSignUp){
           
            try {
                const response = await(fetch('http://localhost/votingapp/controllers/voterRegistration.php', {
                    method: 'POST',
                    body: JSON.stringify({fullname, email, password}),
                }))
                const result = await response.json()
                console.log(result.success);
                
                if (result.success){
                    alert("Registration Successful, Please Login")
                    setFullname('');
                    setEmail('');
                    setPassword('');
                }else{
                    alert("Error registering Candidate")
                }
            } catch (error) {
                console.error('Error', error)
            } 
        }
        else{
            console.log("Login Form");
            try {
                const response = await(fetch('http://localhost/votingapp/controllers/voterLogin.php', {
                    method: 'POST',
                    body: JSON.stringify({ email, password}),
                }))
                const result = await response.json()
                if (result.success){
                    alert("Login Successful")
                    setEmail('');
                    setPassword('');
                }else{
                    alert("Error registering Candidate")
                }
            } catch (error) {
                console.error('Error', error)
            } 
        }
    }
    return ( 
        <header className=" bg-slate-900 h-screen fixed w-full text-white md:pt-32">
            <main className="w-11/12 mx-auto md:flex justify-around items-center">
                <div className="text p-4 md:w-5/12">
                    <h1 className="text-4xl text-center md:text-left font-bold">WELCOME TO OUR <br/> <span className="text-cyan-400 py-3 text-6xl">VOTING PLATFORM</span></h1>
                    <p className="text-blue my-2 text-lg text-center md:text-left">Sign up and Login to Vote</p>
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
                        setPassword={setPassword}
                        fullname={fullname}
                        email={email}
                        password={password}
                    />
                </div>
            </main>
        </header>
     );
}
 
export default LandingPage;