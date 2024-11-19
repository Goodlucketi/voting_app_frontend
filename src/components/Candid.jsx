import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const candidatesData = ({title, vote, showVoteBtn, showVoteCount}) => {
    const [candidates, setCandidates] = useState([])
    const token = localStorage.getItem('token')
    
    useEffect(()=>{
        fetch('https://app.snosfortress.com/controllers/candidates.php',{
            method:'GET',
        }).then((res)=>{
            return res.json()
            
        }).then((data)=>{
            setCandidates(data.candidates)
            
        }).catch((e)=>{
            toast.error("Failed to Load Candidates")
        })
    },[])

    const voteCandidate = async (candidateId) => {
        
        try {
            const response = await fetch("https://app.snosfortress.com/controllers/vote.php", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({candidateId})
            })

            const result = await response.json()
            if(result.success){
                toast.success("Vote Successful");
            }else{
                toast.error(result.message || "Failed to Record vote")
            }
        } catch (error) {
            toast.error(error.message || "An error occured during voting")
        }
    }

    return ( 
        <main className="w-11/12 mx-auto">
            <h2 className="text-3xl my-5 md:my-10 text-center font-bold">{title}</h2>
            <ToastContainer
                position="top-right"
                autoClose={3000} 
                style={{ position:'fixed', top:'100px', right:'20px'}}    
            />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-20">
                {candidates.length > 0 ? (
                    candidates.map((candidate)=> (
                        <div key={candidate.id} className="text-center border-2 rounded-md pb-4 shadow-md hover:scale-105 transition-all duration-500">
                            <img src={`https://app.snosfortress.com/uploads/${candidate.image_url}`} alt={candidate.image_url + "'s Photo"} className="w-full h-52 object-cover object-top rounded-md"/>
                            <h3 className="text-xl font-semibold mt-2">{candidate.name}</h3>
                            <p>{candidate.email}</p>
                            <p className="py-2 px-4 text-justify">{candidate.manifesto}</p>
                            <p className="py-2 px-4 text-center font-bold bg-blue-700 text-white rounded-md md:w-6/12 mx-auto">{candidate.party.toUpperCase()}</p>
                            
                            {showVoteCount &&(
                                <p className="font-bold text-lg">Votes: {candidate.voteCount}</p>
                            )}
                            

                            {showVoteBtn && (
                                <button onClick={() => voteCandidate(candidate.id)} className="bg-blue-600 py-2 px-8 my-2 rounded-md">{vote}</button>
                            )}
                        </div>
                    ))
                ) : (
                    <p>.... Loading Candidates</p>
                )}
            </div>
        </main>
    )
}
 
export default candidatesData;