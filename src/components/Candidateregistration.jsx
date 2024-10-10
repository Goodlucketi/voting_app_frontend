import React, { useState } from 'react';
    
const Candidate = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const submitCandidate = async (e) => {
        e.preventDefault()
        

        const formData = new FormData()
        formData.append('name', name);
        formData.append('description', description);
        formData.append('image', e.target.image.files[0]);

        try {
            const response = await(fetch('http://localhost/votingapp/controllers/register.php', {
                method: 'POST',
                body: formData,
            }))
            const result = await response.json()
            if (result.success){
                alert("Succesful")
                setName('');
                setDescription('')
            }else{
                alert("Error registering Candidate")
            }
        } catch (error) {
            console.error('Error', error)
        }
       
       }

    return ( 
        <main className="p-4">
            <form onSubmit={submitCandidate} className="p-4 w-10/12 lg:w-6/12 mx-auto">
                <h2 className='text-center text-3xl font-bold my-5'>Candidate Registration</h2>
                <div>
                    <input
                    type="text"
                    className='p-4 w-full my-2 border-slate-500 border-2 rounded-md'
                    placeholder="Candidate Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <textarea
                    placeholder="Candidate Description"
                    className='p-4 w-full my-2 border-slate-500 border-2 rounded-md'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                        type="file" 
                        name="image"
                        className='p-4 w-full my-2 border-slate-500 border-2 rounded-md'
                    />
                </div>
                <div>
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