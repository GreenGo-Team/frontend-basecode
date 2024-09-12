import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import SignUp from './components/profile/SignUp.jsx';
import Loadingpage from './components/Loadingpage';
import Rewards from './components/Rewards.jsx'
import Scan from './components/scan/Scan.jsx'
import Scaned from './components/scan/Scaned.jsx';
import ScanedLocation from './components/scan/ScanedLocation.jsx';
import Learn from './components/learn/Learn.jsx';
import Profile from './components/profile/Profile.jsx';
import Signin from './components/profile/Signin.jsx';
import Learndetails from './components/learn/Learndetails.jsx';



function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/frontend-basecode' element={<Loadingpage />} />
          <Route path='/homepage' element={<Homepage />}></Route>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/rewards' element={<Rewards />} />
          <Route path='/scan' element={<Scan />} />
          <Route path='/scan/scaned' element={<Scaned />} />
          <Route path='/scanedlocation' element={<ScanedLocation />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/details' element={<Learndetails />} />
        </Routes>
    </div>
  );
}

export default App;
