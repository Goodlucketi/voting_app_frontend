
import aboutImg3 from "../assets/images/E-voting.png"
import { Link } from "react-router-dom";
const About = () => {
    
    return ( 
        <main className="w-11/12 mx-auto shadow-md px-4">
            <div className="about grid md:grid-cols-2 gap-x-5">
            <div className="img-grid">
                    <div className="img1">
                        <img src={aboutImg3} alt="" />
                    </div>
                </div>
                <div className="about-text p-2 py-8">
                    <h2 className="font-bold text-3xl text-green-700 mb-3">About iVOTE</h2>
                    <p className="text-xl text-justify mb-10 md:mb-5">
                    iVOTE is a modern voting platform designed to revolutionize the electoral process of the Independent National Electoral Commission (INEC) of Nigeria with security, transparency, and simplicity at its core. Built for electoral bodies and voters alike, our platform ensures every vote is counted accurately and securely while empowering stakeholders to monitor and manage elections seamlessly.
                    </p>
                    <Link to="/authentication" className="text-slate-50 font-bold p-3 shadow-md bg-green-700 hover:bg-green-500 duration-500 transition-all rounded-md ">Get Started</Link>
                </div>
                

            </div>
        </main>
     );
}
 
export default About;