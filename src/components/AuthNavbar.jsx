import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import inec from '../assets/images/inec-logo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPerson, faUser } from "@fortawesome/free-solid-svg-icons";


const AuthNavbar = ({ onTabChange }) => {
    const [navBar, setNavbar] = useState(false);
    const navigate = useNavigate();

    const navBarToggle = ()=>{
        setNavbar(!navBar) 
    }

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        navigate('/'); // Redirect to the login page
    };

    return ( 
        <header className="sticky top-0 left-0 bg-green-700 text-white p-4 shadow-md z-10">
            <nav className="relative flex justify-between items-center w-11/12 mx-auto">
                <div className="logo flex gap-2 items-center">
                    <img src={inec} alt="INEC logo" className="w-2/12 rounded-full" />
                    <h2 className="text-2xl">iVOTE</h2>
                </div>
                
                <div className={`${navBar ? ('block'): ('hidden')} actions absolute top-10 -right-10 md:top-0 md:right-0 h-screen md:h-auto bg-green-700 p-4  md:relative md:flex gap-10 items-center text-slate-200 text-lg`}>
                    <li onClick={()=> onTabChange('candidates')} className="list-none mb-5 md:mb-0">Vote Candidate</li>
                    {navBar && (<li onClick={()=> onTabChange('edit_profile')} className="list-none mb-5 md:mb-0">Edit Profile</li>)}
                    <li onClick={()=> onTabChange('vote_history')} className="list-none mb-5 md:mb-0"> Vote History</li>
                    <li onClick={()=> onTabChange('results')} className="list-none mb-5 md:mb-0">View LeaderBoards</li>
                    {navBar && (<li onClick={handleLogout} className="list-none mb-5 md:mb-0">Logout</li>)}
                </div>
                <div onClick={navBarToggle} className="menu px-4 absolute right-5 md:hidden">
                    <FontAwesomeIcon icon={faBars} className="text-xl" />
                </div>
                <div className="profile">
                    <FontAwesomeIcon icon={faUser} className="text-lg" />
                </div>
            </nav>
        </header>
     );
}
 
export default AuthNavbar;