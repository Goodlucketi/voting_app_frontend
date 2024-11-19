import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SideBar = ({ onTabChange }) => {
    const [sideBar, setSideBar] = useState(false);
    const navigate = useNavigate();

    const sidebarToggle = ()=>{
        setSideBar(!sideBar) 
    }

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        navigate('/'); // Redirect to the login page
    };

    return ( 
        <header className="">
            <aside className="">
                <div onClick={sidebarToggle} className="menu absolute px-4">
                    <p className="my-1 bg-slate-400 px-4 py-0.5"></p>
                    <p className="my-1 bg-slate-400 px-4 py-0.5"></p>
                    <p className="my-1 bg-slate-400 px-4 py-0.5"></p>
                </div>
                <div className={`${sideBar ? ('w-full'): ('w-0')} actions bg-slate-900/95 transistion-all duration-500 h-screen overflow-x-hidden text-slate-200 pt-10`}>
                    <li onClick={()=> onTabChange('candidates')} className="p-3 cursor-pointer mx-auto bg-slate-700 w-10/12 rounded-md pl-8 my-3 list-none">Vote Candidate</li>
                    <li onClick={()=> onTabChange('edit_profile')} className="p-3 cursor-pointer mx-auto bg-slate-700 w-10/12 rounded-md pl-8 my-3 list-none">Edit Profile</li>
                    <li onClick={()=> onTabChange('vote_history')} className="p-3 cursor-pointer mx-auto bg-slate-700 w-10/12 rounded-md pl-8 my-3 list-none"> Vote History</li>
                    <li onClick={()=> onTabChange('results')} className="p-3 cursor-pointer mx-auto bg-slate-700 w-10/12 rounded-md pl-8 my-3 list-none">View LeaderBoards</li>
                    <li onClick={handleLogout} className="p-3 cursor-pointer mx-auto bg-slate-700 w-10/12 rounded-md pl-8 my-3 list-none">Logout</li>
                </div>
            </aside>
        </header>
     );
}
 
export default SideBar;