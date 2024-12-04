import CandidateData from "../components/Candid";
import VoteResults from "../components/VoteResults";
import { useEffect, useState } from "react";
import EditProfile from "../components/EditProfile";
import Vote_History from "../components/VoteHistory";
import AuthNavbar from "../components/AuthNavbar";


const UserDashPage = () => {
    const [activeTab, setActiveTab] = useState('candidates')
    const [userInfo, setUserInfo] = useState({name: "", email:"", id:""})
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    
    const tabChange = (tab)=>{
        setActiveTab(tab)
    }

    return ( 
        <main className="tab ">
            <AuthNavbar onTabChange={tabChange} />
            <div className="w-11/12 mx-auto">
                <h2 className="font-bold text-left pl-20 text-2xl p-2">Welcome {userInfo.name }</h2>
                <p className="pl-20 text-left">{ userInfo.email }</p>

                {activeTab === "candidates" && <CandidateData showVoteBtn={true} vote={'Vote'}/>}
                {activeTab === 'results' && <VoteResults/>}
                {activeTab === 'vote_history' && <Vote_History />}
                {activeTab === 'edit_profile' && <EditProfile fullname={fullname} email={email} phone={phone} setEmail={setEmail} setFullname={setFullname} setPassword={setPassword} setPhone={setPhone} />}

            </div>    
        </main>
     );
}
 
export default UserDashPage;