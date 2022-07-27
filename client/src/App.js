import Chat from "./components/chat/Chat";
import { Routes,Route} from 'react-router-dom';
// import Home from "./pages/Home";
// import Events from "./pages/Events";
// import Services from "./pages/Services";
// import ContactUs from "./pages/ContactUs";
// import AboutUs from "./pages/AboutUs";
// import AdminPage from "./pages/AdminPage";
// import AdminEvents from "./pages/AdminEvents";
// import AdminDashboard from "./pages/AdminDashboard";
import {AdminDashboard} from './pages';
import {Admin} from './pages';
import {Services} from './pages';
import {Customers2} from './pages';
import {BusinessPolicies} from './pages';
import {Appointment} from './pages';
import {Appointment2} from './pages';
import { FiSettings } from 'react-icons/fi';
import './App.css';


function App() {
  return (
    <div className="App">
      
      <Routes>
                   
        {/* <Route exact path="/" element={<Home/>} /> */}
        {/* <Route exact path="/events" element={<Events/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/aboutus" element={<AboutUs/>} />
        <Route exact path="/contactus" element={<ContactUs/>} />
        <Route exact path="/adminpage" element={<AdminPage />} />
        <Route exact path="/adminevents" element={<AdminEvents />} /> */}

        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/services" element={<Services />} />
        <Route path="/customers2" element={<Customers2 />} />
        <Route path="/businesspolicies" element={<BusinessPolicies />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointment2" element={<Appointment2 />} />
        

      </Routes>
      {/* <Chat /> */}
    </div>
  );
}

export default App