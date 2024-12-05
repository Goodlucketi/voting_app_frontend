import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import inec from '../assets/images/inec-logo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const AuthNav = () => {
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
            <nav ref={navMenuRef} className="relative p-5 md:p-3 flex items-center justify-between w-11/12 mx-auto text-white font-sans">
                <div className="logo flex items-center  md:w-2/12">
                    <img src={inec} alt="INEC logo" className="rounded-full w-2/12 md:w-3/12" /> &nbsp;
                    <h2 className="font-bold text-2xl"><RouterLink to="/" >iVOTE</RouterLink></h2>
                </div>
                <div className={`${navMenu ? ('block'): ('hidden')} actions bg-green-700 p-10 absolute top-14 -right-7 h-screen md:h-0 md:top-0 md:right-0 md:bg-transparent md:p-5 md:text-center md:relative md:flex items-center gap-10`}>
                    <li className="p-2 my-2 list-none"><RouterLink to="/">Home</RouterLink></li>
                    <li className="p-2 my-2 list-none"><RouterLink to="/support">Support</RouterLink></li>
                  
                </div>
                <div onClick={navToggle} className="menu md:hidden">
                    <FontAwesomeIcon icon={faBars} className="text-xl" />
                </div>
            </nav>
        </header>
     );
}
 
export default AuthNav;