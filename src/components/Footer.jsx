import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="bg-green-100/75 pt-10    ">
            <div className="w-11/12 mx-auto px-4 md:py-8">
                <div className="p-2 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-64 md:text-lg">
                    <div className="about">
                        <h3 className="font-bold mb-2 text-xl">About</h3>
                        <p className="mb-2"><Link>About Us</Link></p>
                        <p className="mb-2"><Link>Testimonies</Link></p>
                        <p className="mb-2"><Link>Contact Us</Link></p>
                        <p className="mb-2"><Link>FAQ</Link></p>
                    </div>

                    <div className="services">
                        <h3 className="font-bold mb-2 text-xl">Services</h3>
                        <p className="mb-2"><Link>Voting</Link></p>
                        <p className="mb-2"><Link>Online Surveys</Link></p>
                        <p className="mb-2"><Link>Complaints</Link></p>
                    </div>

                    <div className="account">
                        <h3 className="font-bold mb-2 text-xl">My Account</h3>
                        <p className="mb-2"><Link>Authenticate</Link></p>
                        <p className="mb-2"><Link>Live Chat</Link></p>
                        <p className="mb-2"><Link>Support</Link></p>
                    </div>

                    <div className="legal">
                        <h3 className="font-bold mb-2 text-xl">Legal</h3>
                        <p className="mb-2"><Link>Security</Link></p>
                        <p className="mb-2"><Link>Terms of Service</Link></p>
                        <p className="mb-2"><Link>Privacy Policy</Link></p>
                    </div>
                </div>
            </div>
                <p className="text-slate-300 p-2 text-center bg-slate-900 mt-5">Powered by <span className="text-green-500 font-bold">iVOTE</span> </p>
        </footer>
     );
}
 
export default Footer;