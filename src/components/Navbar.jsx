import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
    const [navMenu, setNavMenu] = useState(false)
    const location = useLocation()
    
    const navToggle = ()=>{
        setNavMenu(!navMenu)   
    }

    useEffect(()=>{
        setNavMenu(false)
    }, [location])
    return ( 
        <header className="bg-slate-900 sticky top-0 left-0 z-10">
            <nav className="relative p-4 md:p-2 flex items-center justify-between w-11/12 mx-auto shadow-md text-white font-mono">
                <div className="logo">
                    <h2><Link to="/" >Ballot Code<sup><code>TM</code></sup></Link></h2>
                </div>
                <div className={`${navMenu ? ('block'): ('hidden')} actions bg-slate-900 p-10 absolute top-10 -right-7 h-screen md:h-0 md:top-0 md:right-0 md:bg-transparent md:p-5 md:text-center md:relative md:flex items-center gap-5`}>
                    <li className="p-2 my-2 list-none"><Link to="/">Home</Link></li>
                    {/* <li className="p-2 my-2 list-none"><Link to="/candidateReg">Register Candidate</Link></li> */}
                    <li className="p-2 my-2 list-none"><Link to="/viewCandidates">View Candidates</Link></li>
                </div>
                <div onClick={navToggle} className="menu md:hidden">
                    <p className="my-1 bg-slate-300 px-4 py-0.5"></p>
                    <p className="my-1 bg-slate-300 px-4 py-0.5"></p>
                    <p className="my-1 bg-slate-300 px-4 py-0.5"></p>
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;