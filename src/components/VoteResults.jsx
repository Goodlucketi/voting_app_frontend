import { useEffect, useState } from "react";

const VoteResults = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
       const storedResults = JSON.parse(localStorage.getItem('parties'))
    //    console.log(storedResults);
       setResults(storedResults)
       
    }, []);

    return ( 
        <main className="p-6 vote-results mb-10">
            <div>
                <h2 className="text-center font-bold text-2xl text-green-700 md:text-3xl my-5 ">Vote Results</h2>
                <table className="results_table border-collapse mx-auto border-2 w-full">
                    <thead className="text-left">
                        <tr className="border-2 text-center">
                            <th className="p-2 border-2">S/N</th>
                            <th className="p-2 border-2">PARTY LOGO</th>
                            <th className="p-2 border-2">PARTY NAME</th>
                            <th className="p-2 border-2">VOTE COUNT</th>

                        </tr>   
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                           <tr className="border-2 text-center" key={index}>
                                <td className="p-2 border-2 text-center">{index+1}</td>
                                <td className="p-2 border-2"><img src={`${result.candidatesLogo}`} alt="" className="w-4/12 md:w-1/12 mx-auto"/></td>
                                <td className="p-2 border-2">{result.candidateParty}</td>
                                <td className="p-2 border-2">{result.votes}</td>

                           </tr>     
                        ))}
                        
                    </tbody>
                </table>
            </div>

        </main>
    );
}

export default VoteResults;