import { Routes,Route} from 'react-router-dom';
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
import CustomerEvents from "./pages/afterLogin/customer/CustomerEvents";
import CustomerServices from "./pages/afterLogin/customer/CustomerServices";
import CustomerBookings from "./pages/afterLogin/customer/CustomerBookings";
import CustomerAppointments from "./pages/afterLogin/customer/CustomerAppointments";
import CustomerChat from "./pages/afterLogin/customer/CustomerChat";
import ServiceProviderPortfolio from "./pages/afterLogin/serviceProvider/ServiceProviderPortfolio";
import ServiceProviderBookings from "./pages/afterLogin/serviceProvider/ServiceProviderBookings";
import ServiceProviderAppointments from "./pages/afterLogin/serviceProvider/ServiceProviderAppointments";
import ServiceProviderChat from "./pages/afterLogin/serviceProvider/ServiceProviderChat";
import ServiceproviderRatings from "./pages/afterLogin/serviceProvider/ServiceproviderRatings";
import ServiceProviderCharges from "./pages/afterLogin/serviceProvider/ServiceProviderCharges";


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
      </Routes>  
      {/* <Chat /> */}

    </div>
  );
}

export default App;
