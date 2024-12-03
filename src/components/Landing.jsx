import { Link } from "react-router-dom";
import vote from "../assets/images/rb_4448.png"

const LandingPage = () => {
    return ( 
        <header className="md:py-2 md:w-11/12 mx-auto">
            <main className="md:grid md:grid-cols-2 items-center h-screen md:h-92 overflow-hidden mx-auto py-10">
                <div className="text md:relative md:text-left p-4 rounded-xl mb-5">
                    <p className="p-2 text-2xl font-bold">Your Vote... Your Power...</p> 
                    <h1 className="font-bold text-green-700 lg:text-4xl md:text-2xl px-2 text-green-700 text-3xl mb-5">
                        CAST IT WITH CONFIDENCE ON <span className="bg-green-700 text-white px-2 rounded-md ">
                            BALLOTCODE
                        </span>
                    </h1>
                    <p className="text-slate-900 p-2 md:text-xl">Simple, Secure and Transparent Voting Starts <Link className="text-green-700 font-bold underline rounded-lg shadow-md" to="/authentication">Here</Link></p>
                </div>
                <div className="image">
                    <img src={vote} alt="E-Voting" className="h-72 object-cover" />
                </div>
            </main>
        </header>
     );
}
 
export default LandingPage;