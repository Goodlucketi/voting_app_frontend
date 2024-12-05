import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PDP from '../assets/images/PDP.png'
import APC from '../assets/images/APC.jpg'
import LP from '../assets/images/LP.jpg'
import APGA from '../assets/images/APGAA.png'
import NNPP from '../assets/images/NNPP.png'
import fingerprint from '../assets/images/fingerprint.png'
import Modal from "./Modal";

const candidatesData = ({title, showVoteBtn, showVoteCount}) => {
    const [candidates, setCandidates] = useState([])
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [modal, setModal] = useState(false)
    const [selectedCandidate, setSelectedCandidate] = useState(null)
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

    const handleVoteClick = (candidate) => {     
        setSelectedCandidate(candidate);
        setModal(true);
    };

    const cancelVote = () => {
        setModal(false);
    };

    const voteCandidate = async (candidateId) => {
        if(!selectedCandidate) return

        setModal(false)
        setLoading(true)
            toast.success("Vote Successful");
            setLoading(false)
      }

    return ( 
        <main className="mx-auto">
            <div>
                <h2 className="text-3xl my-5 md:my-10 text-center font-bold">{title}</h2>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000} 
                style={{ position:'fixed', top:'100px', right:'20px'}}    
            />
            <div className="">
                {candidates.length > 0 ? (
                    candidates.map((candidate)=> (
                        <div key={candidate.id} className="relative bg-slate-100/50 rounded-md shadow-md my-5 md:my-10 mx-auto">
                            <div className="flex justify-between gap-5 items-center py-6 px-4 md:p-8">
                                <div className="  flex flex-col md:items-center">
                                    <img src={`${candidate.candidatesLogo}`} alt={candidate.candidatesLogo + "'s Photo"} className="rounded-md "/>
                                </div>
                                
                                <div className="partyName  ">
                                    <p className="hidden md:block md:text-2xl font-bold">{candidate.candidateParty}</p>
                                </div>
                                {showVoteBtn && (
                                <div onClick={()=>handleVoteClick(candidate)} className="cursor-pointer">
                                    <img src={fingerprint} alt="fingerprint icon" className="w-5/12 md:w-6/12 mb-2 ml-auto" />
                                </div> 
                                )} 
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center py-40   md:absolute w-11/12">{message}</p>
                )}
            </div>
            {modal && selectedCandidate &&(
                <Modal
                    selectedCandidate={selectedCandidate}
                    confirmVote = {voteCandidate}
                    cancelVote = {cancelVote}
                    modal = {modal}
                    setModal = {setModal}
                    message= "Are you Sure"
                />)
            }
        </main>
    )
}
 
export default candidatesData;