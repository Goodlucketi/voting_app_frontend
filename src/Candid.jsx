import { useEffect, useState } from "react";

const candidatesData = ({title, vote, showVoteBtn}) => {
    const [candidates, setCandidates] = useState([])
    useEffect(()=>{
        fetch('http://localhost/votingapp/controllers/candidates.php',{
            method:'GET',
        }).then((res)=>{
            return res.json()
            
        }).then((data)=>{
            setCandidates(data.candidates)
            
        }).catch((e)=>{
            console.error(e)
        })
    },[])


    return ( 
        <main className="w-11/12 mx-auto">
            <h2 className="text-3xl my-5 text-center font-bold">{title}</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {candidates.length > 0 ? (
                    candidates.map((candidate, index)=> (
                        <div key={index} className="text-center bg-slate-600 py-4 shadow-md hover:scale-110 transition-all duration-500">
                            <img src={`http://localhost/votingapp/uploads/${candidate.image_url}`} alt={candidate.image_url + "'s Photo"} className="w-full h-64 object-cover rounded-md"/>
                            <h3 className="text-lg font-semibold">{candidate.name}</h3>
                            <p>{candidate.description}</p>
                            <p className="font-bold text-lg">Votes: {candidate.voteCount}</p>

                            {showVoteBtn && (
                                <button onClick={() => voteCandidate(index)} className="bg-blue-800 py-2 px-4 rounded-md">{vote}</button>
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