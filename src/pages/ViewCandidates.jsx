import CandidatesData from "../Candid";
import Candidates from "../components/Candidates";

const ViewCandidates = () => {
    return ( 
        <main>
           {/* <Candidates 
               title={"Registered Candidate"}
               showVoteButton = {false}
           /> */}

           <CandidatesData 
               title={"Registered Candidates"}
               showVoteBtn={false}
           />
        </main>
     );
}
 
export default ViewCandidates;