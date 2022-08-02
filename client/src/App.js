import Chat from "./components/chat/Chat";
import { Routes,Route} from 'react-router-dom';

import {AdminDashboard} from './pages';
import {Admin} from './pages';
import {Services} from './pages';
import {Services2} from './pages';
import {Customers2} from './pages';
import {AdminBusinessPolicies} from './pages';
import {BusinessPolicies} from './pages';
import {Appointment} from './pages';
import {Appointment2} from './pages';
import { FiSettings } from 'react-icons/fi';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Routes>
                   

        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services2" element={<Services2 />} />
        <Route path="/customers2" element={<Customers2 />} />
        <Route path="/adminbusinesspolicies" element={<AdminBusinessPolicies />} />
        <Route path="/businesspolicies" element={<BusinessPolicies />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointment2" element={<Appointment2 />} />
        

      </Routes>
      {/* <Chat /> */}
    </div>
  );
}

export default App