import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import vote_candidate from '../assets/images/vote_candidate.jpg'
 
const Candidate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [party, setParty] = useState('');
    const [manifesto, setManifesto] = useState('');
    
    const validateForm = (e)=>{
        if(!name || !email || !party || !manifesto){
            toast.error("All fields are required")
            return false
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            toast.error("Please enter a valid email address");
            return false;
        }

        if (!e.target.image.files[0]) {
            toast.error("Please upload an image");
            return false;
        }

        return true;
    }
    const submitCandidate = async (e) => {
        e.preventDefault()
        if(!validateForm(e)){
            return
        }
        const formData = new FormData()
        formData.append('name', name);
        formData.append('email', email);
        formData.append('party', party);
        formData.append('manifesto', manifesto);
        formData.append('image', e.target.image.files[0]);

        try {
            const response = await(fetch('https://app.snosfortress.com/controllers/register.php', {
                method: 'POST',
                body: formData,
            }))
            const result = await response.json()
            if (result.success){
                toast.success('Candidate Registered Successfully')
                setName('');
                setEmail('');
                setParty('');
                setManifesto('')
                e.target.image.value = '';
            }else{
                toast.error(result.message || 'Failed to register candidate')
            }
        } catch (error) {
            toast.error(error.message || 'An error occured whiile submitting form')
        }
       
       }

    return ( 
        <main className="pt-10">
            <h2 className='text-center text-2xl font-bold mt-5'>Candidate Registration</h2>
            <div className="reg p-4 md:flex justify-even items-center mx-auto w-11/12">
                <div className="image md:w-6/12">
                    <img src={vote_candidate} alt="Voting Image" className='w-full' />
                </div>
                <form onSubmit={submitCandidate} className="p-4 w-10/12 lg:w-6/12 mx-auto">
                    
                    <ToastContainer 
                        position="top-right"
                        autoClose={3000}
                        style = {{position:'fixed', top:'100px', right:'20px'}}               
                    />

                    <div className="md:w-10/12 mx-auto">
                        <input
                        type="text"
                        className='p-3 w-full my-2 border-slate-500 border-2 rounded-md'
                        placeholder="Candidate Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="md:w-10/12 mx-auto">
                        <input
                        type="email"
                        className='p-3 w-full my-2 border-slate-500 border-2 rounded-md'
                        placeholder="Candidate Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/* <div className="md:w-10/12 mx-auto">
                        <input
                        type="text"
                        className='p-3 w-full my-2 border-slate-500 border-2 rounded-md'
                        placeholder="Candidate Phone"
                        value={phone}
                        max={14}
                        min={11}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div> */}
                    <div className="md:w-10/12 mx-auto">
                        <select className='p-3 w-full my-2 border-slate-500 border-2 rounded-md' value={party} onChange={(e) => setParty(e.target.value)}>
                            <option value="null">Candidate Party</option>
                            <option value="party A">Party A</option>
                            <option value="party B">Party B</option>
                            <option value="party C">Party C</option>
                            <option value="party D">Party D</option>
                            <option value="party E">Party E</option>
                        </select>
                    </div>
                    <div className="md:w-10/12 mx-auto">
                        <textarea
                        placeholder="Candidate Manifesto"
                        className='p-3 w-full my-2 border-slate-500 border-2 rounded-md'
                        value={manifesto}
                        onChange={(e) => setManifesto(e.target.value)}
                        />
                    </div>
                    <div className="md:w-10/12 mx-auto">
                        <input 
                            type="file" 
                            name="image"
                            className='p-3 w-full my-2 border-slate-500 border-2 rounded-md'
                        />
                    </div>
                    <div className="md:w-6/12 mx-auto">
                        <input 
                            type="submit" 
                            className='p-3 w-full my-2 border-slate-500 bg-blue-600 text-white text-xl border-2 rounded-md hover:bg-blue-800 transition-all duration-500 cursor-pointer'
                            value='Register Candidate'
                        />
                    </div>

                </form>
            </div>
        </main>
     );
    }
 
export default Candidate;