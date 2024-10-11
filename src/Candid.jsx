import { useEffect, useState } from "react";

const candidatesData = ({title, vote, showVoteBtn}) => {
    const [candidates, setCandidates] = useState([])
    const [error, setError] = useState(null)
    useEffect(()=>{
        fetch('http://localhost/votingapp/controllers/candidates.php',{
            method:'GET',
        }).then((res)=>{
            return res.json()
            
        }).then((data)=>{
            setCandidates(data.candidates)
            
        }).catch((e)=>{
            setError(e.message)
            console.log(e.message);
            
        })
    },[])
    let [voteCount, setVoteCount] = useState(candidates.map((candidate) => candidate.voteCount))

    const voteCandidate = (index)=>{
        const newVoteCounts = [...voteCount];

        newVoteCounts[index] += 1;

        setVoteCount(newVoteCounts);
       
        // console.log(voteCount[index]);
        
    }

    return ( 
        <main className="w-11/12 mx-auto">
            <h2 className="text-3xl my-5 md:my-10 text-center font-bold">{title}</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
                {candidates.length > 0 ? (
                    candidates.map((candidate, index)=> (
                        <div key={index} className="text-center border-2 rounded-md pb-4 shadow-md hover:scale-105 transition-all duration-500">
                            <img src={`http://localhost/votingapp/uploads/${candidate.image_url}`} alt={candidate.image_url + "'s Photo"} className="w-full h-72 object-cover object-top rounded-md"/>
                            <h3 className="text-lg font-semibold mt-2">{candidate.name}</h3>
                            <p>{candidate.email}</p>
                            <p>{candidate.description}</p>
                            <p className="font-bold text-lg">Votes: {candidate.voteCount}</p>

                            {showVoteBtn && (
                                <button onClick={() => voteCandidate(index)} className="bg-blue-600 py-2 px-8 my-2 rounded-md">{vote}</button>
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