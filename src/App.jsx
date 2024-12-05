import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CandidateReg from "./pages/CandidatesReg"
import ViewCandidates from './pages/ViewCandidates';
import Home from './pages/Home';
import Authentication from './pages/Authentication'
import UserDashPage from './pages/UserDash';
import PrivateRoute from './components/PrivateRoute';
import Support from './pages/Support.';


function App() {
  return (
   <Router>
    <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path = "/candidateReg" element={<CandidateReg/>} />
      <Route path = "/ViewCandidates" element = {<ViewCandidates/>} />
      <Route path = "/authentication" element = {<Authentication/>} />
      <Route path = "/support" element = {<Support/>} />

      <Route 
        path = "/dashboard"
        element = {
          <PrivateRoute>
            <UserDashPage/>
          </PrivateRoute>
        } 
      />
    </Routes>
   </Router>
  )
}

export default App
