import { useEffect, useState } from "react";

const VoteResults = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch("https://app.snosfortress.com/controllers/voteResults.php")
            .then(response => response.json())
            .then(data => setResults(data.results))
            .catch(error => console.error("Error loading results:", error));
    }, []);

    return ( 
        <main className="p-4 vote-results">
            <div>
                <h2 className="text-center font-bold text-3xl md:my-10">Vote Results</h2>
                <table className="results_table border-collapse w-11/12 mx-auto border-2">
                    <thead className="text-left">
                        <tr className="border-2">
                            <th className="p-2 border-2">S/N</th>
                            <th className="p-2 border-2">Candidate Name</th>
                            <th className="p-2 border-2">Vote Count</th>
                            <th className="p-2 border-2">PARTY</th>
                        </tr>   
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                           <tr className="border-2" key={index}>
                                <td className="p-2 border-2">{index+1}</td>
                                <td className="p-2 border-2">{result.candidate_name}</td>
                                <td className="p-2 border-2">{result.vote_count}</td>
                                <td className="p-2 border-2">{result.party.toUpperCase()}</td>
                           </tr>     
                        ))}
                        
                    </tbody>
                </table>
            </div>

        </main>
    );
}

export default VoteResults;