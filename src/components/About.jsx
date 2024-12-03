import aboutImg1 from "../assets/images/evote_grid.jpg"
import aboutImg2 from "../assets/images/evote_grid2.jpg"
import aboutImg3 from "../assets/images/E-voting.png"
import { Link } from "react-router-dom";
const About = () => {
    
    return ( 
        <main className="w-11/12 mx-auto shadow-md my-10 py-10 px-4">
            <div className="about grid md:grid-cols-2 gap-5">
            <div className="img-grid">
                    {/* <div className="img1">
                        <img src={aboutImg1} alt="" />
                    </div> */}
                    {/* <div className="img1">
                        <img src={aboutImg2} alt="" />
                    </div> */}
                    <div className="img1">
                        <img src={aboutImg3} alt="" />
                    </div>
                </div>
                <div className="about-text p-2 py-8">
                    <h2 className="font-bold text-3xl text-green-700 mb-3">About iVOTE</h2>
                    <p className="text-xl text-justify mb-10 md:mb-5">
                    BallotCode is a modern voting platform designed to revolutionize the electoral process of the Independent National Electoral Commission (INEC) of Nigeria with security, transparency, and simplicity at its core. Built for electoral bodies and voters alike, our platform ensures every vote is counted accurately and securely while empowering stakeholders to monitor and manage elections seamlessly.
                    </p>
                    <Link to="/authentication" className="text-slate-50 font-bold p-3 shadow-md bg-green-700 hover:bg-green-500 duration-500 transition-all rounded-md ">Get Started</Link>
                </div>
                

            </div>
        </main>
     );
}
 
export default About;