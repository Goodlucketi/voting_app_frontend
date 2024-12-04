import CandidateData from "../components/Candid";
import VoteResults from "../components/VoteResults";
import { useEffect, useState } from "react";
import EditProfile from "../components/EditProfile";
import Vote_History from "../components/VoteHistory";
import AuthNavbar from "../components/AuthNavbar";


const UserDashPage = () => {
    const [activeTab, setActiveTab] = useState('candidates')
    const [voterData, setVoterData] = useState({name: ""})
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    
    const tabChange = (tab)=>{
        setActiveTab(tab)
    }

    useEffect(()=>{
        const voterData = JSON.parse(localStorage.getItem('voter'))

        setVoterData({
            name:voterData.fullname
        })
        console.log(voterData);
        
    }, [])

    return ( 
        <main className="tab ">
            <AuthNavbar onTabChange={tabChange} />
            <div className="w-11/12 mx-auto">
                <p className="text-left text-lg p-2">Welcome {voterData.name}</p>
                <div className="elections px-2">
                    <p className="font-bold">Ongoing: <span className="text-green-700">Presidential</span></p>
                    <p className="font-bold">Upcoming: <span className="text-yellow-500">Gubernuterial</span></p>
                </div>
                {activeTab === "candidates" && <CandidateData showVoteBtn={true} vote={'Vote'}/>}
                {activeTab === 'results' && <VoteResults/>}
                {activeTab === 'vote_history' && <Vote_History />}
                {activeTab === 'edit_profile' && <EditProfile fullname={fullname} email={email} phone={phone} setEmail={setEmail} setFullname={setFullname} setPassword={setPassword} setPhone={setPhone} />}

            </div>    
        </main>
     );
}
 
export default UserDashPage;