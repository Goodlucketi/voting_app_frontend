const Vote_History = () => {
    return ( 
        <main className="p-4">
            <div className="history">
                <h2 className="my-5 text-center font-bold test-slate-600 text-3xl">Vote History</h2>
                <div className="table w-11/12 mx-auto">
                    <table className="border-2 w-full">
                        <thead>
                            <tr>
                                <td className="px-2">S/N</td>
                                <td className="px-2">Voter Name</td>
                                <td className="px-2">Candidate Name</td>
                                <td className="px-2">Candidate Vote Count</td>
                                <td className="px-2">Remark</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
     );
}
 
export default Vote_History