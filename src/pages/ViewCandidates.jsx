import CandidatesData from "../components/Candid";

const ViewCandidates = () => {
    return ( 
        <main>
           <CandidatesData 
               title={"Registered Candidates"}
               showVoteBtn={false}
           />
        </main>
     );
}
 
export default ViewCandidates;