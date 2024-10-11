import Candidates from "../Candid";

const Vote = () => {
    return ( 
        <main className="votes p-4 mx-auto w-11/12 h-auto">
            <div className="header">
                <Candidates
                    title={"Vote a Candidate"}
                    vote={"Vote"}
                    showVoteBtn={true}
                />
            </div>
        </main>
     );
}
 
export default Vote;