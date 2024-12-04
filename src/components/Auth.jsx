import { useState } from "react"
import AuthForm from "./AuthForm"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [fullname, setFullname] = useState('');
    const [voterID, setVoterId] = useState('');
    const [nin, setNIN] = useState('')
    const [error, setError] = useState("")
    
    const navigate = useNavigate()
    
    const registeredVoters = ['abcd1234', 'efgh5678', 'ijkl9102', 'mnop1034', 'qrst3241', "A1B2C3D4", "E5F6G7H8", "I9J0K1L2", "M3N4O5P6", "Q7R8S9T0", "U1V2W3X4", "Y5Z6A7B8", "C9D0E1F2", "G3H4I5J6", "K7L8M9N0"]

    const validNIN = ["42951837290", "73629410582", "38420591736", "59238410657", "81364907245", "49031682719", "75219043862", "62859410387", "94627180352", "38172045968"]

    const validateForm = (e)=>{
        if(!fullname || !voterID || !nin){
            toast.error("All fields are required")
            return false
        }
        
        if(!registeredVoters.includes(voterID)){
            setError('Voter not eligible (Incorrect Voter ID)')
            setTimeout(() => {
                setError("")
            }, 3000);
            return false
        }else{
            toast.success('Voter Approved')
        }
        if(!validNIN.includes(nin)){
            setError("NIN Invalid")
            setTimeout(() => {
                setError("")
            }, 3000);
            return false
        }
        else{
            toast.success("NIN Valid")
        }

       return true
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const voterInfo = {
            fullname, voterID, nin
        }
        if(!validateForm(e)){
            return
        }

        console.log("Login Successful");
        
        localStorage.setItem("voter", voterInfo)
        navigate('/dashboard')
    }
        
    return ( 
        <header className="landing h-screen md:h-auto w-full text-white pt-8 lg:pt-10 md:pb-16">
            <ToastContainer
                position="top-right"
                autoClose={3000} 
                style={{ position:'fixed', top:'100px', right:'20px'}}    
            />
            <main className="mx-auto">
                <div className="form mx-auto md:w-4/12">

                    <AuthForm
                        title="User Authentication"
                        option= "Authenticate"
                        onSubmit={handleSubmit}
                        setFullname={setFullname}
                        setVoterId={setVoterId}
                        setNIN={setNIN}
                        fullname={fullname}
                        voterID={voterID}
                        nin = {nin}
                        error={error}
                        setError={setError}
                    />
                </div>
            </main>
        </header>
     );
}
 
export default Auth;