import React, { useEffect, useState } from 'react';
const Vote_History = () => {
    const [voteHistory, setVoteHistory] = useState([]);
    const [voterId, setVoterId] = useState(null)

    useEffect(() => {
        const voter = JSON.parse(localStorage.getItem('parties'))
        setVoteHistory(voter)
        console.log(voteHistory);
        
    },[])

    return ( 
        <main className="p-2 mb-10 vote-history">
            <div className="history">
                <h2 className="my-5 text-center font-bold text-green-700 text-2xl md:text-3xl">Vote History</h2>
                <table className="border-2 border-collapse text-center mx-auto w-full">
                    <thead>
                        <tr>
                            <th className="p-1 border-2">S/N</th>
                            <th className="p-1 border-2">Party</th>
                            <th className="p-1 border-2">Vote Count</th>
                            <th className="p-1 border-2">Vote Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {voteHistory.map((vote, index) => (
                            <tr key={index}>
                                <td className="p-1 border-2">{index+1}</td>
                                <td className="p-1 border-2"><img src={`${vote.candidatesLogo}`} alt="" className="w-4/12 md:w-1/12 mx-auto"/></td>
                                <td className="p-1 border-2">{vote.votes}</td>
                                <td className="p-1 border-2">{new Date().toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
     );
}
 
export default Vote_History