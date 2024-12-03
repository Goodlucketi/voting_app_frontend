import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";
import About from "../components/About";
import Feature from "../components/Feature";
import LandingPage from "../components/Landing";
import { faLock, faChartBar, faVoteYea, faExclamationCircle, faGlobe, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import Contact from "../components/HowItWorks";


const Home = () => {
    return ( 
        <main className="">
            <LandingPage />
            <About />
            <div className="features mx-auto mt-20 bg-green-900 p-4">
                <h2 className="font-bold text-3xl text-slate-50 text-center">Features</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 my-10 w-11/12 mx-auto">
                    <Feature 
                        title="Secure and Reliable Authentication"
                        description="Authenticate seamlessly with your NIN and BVN for a secure, fraud-free voting experience."
                        icon={faLock}
                    />
                    <Feature 
                        title="Transparent Voting Process"
                        description="Cast your vote with confidence, knowing every ballot is counted and tracked transparently."
                        icon={faVoteYea}
                    />
                    <Feature 
                        title="Real Time Election Results"
                        description="Stay informed with real-time access to election updates and results."
                        icon={faChartBar}
                    />
                    <Feature 
                        title="Anomaly Reporting for Transparency"
                        description="Our observer network ensures elections are monitored and irregularities are addressed promptly."
                        icon={faExclamationCircle}
                    />
                    <Feature 
                        title=" Accessible Anywhere, Anytime"
                        description="Vote securely from anywhere with our mobile-friendly and easy-to-use platform."
                        icon={faGlobe}
                    />
                     <Feature 
                        title="Easy Accessibility" 
                        description="Accessible on any device, anywhere... empowering voters with easy access to the election process."
                        icon={faUniversalAccess}
                    />
                </div> 
            </div>
            <Contact />
            
        </main>
     );
}
 
export default Home;