import { Link } from "react-router-dom";
import vote from "../assets/images/rb_4448.png"

const LandingPage = () => {
    return ( 
        <header className="md:py-2 md:w-11/12 mx-auto">
            <main className="md:grid md:grid-cols-2 items-center h-screen md:h-92 overflow-hidden mx-auto pt-10">
                <div className="text md:relative md:text-left p-4 rounded-xl mb-5">
                    <p className="p-2 md:text-2xl text-green-700">Your Vote... Your Power...</p> 
                    <h1 className="font-bold px-2 text-2xl md:text-3xl mb-2">
                        VOTE WITH <span className="px-2 text-green-700 lg:text-4xl md:text-3xl rounded-md ">EASE</span>
                        <br />
                        VOTE WITH  <span className="px-2 text-green-700 lg:text-4xl md:text-3xl rounded-md ">CONFIDENCE</span>
                    </h1>
                    <p className="text-slate-900 p-2 md:text-xl mb-5">Simple, Secure and Transparent Voting starts with<Link className="text-green-700 text-xl font-bold underline rounded-lg shadow-md" to="/authentication"> iVote</Link></p>
                    
                    <Link className="bg-green-700 rounded-md shadow-md text-white px-4 py-2" to="/authentication"> <button>Get Started</button></Link>
                </div>
                <div className="image">
                    <img src={vote} alt="E-Voting" className="h-72 object-cover" />
                </div>
            </main>
        </header>
     );
}
 
export default LandingPage;