import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="bg-green-100/75 pt-10">
            <div className="w-11/12 mx-auto px-4">
                <div className="p-2 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 md:text-lg">
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
                </div>
            </div>
                <p className="text-slate-300 p-2 text-center bg-slate-900 mt-5">Powered by <span className="text-green-500 font-bold">iVOTE</span> </p>
        </footer>
     );
}
 
export default Footer;