
 
const AuthForm = ({title, option, isSignUp = true, onSubmit, toggleForm, fullname, email, phone, password, setFullname, setEmail, setPhone, setPassword}) => {
    return ( 
        <div className="form shadow-md p-4 border-slate-200">
            <form onSubmit={onSubmit} className="auth">
                <h2 className="text-2xl text-center font-bold">{title}</h2>

                {isSignUp && (
                    <div className="p-2 my-2">
                        <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="fullname" value={fullname} placeholder="Full Name" onChange={(e)=>setFullname(e.target.value)} />
                    </div>
                    
                )}

                <div className="p-2 my-2">
                    <input type="email" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                </div>

                {isSignUp && (
                    <div className="p-2 my-2">
                        <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="phone" value={phone} placeholder="Phone" onChange={(e)=>setPhone(e.target.value)} />
                    </div>
                    
                )}

                <div className="p-2 my-2">
                    <input type="password" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="password" value={password} placeholder="Password" minLength={6} onChange={(e)=>setPassword(e.target.value)} />
                </div>

                <div className="p-2 my-2">
                    <input type="submit" value={option} className="p-3 rounded-md border-none w-full bg-blue-700 text-white hover:bg-blue-500 transition-all duration-500" />
                </div>
            </form>

            <div className="info">
                {isSignUp ? (
                    <p className="text-center">Already Signup, <span onClick={toggleForm}
                    className="text-blue-300 underline cursor-pointer">Login</span></p>
                ):(
                    <p className="text-center">Don't have account?, <span onClick={toggleForm} className="text-blue-300 underline cursor-pointer">Sign-up</span></p>
                )}
            </div>
        </div>
    );
}


export default AuthForm;