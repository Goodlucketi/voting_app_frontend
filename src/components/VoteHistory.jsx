import React, { useEffect, useState } from 'react';
const Vote_History = () => {
    const [voteHistory, setVoteHistory] = useState([]);
    const [voterId, setVoterId] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            try {
              const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT token (assuming it's a JWT token)
              const userId = decoded.user_id; // Assuming user_id is part of the token payload
              setVoterId(userId);
            } catch (e) {
              console.error('Error decoding JWT:', e);
            }
        }

        if(voterId){
            // Fetch vote history from the backend
            fetch(`https://app.snosfortress.com/controllers/voteHistory.php?voter_id=${voterId}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setVoteHistory(data.voteHistory);
                }else {
                    console.log('No vote history found');
                }
            }).catch(error => console.error('Error fetching vote history:', error));
        }
    }, [voterId]);

    return ( 
        <main className="p-4">
            <div className="history">
                <h2 className="my-5 text-center font-bold test-slate-600 text-3xl">Vote History</h2>
                <div className="table w-11/12 mx-auto">
                    <table className="border-2 w-full">
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