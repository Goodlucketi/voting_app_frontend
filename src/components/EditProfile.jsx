import { useEffect, useState } from "react";

 
const EditProfile = () => {
    
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [voterId, setVoterId] = useState('');
    const [selectedLga, setSelectedLga] = useState('')
    const [selectedState, setSelectedState] = useState("")
    const [gender, setGender] = useState('')
    const [ward, setWard] = useState('')
    const [ageRange, setAgeRange] = useState('')

    const [states, setStates] = useState([])
    const [lgas, setLgas] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        fetch('https://nigerian-states-and-lga.vercel.app/')
        .then(response => {
            if(!response){
                throw new Error("Network Response was not Ok");
            }
            return response.json()
        })
        .then(result=>{
            setStates(result)         
            setLoading(false)
        })
        .catch(err=>{
            setError("Failed to Load States")
            setLoading('false')
        })
    }, [])    

    const handleStateChange = (e)=>{
        const selectedState = e.target.value;
        setSelectedState(selectedState)
        const stateData = states.find(state => state.name === selectedState)
        setLgas(stateData ? stateData.lgas : [])
        setSelectedLga('')
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        console.log("Edit Profile");   
    }

    return ( 
        <div className="form h-screen shadow-md p-4 border-slate-200 mx-auto">
            <form onSubmit={onSubmit} className="auth">
                <h2 className="text-2xl text-center font-bold">Edit Your Profile</h2>

                <div className="p-2">
                    <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="fullname" value={fullname} placeholder="Full Name" onChange={(e)=>setFullname(e.target.value)} />
                </div>
                    
                <div className="p-2">
                    <input type="email" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="email" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                </div>

               
                <div className="p-2">
                    <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="phone" value={phone} placeholder="Phone" onChange={(e)=>setPhone(e.target.value)} />
                </div>
            
                <div className="p-2">
                    <select name="state" id="state" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" value={selectedState} onChange={handleStateChange}>
                        <option value="">Select State</option>
                        {states.map((state,index)=>(
                            <option key={index} value={state.name}>{state.name}</option>
                        ))}
                    </select>
                </div>        
              
                <div className="p-2">
                    <select name="lga" id="lga" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" value={selectedLga} onChange={(e)=>setSelectedLga(e.target.value)}>
                        <option value="">Select LGA</option>
                        {lgas.map((lgaName,index)=>(
                            <option key={index} value={lgaName}>{lgaName}</option>
                        ))}
                    </select>
                </div>        
              
                <div className="p-2">
                    <select name="ward" id="ward" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" value={ward} onChange={(e)=>setWard(e.target.value)}>
                        <option value="">Select Ward</option>
                        <option value="ward 1">Ward 1</option>
                        <option value="ward 2">Ward 2</option>
                        <option value="ward 3">Ward 3</option>
                    </select>
                </div>        

                <div className="p-2">
                    <select name="gender" id="gender" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" value={gender} onChange={(e)=>setGender(e.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                    </select>
                </div>        
                             <div className="p-2">
                    <select name="age_range" id="age_range" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" value={ageRange} onChange={(e)=>setAgeRange(e.target.value)}>
                            <option value="">Age Range</option>
                            <option value="18-30">18 - 30</option>
                            <option value="31 - 50">31 - 50</option>
                            <option value="51 - 70">51 - 70</option>
                            <option value="70 above">70 and Above</option>
                    </select>
                </div>                        
                <div className="p-2">
                    <input type="text" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="voterId" value={voterId} placeholder="Voter ID Number" onChange={(e)=>setVoterId(e.target.value)} />
                </div>
                

                <div className="p-2">
                    <input type="password" className="p-3 text-slate-900 rounded-md shadow-md border-none w-full" name="password" value={password} placeholder="Password" minLength={6} onChange={(e)=>setPassword(e.target.value)} />
                </div>
           
                <div className="p-2 my-2">
                    <input type="submit" value="Update" className="p-3 rounded-md border-none w-full bg-blue-700 text-white hover:bg-blue-500 transition-all duration-500" />
                </div>
            </form>

        </div>
    );
}


export default EditProfile;