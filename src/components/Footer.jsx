import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import appStore from '../assets/images/store.png'
const Footer = () => {
    return ( 
        <footer className="bg-green-100/75 py-10">
            <div className="w-11/12 mx-auto b">
                <div className="p-2 grid md:grid-cols-5 gap-10">
                    <div className="about">
                        <h3 className="font-bold">About</h3>
                        <p><Link>About Us</Link></p>
                        <p><Link>Testimonies</Link></p>
                        <p><Link>Contact Us</Link></p>
                        <p><Link>FAQ</Link></p>
                    </div>

                    <div className="services">
                        <h3 className="font-bold">Services</h3>
                        <p><Link>Voting</Link></p>
                        <p><Link>Online Surveys</Link></p>
                        <p><Link>Complaints</Link></p>
                    </div>

                    <div className="account">
                        <h3 className="font-bold">My Account</h3>
                        <p><Link>Authenticate</Link></p>
                        <p><Link>Live Chat</Link></p>
                        <p><Link>Support</Link></p>
                    </div>

                    <div className="legal">
                        <h3 className="font-bold">Legal</h3>
                        <p><Link>Security</Link></p>
                        <p><Link>Terms of Service</Link></p>
                        <p><Link>Privacy Policy</Link></p>
                    </div>

                    <div className="download">
                        <h3 className="font-bold">Download our app</h3>
                        <img src={appStore} alt="App Store" />
                        <p className="text-right px-4">
                            <Link><FontAwesomeIcon icon={faFacebook} className="text-black mr-5"/></Link>
                            <Link><FontAwesomeIcon icon={faInstagram} className="text-black mr-5"/></Link>
                            <Link><FontAwesomeIcon icon={faTwitter} className="text-black mr-5"/></Link>
                            <Link><FontAwesomeIcon icon={faYoutube} className="text-black mr-3"/></Link>
                        
                        </p>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;