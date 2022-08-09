import Chat from "./components/chat/Chat";
import { Routes,Route} from 'react-router-dom';

import AdminDashboard from './pages/afterLogin/admin/AdminDashboard';
import Admin from './pages/afterLogin/admin/Admin';
import Services from './pages/afterLogin/customer/Services';
import Services2 from './pages/afterLogin/customer/Services2';
import CustomerServices from './pages/afterLogin/customer/CustomerServices';
import CustomerEvents from './pages/afterLogin/customer/CustomerEvents';
import Customers2 from './pages/afterLogin/customer/Customers2';
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
                   

        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services2" element={<Services2 />} />
        <Route path="/customerServices" element={<CustomerServices />} />
        <Route path="/customerEvents" element={<CustomerEvents />} />
        <Route path="/customers2" element={<Customers2 />} />
        <Route path="/adminbusinesspolicies" element={<AdminBusinessPolicies />} />
        <Route path="/businesspolicies" element={<BusinessPolicies />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointment2" element={<Appointment2 />} />
        <Route path="/customerAppointments" element={<CustomerAppointments />} />
        

      </Routes>
      {/* <Chat /> */}
    </div>
  );
}

export default App