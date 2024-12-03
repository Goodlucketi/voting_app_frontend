import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLock, faChartBar, faVoteYea, faCheckCircle, faHistory } from "@fortawesome/free-solid-svg-icons";
import  works from "../assets/images/rb_437.png"

const HowItWorks = () => {
    return ( 
        <main className="my-20 py-20">
            <div className="how-it-works w-11/12 mx-auto">
                <div className="howitworks grid md:grid-cols-2 gap-5 items-center">
                    <div className="image">
                        <img src={works} alt="How It Works" />
                    </div>
                    <div className="works">
                        <h2 className="font-bold text-2xl md:text-3xl text-green-700 mb-3 text-left">How It Works</h2>

                        <ul>
                            <li className="my-2 shadow-md bg-slate-50/50 p-6">
                                <FontAwesomeIcon icon={faLock} className="text-green-700 text-2xl"/>
                                <h2 className="font-bold text-xl text-green-800">Authenticate Securely</h2>
                                <p>Use your NIN and BVN to verify your identity and access the voting system.</p>
                            </li>
                            <li className="my-2 shadow-md bg-slate-50/50 p-6">
                                <FontAwesomeIcon icon={faVoteYea} className="text-green-700 text-2xl"/>
                                <h2 className="font-bold text-xl text-green-800">Choose Your Candidate</h2>
                                <p>Browse the list of candidates and select your preferred choice.</p>
                            </li>
                            <li className="my-2 shadow-md bg-slate-50/50 p-6">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-700 text-2xl"/>
                                <h2 className="font-bold text-xl text-green-800">Cast Your Vote</h2>
                                <p>Confirm your selection and cast your vote with confidence.</p>
                            </li>
                            <li className="my-2 shadow-md bg-slate-50/50 p-6">
                                <FontAwesomeIcon icon={faHistory} className="text-green-700 text-2xl"/>
                                <h2 className="font-bold text-xl text-green-800">View Vote History</h2>
                                <p>Access history of previous elections and votes.</p>
                            </li>
                            <li className="my-2 shadow-md bg-slate-50/50 p-6">
                                <FontAwesomeIcon icon={faChartBar} className="text-green-700 text-2xl"/>
                                <h2 className="font-bold text-xl text-green-800">View Election Results</h2>
                                <p>Access real-time election results once voting ends.</p>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default HowItWorks;