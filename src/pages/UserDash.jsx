import SideBar from "../components/UserSidebar";
import CandidateData from "../components/Candid";
import VoteResults from "../components/VoteResults";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import EditProfile from "../components/EditProfile";
import Vote_History from "../components/VoteHistory";


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

    const userData = ()=>{
        const token =localStorage.getItem('token')        
        if(token){
            try {
                const decoded = jwtDecode(token)
                setUserInfo({
                    id:decoded.user_id,
                    name: decoded.username,
                    email:decoded.email,
                    phone:decoded.phone
                })
                console.log(userInfo)
                
                setFullname(userInfo.fullname)
                setEmail(userInfo.email)
                setPhone(userInfo.phone)
            } catch (error) {
                console.error('Error decoding token', error)
            }
        }
    }

    useEffect(()=>{
        userData()
    },[])

    const handleUpdate = async (e) =>{
        e.preventDefault()        
        try {
            const response = await(fetch('https://app.snosfortress.com/controllers/editvoter.php', {
                method: 'PUT',
                body: JSON.stringify({fullname, email, phone, password}),
            }))
            const result = await response.json()    
            if (result.success){
                toast.success("Update Successful")
            }else{
                toast.error(result.message || "Failed to Update voter")
                }
            } catch (error) {
                toast.error(error.message || "There are issues Updating the voter")
            } 
    }
    return ( 
        <main className="">
            
            <SideBar onTabChange={tabChange} />
            <div className="w-11/12 mx-auto">
                <h2 className="font-bold text-center text-2xl p-2">Welcome {userInfo.name }</h2>
                <p className="text-center">{ userInfo.email }</p>

                {activeTab === "candidates" && <CandidateData showVoteBtn={true} vote={'Vote'}/>}
                {activeTab === 'results' && <VoteResults/>}
                {activeTab === 'vote_history' && <Vote_History />}
                {activeTab === 'edit_profile' && <EditProfile fullname={fullname} email={email} phone={phone} onSubmit={handleUpdate} setEmail={setEmail} setFullname={setFullname} setPassword={setPassword} setPhone={setPhone} />}

            </div>
           
        </main>
     );
}
 
export default UserDashPage;