import { Routes, Route } from "react-router-dom";
import Home from "./pages/beforeLogin/Home";

import Products from "./pages/beforeLogin/Products";
import Services from "./pages/beforeLogin/Services";
import ContactUs from "./pages/beforeLogin/ContactUs";
import AboutUs from "./pages/beforeLogin/AboutUs";
import UserProfile from "./pages/afterLogin/UserProfile";
import SignUp from "./pages/beforeLogin/SignUp";
import SignIn from "./pages/beforeLogin/SignIn";

import AdminUserCustomer from "./pages/afterLogin/admin/AdminUserCustomer";
import AdminUserServices from "./pages/afterLogin/admin/AdminUserServices";
import AdminDashboard from './pages/afterLogin/admin/AdminDashboard';

import AdminEvents from "./pages/afterLogin/admin/AdminEvents";
import AdminPayment from "./pages/afterLogin/admin/AdminPayment";
import AdminContact from "./pages/afterLogin/admin/AdminContact";
import CustomerProfile from "./pages/afterLogin/customer/CustomerProfile";

// import AdminBusinessPolicies from "./pages/afterLogin/admin/AdminBusinessPolicies";
// import BusinessPolicies from "./pages/beforeLogin/businesspolicies/BusinessPolicies";
// import Appointment from "./pages/afterLogin/customer/Appointment";
// import Appointment2 from "./pages/afterLogin/customer/Appointment2";
import CustomerAppointments from "./pages/afterLogin/customer/CustomerAppointments";
import CustomerBookings from "./pages/afterLogin/customer/CustomerAppointments";
import CustomerChat from "./pages/afterLogin/customer/CustomerChat";
import ServiceProviderPortfolio from "./pages/afterLogin/serviceProvider/ServiceProviderPortfolio";
import ServiceProviderAppointments from "./pages/afterLogin/serviceProvider/ServiceProviderAppointments"
import ServiceProviderChat from "./pages/afterLogin/serviceProvider/ServiceProviderChat";
import ServiceProviderCharges from "./pages/afterLogin/serviceProvider/ServiceProviderCharges"
import ServiceproviderRatings from "./pages/afterLogin/serviceProvider/ServiceproviderRatings";
import ServiceProviderBookings from "./pages/afterLogin/serviceProvider/ServiceProviderBookings"
import { FiSettings } from "react-icons/fi";

import Admin from './pages/afterLogin/admin/Admin';
import CustomerServices from './pages/afterLogin/customer/CustomerServices';
import CustomerEvents from './pages/afterLogin/customer/CustomerEvents';
import AdminBusinessPolicies from './pages/afterLogin/admin/AdminBusinessPolicies';
import BusinessPolicies from './pages/beforeLogin/businesspolicies/BusinessPolicies';
import AdminTermsCondition from './pages/afterLogin/admin/AdminTermsCondition';
import TermsCondition from './pages/beforeLogin/termscondition/TermsCondition';
import Appointment from './pages/afterLogin/customer/Appointment';
import Appointment2 from './pages/afterLogin/customer/Appointment2';


import './App.css';



function App() {
  return (
    <div className="App">

      <Routes>      

        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/aboutus" element={<AboutUs/>} />
        <Route exact path="/contactus" element={<ContactUs/>} />
        {/*Admin pages */}
        <Route path="/admin" element={<Admin />} />

        <Route exact path="/adminusercustomer" element={<AdminUserCustomer />} />
        <Route exact path="/adminuserservice" element={<AdminUserServices />} />
        <Route exact path="/admindashboard" element={<AdminDashboard />} />
        <Route exact path="/adminevents" element={<AdminEvents />} />
        <Route exact path="/adminpayment" element={<AdminPayment />} />
        <Route exact path="/admincontact" element={<AdminContact />} />

        {/*Customer pages */}
        <Route exact path="/customerprofile" element={<CustomerProfile />} />
        <Route exact path="/customerevents" element={<CustomerEvents />} />
        <Route exact path="/customerservices" element={<CustomerServices />} />
        <Route exact path="/customerbookings" element={<CustomerBookings />} />
        <Route exact path="/customerappointments" element={<CustomerAppointments />} />
        <Route exact path="/customerchat" element={<CustomerChat />} />

        {/*Service provider pages */}

        <Route exact path="/serviceportfolio" element={<ServiceProviderPortfolio />} />
        <Route exact path="/serviceappointments" element={<ServiceProviderAppointments />} />
        <Route exact path="/servicebookings" element={<ServiceProviderBookings />} />
        <Route exact path="/servicechat" element={<ServiceProviderChat />} />
        <Route exact path="/serviceratings" element={<ServiceproviderRatings />} />
        <Route exact path="/servicecharges" element={<ServiceProviderCharges />} />

        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
        {/* <Route exact path="/adminbusinesspolicies" element={<AdminBusinessPolicies />} />
        <Route exact path="/businesspolicies" element={<BusinessPolicies />} />
        <Route exact path="/appointment" element={<Appointment />} />
        <Route exact path="/appointment2" element={<Appointment2 />} /> */}

        {/* <Route path="/customerServices" element={<CustomerServices />} />
        <Route path="/customerEvents" element={<CustomerEvents />} />
        <Route path="/adminbusinesspolicies" element={<AdminBusinessPolicies />} />
        <Route path="/businesspolicies" element={<BusinessPolicies />} />
        <Route path="/adminTermsCondition" element={<AdminTermsCondition />} />
        <Route path="/termsCondition" element={<TermsCondition />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/appointment2" element={<Appointment2 />} />
        <Route path="/customerAppointments" element={<CustomerAppointments />} /> */}

      </Routes>
                   
        </div>
  )
      

}
export default App;
