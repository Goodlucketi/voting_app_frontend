import { Link } from "react-router-dom";

const LandingPage = () => {
    return ( 
        <header className="px-10">
            <main className="px-2 flex items-center h-screen overflow-hidden mx-auto ">
                <div className="text md:fixed md:w-4/12 text-center md:text-left bg-slate-700/95 p-4 rounded-xl">
                    {/* <h1 className="hidden font-bold lg:text-4xl md:text-2xl px-2 text-slate-100 text-2xl">
                        WELCOME TO BALLOT CODE
                        <br /><br />
                        <span className="text-slate-900 lg:text-5xl md:text-3xl text-4xl">
                            ELECTRONIC VOTING PLATFORM
                        </span>
                    </h1> */}
                    <p className="text-slate-100 text-center px-2 my-2 md:text-xl"><span className="text-blue-200"><Link to="/authentication">Register / Login</Link></span> to cast your votes </p>
                </div>
            </main>
        </header>
     );
}
 
export default LandingPage;