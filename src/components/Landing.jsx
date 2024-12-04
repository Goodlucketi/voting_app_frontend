import { Link } from "react-router-dom";
import vote from "../assets/images/rb_4448.png"

const LandingPage = () => {
    return ( 
        <header className="md:py-2 md:w-11/12 mx-auto">
            <main className="md:flex md:justify-between items-center py-20 md:pt-32 overflow-hidden mx-auto pt-10">
                <div className="text md:relative md:text-left p-4 rounded-xl mb-5 md:w-6/12">
                    <p className="p-2 md:text-2xl text-green-700">Your Vote... Your Power...</p> 
                    <h1 className="font-bold px-2 text-3xl mb-2">
                        VOTE WITH <span className="px-2 text-green-700 lg:text-5xl md:text-4xl rounded-md ">EASE</span>
                        <br />
                        VOTE WITH  <span className="px-2 text-green-700 lg:text-5xl md:text-4xl rounded-md ">CONFIDENCE</span>
                    </h1>
                    <p className="text-slate-900 p-2 md:text-xl mb-5 md:mb-10">Simple, Secure and Transparent Voting starts with<Link className="text-green-700 text-xl font-bold underline rounded-lg shadow-md" to="/authentication"> iVote</Link></p>
                    
                    <Link className="bg-green-700 rounded-md shadow-md text-white p-4" to="/authentication"> <button>Get Started</button></Link>
                </div>
                <div className="image md:w-6/12">
                    <img src={vote} alt="E-Voting" className="mx-auto object-cover" />
                </div>
            </main>
        </header>
     );
}
 
export default LandingPage;