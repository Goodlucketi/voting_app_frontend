import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PDP from '../assets/images/PDP.png'
import APC from '../assets/images/APC.jpg'
import LP from '../assets/images/LP.jpg'
import APGA from '../assets/images/APGAA.png'
import NNPP from '../assets/images/NNPP.png'
import fingerprint from '../assets/images/fingerprint.png'

const candidatesData = ({title, vote, showVoteBtn, showVoteCount}) => {
    const [candidates, setCandidates] = useState([])
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const token = localStorage.getItem('token')
    
    const candidatesInfo = [
        {
            id:"1",
            candidatesLogo: PDP,
            candidateName: "Deborah Stephen",
            candidateParty: "PDP"
        },
        {
            id:"2",
            candidatesLogo: APC,
            candidateName: "Deborah Stephen",
            candidateParty: "APC"
        },
        {
            id:"3",
            candidatesLogo: LP,
            candidateName: "Deborah Stephen",
            candidateParty: "LP"
        },
        {
            id:"4",
            candidatesLogo: APGA,
            candidateName: "Deborah Stephen",
            candidateParty: "ANPP"
        },
        {
            id:"5",
            candidatesLogo: NNPP,
            candidateName: "Deborah Stephen",
            candidateParty: "NNPP"
        },
    ]

    useEffect(()=>{
        setCandidates(candidatesInfo)
    }, [])

    const voteCandidate = async (candidateId) => {
        setLoading(true)
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
                setLoading(false)
            }else{
                toast.error(result.message || "Failed to Record vote")
                setLoading(false)
            }
        } catch (error) {
            toast.error(error.message || "An error occured during voting")
            setLoading(false)

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
            <div className="">
                {candidates.length > 0 ? (
                    candidates.map((candidate)=> (
                        <div key={candidate.id} className="relative bg-slate-100/50 rounded-md shadow-md my-5 md:my-20 md:w-11/12 mx-auto">
                            <div className="flex justify-between gap-5 items-center py-6 px-2 md:p-8">
                                <div className="  flex flex-col md:items-center">
                                    <img src={`${candidate.candidatesLogo}`} alt={candidate.candidatesLogo + "'s Photo"} className=" object-cover object-top rounded-md "/>
                                </div>
                                
                                <div className="partyName  ">
                                    <p className="hidden md:text-2xl font-bold">{candidate.candidateParty}</p>
                                </div>
                                
                                {/* {showVoteCount &&(
                                    <p className="font-bold text-lg">Votes: {candidate.voteCount}</p>
                                )} */}
                                <div className="flex gap-2 justify-center md:gap-5">
                                    <img src={fingerprint} alt="fingerprint icon" className="w-3/12 md:w-5/12  " />

                                   {showVoteBtn && (
                                        <button onClick={() => voteCandidate(candidate.id)} className="bg-green-600 p-3 md:p-6 my-2 rounded-md md:w-6/12 text-white text-2xl font-bold">{loading ? "Voting, Please Wait ..." : vote}</button>
                                    )} 
                                </div>
                                
                            </div>
                        </div>
                       
                    ))
                ) : (
                    <p className="text-center py-40   md:absolute w-11/12">{message}</p>
                )}
            </div>
        </main>
    )
}
 
export default candidatesData;