import CandidateData from "../components/Candid";
import VoteResults from "../components/VoteResults";
import { useEffect, useState } from "react";
import EditProfile from "../components/EditProfile";
import Vote_History from "../components/VoteHistory";
import AuthNavbar from "../components/AuthNavbar";
import Footer from "../components/Footer";


const UserDashPage = () => {
    const [activeTab, setActiveTab] = useState('candidates')
    const [voterData, setVoterData] = useState({name: ""})

    
    const tabChange = (tab)=>{
        setActiveTab(tab)
    }

    useEffect(()=>{
        const voterData = JSON.parse(localStorage.getItem('voter'))

        setVoterData({
            name:voterData.fullname
        })
        // console.log(voterData);
        
    }, [])

    return ( 
        <main className="tab ">
            <AuthNavbar onTabChange={tabChange} />
            <div className="w-11/12 mx-auto relative">
                <div className="elections flex items-center gap-2 md:gap-16 my-5">
                    <button className="block md:text-xl text-green-700 p-3 mb-2 md:p-4 shadow-md hover:bg-green-700 hover:text-white transition-all duration-500 rounded-md cursor-pointer">Presidential</button>
                    <button className="block md:text-xl text-green-700 p-3 mb-2 md:p-4 shadow-md hover:bg-green-700 hover:text-white transition-all duration-500 rounded-md cursor-pointer">Senatorial</button>
                    <button className="block md:text-xl text-green-700 p-3 mb-2 md:p-4 shadow-md hover:bg-green-700 hover:text-white transition-all duration-500 rounded-md cursor-pointer">House of Reps</button>
                </div>
                <p className="text-left hidden text-lg p-2 absolute right-0 top-0">Welcome {voterData.name}</p>
               
                {activeTab === "candidates" && <CandidateData showVoteBtn={true} vote={'VOTE'}/>}
                {activeTab === 'results' && <VoteResults/>}
                {activeTab === 'vote_history' && <Vote_History />}

            </div>
            <Footer />   
        </main>
     );
}
 
export default UserDashPage;