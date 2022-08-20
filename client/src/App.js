import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./pages/afterLogin/UserProfile";
import Home from "./pages/beforeLogin/Home";

import Admin from "./pages/afterLogin/admin/Admin";
import AdminBusinessPolicies from "./pages/afterLogin/admin/AdminBusinessPolicies";
import AdminContact from "./pages/afterLogin/admin/AdminContact";
import AdminDashboard from "./pages/afterLogin/admin/AdminDashboard";
import AdminEvents from "./pages/afterLogin/admin/AdminEvents";
import AdminPayment from "./pages/afterLogin/admin/AdminPayment";
import AdminReports from "./pages/afterLogin/admin/AdminReports";
import AdminTermsCondition from "./pages/afterLogin/admin/AdminTermsCondition";
import AdminUserCustomer from "./pages/afterLogin/admin/AdminUserCustomer";
import AdminUserServices from "./pages/afterLogin/admin/AdminUserServices";

import CustomerAppointments from "./pages/afterLogin/customer/CustomerAppointments";
import CustomerBookings from "./pages/afterLogin/customer/CustomerBookings";
import CustomerChat from "./pages/afterLogin/customer/CustomerChat";
import CustomerEvents from "./pages/afterLogin/customer/CustomerEvents";
import CustomerHome from "./pages/afterLogin/customer/CustomerHome";
import CustomerProfile from "./pages/afterLogin/customer/CustomerProfile";
import CustomerServicePortfolio from "./pages/afterLogin/customer/CustomerServicePortfolio";
import CustomerServices from "./pages/afterLogin/customer/CustomerServices";

import ServiceProviderAppointments from "./pages/afterLogin/serviceProvider/ServiceProviderAppointments";
import ServiceProviderBookings from "./pages/afterLogin/serviceProvider/ServiceProviderBookings";
import ServiceProviderCharges from "./pages/afterLogin/serviceProvider/ServiceProviderCharges";
import ServiceProviderChat from "./pages/afterLogin/serviceProvider/ServiceProviderChat";
import ServiceProviderPortfolio from "./pages/afterLogin/serviceProvider/ServiceProviderPortfolio";
import ServiceProviderProfile from "./pages/afterLogin/serviceProvider/ServiceProviderProfile";
import ServiceproviderRatings from "./pages/afterLogin/serviceProvider/ServiceproviderRatings";

import CustomerEvents2 from "./pages/afterLogin/customer/CustomerEvents2";
import CustomerServices2 from "./pages/afterLogin/customer/CustomerServices2";

const API_URL = "http://localhost:4000/api/auth/isverify";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (Boolean) => {
    setIsAuthenticated(Boolean);
  };

  async function isAuth() {
    try {
      const res = await axios.get(API_URL, {
        headers: { token: localStorage.token },
      });

      res.data === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    isAuth();
  }, []);

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
        <Route
          exact
          path="/adminuserservice"
          element={isAuthenticated ? <AdminUserServices /> : <Home />}
        />
        <Route
          exact
          path="/admindashboard"
          element={isAuthenticated ? <AdminDashboard /> : <Home />}
        />
        <Route
          exact
          path="/adminevents"
          element={isAuthenticated ? <AdminEvents /> : <Home />}
        />
        <Route
          exact
          path="/adminpayment"
          element={isAuthenticated ? <AdminPayment /> : <Home />}
        />
        <Route
          exact
          path="/adminreports"
          element={isAuthenticated ? <AdminReports /> : <Home />}
        />
        <Route
          exact
          path="/admincontact"
          element={isAuthenticated ? <AdminContact /> : <Home />}
        />
        <Route
          exact
          path="/adminterms"
          element={isAuthenticated ? <AdminTermsCondition /> : <Home />}
        />
        <Route
          exact
          path="/adminpolicies"
          element={isAuthenticated ? <AdminBusinessPolicies /> : <Home />}
        />

        {/*Customer pages */}
        <Route
          exact
          path="/customerprofile"
          element={isAuthenticated ? <CustomerProfile /> : <Home />}
        />
        <Route
          exact
          path="/customerhome"
          element={isAuthenticated ? <CustomerHome /> : <Home />}
        />
        <Route
          exact
          path="/customerevents"
          element={isAuthenticated ? <CustomerEvents /> : <Home />}
        />
        <Route
          exact
          path="/customerevents2"
          element={isAuthenticated ? <CustomerEvents2 /> : <Home />}
        />
        <Route
          exact
          path="/customerservices"
          element={isAuthenticated ? <CustomerServices /> : <Home />}
        />
        <Route
          exact
          path="/customerservices2"
          element={isAuthenticated ? <CustomerServices2 /> : <Home />}
        />
        <Route
          exact
          path="/customerbookings"
          element={isAuthenticated ? <CustomerBookings /> : <Home />}
        />
        <Route
          exact
          path="/customerappointments"
          element={isAuthenticated ? <CustomerAppointments /> : <Home />}
        />
        <Route
          exact
          path="/customerchat"
          element={isAuthenticated ? <CustomerChat /> : <Home />}
        />
        <Route
          exact
          path="customerserviceportfolio"
          element={isAuthenticated ? <CustomerServicePortfolio /> : <Home />}
        />

        {/*Service provider pages */}

        <Route
          exact
          path="/serviceportfolio"
          element={isAuthenticated ? <ServiceProviderPortfolio /> : <Home />}
        />
        <Route
          exact
          path="/serviceappointments"
          element={isAuthenticated ? <ServiceProviderAppointments /> : <Home />}
        />
        <Route
          exact
          path="/servicebookings"
          element={isAuthenticated ? <ServiceProviderBookings /> : <Home />}
        />
        <Route
          exact
          path="/servicechat"
          element={isAuthenticated ? <ServiceProviderChat /> : <Home />}
        />
        <Route
          exact
          path="/serviceratings"
          element={isAuthenticated ? <ServiceproviderRatings /> : <Home />}
        />
        <Route
          exact
          path="/servicecharges"
          element={isAuthenticated ? <ServiceProviderCharges /> : <Home />}
        />
        <Route
          exact
          path="/serviceprofile"
          element={isAuthenticated ? <ServiceProviderProfile /> : <Home />}
        />

        <Route
          exact
          path="/userprofile"
          element={isAuthenticated ? <UserProfile /> : <Home />}
        />
      </Routes>
    </div>
  );
}
export default App;
