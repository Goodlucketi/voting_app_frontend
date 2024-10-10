import candidateImg from "../assets/images/candidate.png"
import candidateImg2 from "../assets/images/candidate (2).png"
import candidateImg3 from "../assets/images/candidate (3).png"
import candidateImg4 from "../assets/images/candidate (4).png"
import candidateImg5 from "../assets/images/candidate (5).png"
import candidateImg6 from "../assets/images/candidate (6).png"
import { useState } from "react"

const Candidates = ({title, vote, showVoteButton}) => {
    const candidates = [
        {
            name: "Albert Johnson",
            description: "I am a good guy",
            image_url: candidateImg,
            voteCount: 36,
        },
        {
            name: "Uwakmfon Akpan",
            description: "I am a good guy",
            image_url: candidateImg2,
            voteCount: 20,
        },
        {
            name: "Godwin Felix",
            description: "I am a good guy",
            image_url: candidateImg3,
            voteCount: 30,
        },
        {
            name: "Mary Thompson",
            description: "I am a good girl",
            image_url: candidateImg4,
            voteCount: 40,
        },
        {
            name: "Mercy Victor",
            description: "I am a good girl",
            image_url: candidateImg5,
            voteCount: 35,
        },
        {
            name: "Glory James",
            description: "I am a good girl",
            image_url: candidateImg6,
            voteCount: 33,
        }
    ]

    let [voteCount, setVoteCount] = useState(candidates.map((candidate) => candidate.voteCount))

    const voteCandidate = (index)=>{
        const newVoteCounts = [...voteCount];

        newVoteCounts[index] += 1;

        setVoteCount(newVoteCounts);
       
        // console.log(voteCount[index]);
        
    }
    return ( 
        <main className="w-11/12 mx-auto py-4">
            <h2 className="text-3xl my-5 text-center font-bold">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
                {candidates.map((candidate, index) => (
                <div key={index} className="border p-4 rounded shadow-lg hover:scale-110 transition-all duration-500">
                    <img
                    src={candidate.image_url}
                    alt={`${candidate.name}'s photo`}
                    className="w-full h-64 object-cover object-top rounded"
                    />
                    <h3 className="text-lg font-semibold">{candidate.name}</h3>
                    <p>{candidate.description}</p>
                    <p className="font-bold text-lg">Votes: {voteCount[index]}</p>

                    {showVoteButton && (
                    <button onClick={() => voteCandidate(index)} className="bg-green-800 py-2 px-4 rounded-md">{vote}</button>
                    )}
                </div>
                ))}
            </div>
        </main>
     );
}
 
export default Candidates;