import { useState } from "react"
import AuthForm from "./AuthForm"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const [fullname, setFullname] = useState('');
    const [voterId, setVoterId] = useState('');
    const [nin, setNIN] = useState('')
    
    const navigate = useNavigate()
    
    const registeredVoters = ['abcd1234', 'efgh5678', 'ijkl9102', 'mnop1034', 'qrst3241', "A1B2C3D4", "E5F6G7H8", "I9J0K1L2", "M3N4O5P6", "Q7R8S9T0", "U1V2W3X4", "Y5Z6A7B8", "C9D0E1F2", "G3H4I5J6", "K7L8M9N0"]

    const validNIN = ["42951837290", "73629410582", "38420591736", "59238410657", "81364907245", "49031682719", "75219043862", "62859410387", "94627180352", "38172045968"]

    const validateForm = (e)=>{
        if(!fullname || !voterId || !nin){
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
       
        return true;
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!validateForm(e)){
            return
        }
           
        try {
            const response = await(fetch('https://app.snosfortress.com/controllers/voterRegistration.php', {
                method: 'POST',
                body: JSON.stringify({fullname, voterId, nin, }),
            }))
            const result = await response.json()
            console.log(result.success);
            
            if (result.success){
                toast.success("Registration Successful, Please Login")
                setFullname('');
                setVoterId('');
                setNIN('');
            }else{
                toast.error(result.message || "Failed to register voter")
            }
        } catch (error) {
            toast.error(error.message || "There are issues registering the voter")
        } 
    }
        
    return ( 
        <header className="landing md:fixed md:overflow-scroll pt-10 pb-52 md:h-screen h-auto w-full text-white md:pt-16 lg:pt-20 md:pb-16">
            <ToastContainer
                position="top-right"
                autoClose={3000} 
                style={{ position:'fixed', top:'100px', right:'20px'}}    
            />
            <main className="mx-auto">
                <div className="form mx-auto md:w-4/12">
                    <AuthForm
                        title="Check Eligibility"
                        option= "Authenticate"
                        onSubmit={handleSubmit}
                        setFullname={setFullname}
                        setVoterId={setVoterId}
                        setNIN={setNIN}
                        fullname={fullname}
                        voterId={voterId}
                        nin = {nin}
                    />
                </div>
            </main>
        </header>
     );
}
 
export default Auth;