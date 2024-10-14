import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const SideBar = () => {
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
                <div className={`${sideBar ? ('w-3/12'): ('w-0')} actions bg-slate-900 transistion-all duration-500 h-screen overflow-x-hidden text-slate-200 pt-10`}>
                    <li className="p-3 mx-auto bg-slate-700 w-10/12 rounded-md pl-8 my-3 list-none"><Link to="/">Home</Link></li>
                    <li className="p-3 mx-auto bg-slate-700 w-10/12 rounded-md pl-8 my-3 list-none"><Link to="/votingPage">Vote Candidate</Link></li>
                    <li className="p-3 mx-auto bg-slate-700 w-10/12 rounded-md pl-8 my-3 list-none"><Link to="/editProfile">Edit Profile</Link></li>
                    <li className="p-3 mx-auto bg-slate-700 w-10/12 rounded-md pl-8 my-3 list-none"><Link to="/history">View Vote History</Link></li>
                    <li className="p-3 mx-auto bg-slate-700 w-10/12 rounded-md pl-8 my-3 list-none"><Link to="/vote_results">View LeaderBoards</Link></li>
                    <li className="p-3 mx-auto bg-slate-700 w-10/12 rounded-md pl-8 my-3 list-none"><button onClick={handleLogout}>Logout</button></li>
                </div>
            </aside>
        </header>
     );
}
 
export default SideBar;