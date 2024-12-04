import { Link } from "react-router-dom";

const AuthForm = ({title, error, option, onSubmit, setFullname, setVoterId, setNIN, fullname, voterID, nin }) => {

    return ( 
        <div className="form px-4">
           
            <form onSubmit={onSubmit} className="auth p-10 bg-slate-50/95 shadow-lg rounded-md">
                <h2 className="text-lg md:text-2xl text-center mb-2 text-black p-2 w-9/12 rounded-md mx-auto font-sans">{title}</h2>
                {error && (
                        <p className="text-center text-red-600">{error}</p>
                    )}
                <div className="p-2 my-2">
                    <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="fullname" value={fullname} placeholder="Fullname (Surname, Other Names)" onChange={(e)=>setFullname(e.target.value)} />
                </div>
                
                <div className="p-2 my-2">
                    <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="voters_id" value={voterID} placeholder="Voter ID No." onChange={(e)=>setVoterId(e.target.value)} />
                </div>
                <div className="p-2 my-2">
                    <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="nin" value={nin} placeholder="NIN" onChange={(e)=>setNIN(e.target.value)} />
                </div>
                

                <div className="p-2 my-4">
                    <input type="submit" value={option} className="p-3 rounded-md border-none w-full bg-green-700 text-white hover:bg-green-500 transition-all duration-500" />
                </div>

                <div className="privacy flex justify-between mx-auto mb-5">
                    <p className="text-sm text-green-700 p2">Privacy Policy</p>
                    <p className="text-sm text-green-700 p2">Terms of Service</p>
                </div>

                <p className="p-2 text-center text-black">Need Assistance? <Link to="/support" className="text-green-700">Contact Support</Link></p>
            </form>
           
            
        </div>
    );
}


export default AuthForm;