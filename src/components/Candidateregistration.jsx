import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Candidate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    
    const validateForm = (e)=>{
        if(!name || !email || !phone || !description){
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
        formData.append('phone', phone);
        formData.append('description', description);
        formData.append('image', e.target.image.files[0]);

        try {
            const response = await(fetch('http://localhost/votingapp/controllers/register.php', {
                method: 'POST',
                body: formData,
            }))
            const result = await response.json()
            if (result.success){
                toast.success('Candidate Registered Successfully')
                setName('');
                setEmail('');
                setPhone('');
                setDescription('')
                e.target.image.value = '';
            }else{
                toast.error(result.message || 'Failed to register candidate')
            }
        } catch (error) {
            toast.error(error.message || 'An error occured whiile submitting form')
        }
       
       }

    return ( 
        <main className="p-4">
            <form onSubmit={submitCandidate} className="p-4 w-10/12 lg:w-6/12 mx-auto">
                <h2 className='text-center text-3xl font-bold my-5'>Candidate Registration</h2>
                
                <ToastContainer 
                    position="top-right"
                    autoClose={3000}               
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
                <div className="md:w-10/12 mx-auto">
                    <input
                    type="text"
                    className='p-3 w-full my-2 border-slate-500 border-2 rounded-md'
                    placeholder="Candidate Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className="md:w-10/12 mx-auto">
                    <textarea
                    placeholder="Candidate Description"
                    className='p-4 w-full my-2 border-slate-500 border-2 rounded-md'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="md:w-10/12 mx-auto">
                    <input 
                        type="file" 
                        name="image"
                        className='p-4 w-full my-2 border-slate-500 border-2 rounded-md'
                    />
                </div>
                <div className="md:w-6/12 mx-auto">
                    <input 
                        type="submit" 
                        className='p-4 w-full my-2 border-slate-500 bg-blue-600 text-white text-xl border-2 rounded-md hover:bg-blue-800 transition-all duration-500 cursor-pointer'
                        value='Register Candidate'
                    />
                </div>

            </form>
        </main>
     );
    }
 
export default Candidate;