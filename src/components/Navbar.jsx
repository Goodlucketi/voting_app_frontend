import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import inec from '../assets/images/inec-logo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [navMenu, setNavMenu] = useState(false)
    const location = useLocation()
    const navMenuRef = useRef(null)
    
    const navToggle = ()=>{
        setNavMenu(!navMenu)   
    }

    const clickOutside = (e)=>{
        if(navMenuRef.current && !navMenuRef.current.contains(e.target)){
            setNavMenu(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('click', clickOutside)
        return ()=>{
            document.removeEventListener('click', clickOutside)
        }
    }, [])

    useEffect(()=>{
        setNavMenu(false)
    }, [location])
    return ( 
        <header className="bg-green-700 sticky top-0 left-0 z-10 shadow-lg">
            <p className="text-right text-white text-xs p-2 w-10/12 mx-auto">Need Support? <Link to="/support">Click Here</Link></p>
            <nav ref={navMenuRef} className="relative p-3 md:p-3 flex items-center justify-between w-11/12 mx-auto text-white font-sans">
                <div className="logo flex items-center  md:w-2/12">
                    <img src={inec} alt="INEC logo" className="rounded-full w-2/12 md:w-3/12" /> &nbsp;
                    <h2 className="font-bold text-2xl"><RouterLink to="/" >iVOTE</RouterLink></h2>
                </div>
                <div className={`${navMenu ? ('block'): ('hidden')} actions bg-green-700 p-10 absolute top-14 -right-7 h-screen md:h-0 md:top-0 md:right-0 md:bg-transparent md:p-5 md:text-center md:relative md:flex items-center gap-5`}>
                    <li className="p-2 my-2 list-none"><RouterLink to="/">Home</RouterLink></li>
                    <li className="p-2 my-2 list-none cursor-pointer"><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
                    <li className="p-2 my-2 list-none cursor-pointer"><ScrollLink to="features" smooth={true} duration={500}>Features</ScrollLink></li>
                    <li className="p-2 my-2 list-none cursor-pointer"><ScrollLink to="howitworks" smooth={true} duration={500}>How it Works</ScrollLink></li>
                    <li className="p-2 my-2 list-none cursor-pointer"><ScrollLink to="faqs" smooth={true} duration={500}>FAQs</ScrollLink></li>
                    <RouterLink className="bg-slate-50 rounded-md shadow-md text-green-700 px-4 py-2 my-2" to="/authentication"> <button>Get Started</button></RouterLink>
                </div>
                <div onClick={navToggle} className="menu md:hidden">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;