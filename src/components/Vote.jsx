import Candidates from "../Candid";

const Vote = () => {
    return ( 
        <main className="votes p-4 mx-auto w-11/12 h-screen">
            <div className="header">
                <Candidates
                    title={"Vote a Candidate"}
                    vote={"Vote"}
                    showVoteButton={true}
                />
            </div>
        </main>
     );
}
 
export default Vote;