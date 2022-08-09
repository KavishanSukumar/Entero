
import { Routes, Route } from "react-router-dom";
import Home from "./pages/beforeLogin/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import CustomerChat from "./pages/afterLogin/customer/CustomerChat";

import Chat from "./components/chat/Chat";

import AdminDashboard from './pages/afterLogin/admin/AdminDashboard';
import Admin from './pages/afterLogin/admin/Admin';
import CustomerServices from './pages/afterLogin/customer/CustomerServices';
import CustomerEvents from './pages/afterLogin/customer/CustomerEvents';
import AdminBusinessPolicies from './pages/afterLogin/admin/AdminBusinessPolicies';
import BusinessPolicies from './pages/beforeLogin/businesspolicies/BusinessPolicies';
import Appointment from './pages/afterLogin/customer/Appointment';
import Appointment2 from './pages/afterLogin/customer/Appointment2';
import CustomerAppointments from './pages/afterLogin/customer/CustomerAppointments';
import { FiSettings } from 'react-icons/fi';
import './App.css';


      




function App() {
  return (
    <div className="App">     
      <Routes>   
        <Home />           
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/customerServices" element={<CustomerServices />} />
        <Route path="/customerEvents" element={<CustomerEvents />} />
        <Route path="/adminbusinesspolicies" element={<AdminBusinessPolicies />} />
        <Route path="/businesspolicies" element={<BusinessPolicies />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointment2" element={<Appointment2 />} />
        <Route path="/customerAppointments" element={<CustomerAppointments />} />
      </Routes>

    </div>
  );
}

export default App