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

const candidatesData = () => {
    const [parties, setParties] = useState([])
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [modal, setModal] = useState(false)
    const [selectedParty, setSelectedParty] = useState(null)
    const token = localStorage.getItem('token')
    
    const partiesInfo = [
        {
            id:"1",
            candidatesLogo: PDP,
            votes: 0,
            candidateParty: "PDP"
        },
        {
            id:"2",
            candidatesLogo: APC,
            votes: 0,
            candidateParty: "APC"
        },
        {
            id:"3",
            candidatesLogo: LP,
            votes: 0,
            candidateParty: "LP"
        },
        {
            id:"4",
            candidatesLogo: APGA,
            votes: 0,
            candidateParty: "ANPP"
        },
        {
            id:"5",
            candidatesLogo: NNPP,
            votes: 0,
            candidateParty: "NNPP"
        },
    ]

    useEffect(()=>{
        const storedVotes = JSON.parse(localStorage.getItem('parties'))
        if(storedVotes && storedVotes.length>0){
            setParties(storedVotes)
        }
        else{
            setParties(partiesInfo)
            localStorage.setItem('parties', JSON.stringify(partiesInfo))
        }
    }, [])


    const handleVoteClick = (party) => {     
        setSelectedParty(party);
        setModal(true);
    };

    const cancelVote = () => {
        setModal(false);
    };

    const voteCandidate = () => {
        if(!selectedParty) return
        
        const hasVoted = sessionStorage.getItem("hasVoted")
        if(hasVoted){
            toast.error("You can only vote once")
            setModal(false)
            return
        }

        setModal(false)
        setLoading(true)

        const updatedVotes = parties.map((party)=>{
            if(party.id === selectedParty.id){
                return {...party, votes:party.votes+1}
            }
            return party
        })

        setParties(updatedVotes)
        localStorage.setItem('parties', JSON.stringify(updatedVotes))
        sessionStorage.setItem("hasVoted", true)
            toast.success("Vote Successful");
            setLoading(false)
      }

    return ( 
        <main className="mx-auto">
            <ToastContainer
                position="top-right"
                autoClose={3000} 
                style={{ position:'fixed', top:'100px', right:'20px'}}    
            />
            <div className="">
                {parties.length > 0 ? (
                    parties.map((party)=> (
                        <div key={party.id} className="relative bg-slate-100/50 rounded-md shadow-md my-5 md:my-10 mx-auto">
                            <div className="flex justify-between gap-5 items-center py-6 px-4 md:p-8">
                                <div className="  flex flex-col md:items-center">
                                    <img src={`${party.candidatesLogo}`} alt={party.candidatesLogo + "'s Photo"} className="rounded-md "/>
                                </div>
                                
                                <div className="partyName  ">
                                    <p className="hidden md:block md:text-2xl font-bold">{party.candidateParty}</p>
                                </div>
                                
                                <div onClick={()=>handleVoteClick(party)} className="cursor-pointer">
                                    <img src={fingerprint} alt="fingerprint icon" className="w-5/12 md:w-6/12 mb-2 ml-auto" />
                                </div> 
                                
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center py-40   md:absolute w-11/12">{message}</p>
                )}
            </div>
            {modal && selectedParty &&(
                <Modal
                    selectedParty={selectedParty}
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