import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
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
        <header className="bg-green-700 sticky top-0 left-0 z-10 shadow-lg">
            <nav className="relative p-4 md:p-2 flex items-center justify-between w-11/12 mx-auto text-white font-sans">
                <div className="logo">
                    <h2 className="font-bold text-2xl"><Link to="/" >BALLOTCODE</Link></h2>
                </div>
                <div className={`${navMenu ? ('block'): ('hidden')} actions bg-green-700 p-10 absolute top-10 -right-7 h-screen md:h-0 md:top-0 md:right-0 md:bg-transparent md:p-5 md:text-center md:relative md:flex items-center gap-5`}>
                    <li className="p-2 my-2 list-none"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className="p-2 my-2 list-none"><Link to="about" smooth={true} duration={500}>About iVOTE</Link></li>
                    <li className="p-2 my-2 list-none"><Link to="howitworks" smooth={true} duration={500}>How it Works</Link></li>
                    <li className="p-2 my-2 list-none"><Link to="footer" smooth={true} duration={500}>FAQs</Link></li>
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