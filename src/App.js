import './App.css';
import { Route,Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import SignUp from './components/SignUp';
import Loadingpage from './components/Loadingpage';
import Rewards from './components/Rewards.jsx'
import Scan from './components/scan/Scan.jsx'
import Scaned from './components/scan/Scaned.jsx';
import ScanedLocation from './components/scan/ScanedLocation.jsx';
import Learn from './components/learn/Learn.jsx';
import Profile from './components/profile/Profile.jsx';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Loadingpage/>}/>
        <Route path='/homepage' element={<Homepage/>}></Route>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/rewards' element={<Rewards/>}/>
        <Route path='/scan' element={<Scan/>}/>
        <Route path='/scan/scaned' element={<Scaned/>}/>
        <Route path='/scanedlocation' element={<ScanedLocation/>}/>
        <Route path='/learn' element={<Learn />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
