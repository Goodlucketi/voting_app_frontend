import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CandidateReg from "./pages/CandidatesReg"
import ViewCandidates from './pages/ViewCandidates';
import VotingPage from './pages/VotingPage';
import Home from './pages/Home';
function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path = "/candidateReg" element={<CandidateReg/>} />
      <Route path = "/ViewCandidates" element = {<ViewCandidates/>} />
      <Route path = "/votingPage" element = {<VotingPage/>} />
    </Routes>
   </Router>
  )
}

export default App
