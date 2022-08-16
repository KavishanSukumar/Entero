import { Routes, Route } from "react-router-dom";
import Home from "./pages/beforeLogin/Home";
import UserProfile from "./pages/afterLogin/UserProfile";

import Admin from "./pages/afterLogin/admin/Admin";
import AdminUserCustomer from "./pages/afterLogin/admin/AdminUserCustomer";
import AdminUserServices from "./pages/afterLogin/admin/AdminUserServices";
import AdminDashboard from "./pages/afterLogin/admin/AdminDashboard";
import AdminEvents from "./pages/afterLogin/admin/AdminEvents";
import AdminPayment from "./pages/afterLogin/admin/AdminPayment";
import AdminReports from "./pages/afterLogin/admin/AdminReports";
import AdminContact from "./pages/afterLogin/admin/AdminContact";
import AdminTermsCondition from "./pages/afterLogin/admin/AdminTermsCondition";
import AdminBusinessPolicies from "./pages/afterLogin/admin/AdminBusinessPolicies";

import CustomerProfile from "./pages/afterLogin/customer/CustomerProfile";
import CustomerAppointments from "./pages/afterLogin/customer/CustomerAppointments";
import CustomerBookings from "./pages/afterLogin/customer/CustomerBookings";
import CustomerChat from "./pages/afterLogin/customer/CustomerChat";
import CustomerHome from "./pages/afterLogin/customer/CustomerHome";
import CustomerServices from "./pages/afterLogin/customer/CustomerServices";
import CustomerEvents from "./pages/afterLogin/customer/CustomerEvents";
import CustomerServicePortfolio from "./pages/afterLogin/customer/CustomerServicePortfolio";

import ServiceProviderPortfolio from "./pages/afterLogin/serviceProvider/ServiceProviderPortfolio";
import ServiceProviderAppointments from "./pages/afterLogin/serviceProvider/ServiceProviderAppointments";
import ServiceProviderChat from "./pages/afterLogin/serviceProvider/ServiceProviderChat";
import ServiceProviderCharges from "./pages/afterLogin/serviceProvider/ServiceProviderCharges";
import ServiceproviderRatings from "./pages/afterLogin/serviceProvider/ServiceproviderRatings";
import ServiceProviderBookings from "./pages/afterLogin/serviceProvider/ServiceProviderBookings";

import ServiceProviderProfile from "./pages/afterLogin/serviceProvider/ServiceProviderProfile";

import { FiSettings } from "react-icons/fi";

import CustomerServices2 from "./pages/afterLogin/customer/CustomerServices2";

import CustomerEvents2 from "./pages/afterLogin/customer/CustomerEvents2";

import BusinessPolicies from "./pages/beforeLogin/businesspolicies/BusinessPolicies";

import TermsCondition from "./pages/beforeLogin/termscondition/TermsCondition";
import Appointment from "./pages/afterLogin/customer/Appointment";
import Appointment2 from "./pages/afterLogin/customer/Appointment2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Home />} />
        <Route exact path="/services" element={<Home />} />
        <Route exact path="/aboutus" element={<Home />} />
        <Route exact path="/contactus" element={<Home />} />

        {/*Admin pages */}
        <Route path="/admin" element={<Admin />} />
        <Route
          exact
          path="/adminusercustomer"
          element={<AdminUserCustomer />}
        />
        <Route exact path="/adminuserservice" element={<AdminUserServices />} />
        <Route exact path="/admindashboard" element={<AdminDashboard />} />
        <Route exact path="/adminevents" element={<AdminEvents />} />
        <Route exact path="/adminpayment" element={<AdminPayment />} />
        <Route exact path="/adminreports" element={<AdminReports />} />
        <Route exact path="/admincontact" element={<AdminContact />} />
        <Route exact path="/adminterms" element={<AdminTermsCondition />} />
        <Route
          exact
          path="/adminpolicies"
          element={<AdminBusinessPolicies />}
        />

        {/*Customer pages */}
        <Route exact path="/customerprofile" element={<CustomerProfile />} />
        <Route exact path="/customerhome" element={<CustomerHome />} />
        <Route exact path="/customerevents" element={<CustomerEvents />} />
        <Route exact path="/customerevents2" element={<CustomerEvents2 />} />
        <Route exact path="/customerservices" element={<CustomerServices />} />
        <Route
          exact
          path="/customerservices2"
          element={<CustomerServices2 />}
        />
        <Route exact path="/customerbookings" element={<CustomerBookings />} />
        <Route
          exact
          path="/customerappointments"
          element={<CustomerAppointments />}
        />
        <Route exact path="/customerchat" element={<CustomerChat />} />
        <Route
          exact
          path="customerserviceportfolio"
          element={<CustomerServicePortfolio />}
        />

        {/*Service provider pages */}

        <Route
          exact
          path="/serviceportfolio"
          element={<ServiceProviderPortfolio />}
        />
        <Route
          exact
          path="/serviceappointments"
          element={<ServiceProviderAppointments />}
        />
        <Route
          exact
          path="/servicebookings"
          element={<ServiceProviderBookings />}
        />
        <Route exact path="/servicechat" element={<ServiceProviderChat />} />
        <Route
          exact
          path="/serviceratings"
          element={<ServiceproviderRatings />}
        />
        <Route
          exact
          path="/servicecharges"
          element={<ServiceProviderCharges />}
        />
        <Route
          exact
          path="/serviceprofile"
          element={<ServiceProviderProfile />}
        />

        <Route exact path="/userprofile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}
export default App;
