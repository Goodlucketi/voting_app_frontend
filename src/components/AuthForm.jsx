
const AuthForm = ({title, option, onSubmit, setFullname, setVoterID, setNIN, fullname, voterID, nin }) => {

    return ( 
        <div className="form px-4 pt-10">
            <form onSubmit={onSubmit} className="auth p-10 bg-slate-50/70 shadow-lg rounded-md">
                <h2 className="text-lg md:text-2xl text-center font-bold mb-2 text-green-700 p-2 w-7/12 rounded-md mx-auto">{title}</h2>

                <div className="p-2">
                    <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="fullname" value={fullname} placeholder="Fullname (Surname, Other Names)" onChange={(e)=>setFullname(e.target.value)} />
                </div>
                
                <div className="p-2">
                    <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="voters_id" value={voterID} placeholder="Voter ID No." onChange={(e)=>setVoterID(e.target.value)} />
                </div>
                <div className="p-2">
                    <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="nin" value={nin} placeholder="NIN" onChange={(e)=>setNIN(e.target.value)} />
                </div>
                

                <div className="p-2 my-2">
                    <input type="submit" value={option} className="p-3 rounded-md border-none w-full bg-green-700 text-white hover:bg-green-500 transition-all duration-500" />
                </div>
            </form>

        </div>
    );
}


export default AuthForm;