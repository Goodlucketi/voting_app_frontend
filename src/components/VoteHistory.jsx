import React, { useEffect, useState } from 'react';
const Vote_History = () => {
    const [voteHistory, setVoteHistory] = useState([]);
    const [voterId, setVoterId] = useState(null)

    useEffect(() => {
        const voter = localStorage.getItem('voter')
    },[])

    return ( 
        <main className="p-4 h-screen">
            <div className="history">
                <h2 className="my-5 text-center font-bold text-green-700 text-2xl md:text-3xl">Vote History</h2>
                <div className="table w-11/12 mx-auto">
                    <table className="border-2 mx-auto">
                        <thead>
                            <tr>
                                <th className="p-2 border-2">S/N</th>
                                <th className="p-2 border-2">Candidate Name</th>
                                <th className="p-2 border-2">Candidate Party</th>
                                <th className="p-2 border-2">Candidate Vote Count</th>
                                <th className="p-2 border-2">Vote Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {voteHistory.map((vote, index) => (
                                <tr key={index}>
                                    <td className="p-2 border-2">{index+1}</td>
                                    <td className="p-2 border-2">{vote.candidate_name}</td>
                                    <td className="p-2 border-2">{vote.candidate_party.toUpperCase()}</td>
                                    <td className="p-2 border-2">{vote.vote_count}</td>
                                    <td className="p-2 border-2">{new Date(vote.vote_date).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
     );
}
 
export default Vote_History