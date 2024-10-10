import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <header className="bg-slate-900 sticky top-0 left-0 z-10">
            <nav className="p-2 flex items-center justify-between w-11/12 mx-auto shadow-md text-white font-mono">
                <div className="logo">
                    <h2><Link to="/" >Voting System</Link></h2>
                </div>
                <div className="actions flex items-center gap-5">
                    <li className="p-2 my-2 list-none"><Link to="/">Home</Link></li>
                    <li className="p-2 my-2 list-none"><Link to="/candidateReg">Register Candidate</Link></li>
                    <li className="p-2 my-2 list-none"><Link to="/viewCandidates">View Candidates</Link></li>
                    <li className="p-2 my-2 list-none"><Link to="/votingPage">Vote Candidate</Link></li>
                </div>
            </nav>
        </header>
     );
}
 
export default Navbar;