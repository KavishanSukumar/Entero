import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./pages/afterLogin/UserProfile";
import Home from "./pages/beforeLogin/Home";
import ForgotPassword from "./pages/beforeLogin/ForgotPassword";
import ResetPassword from "./pages/beforeLogin/ResetPassword";
import EmailVerify from "./pages/beforeLogin/EmailVerify";
import ServiceProviderPassword from "./pages/beforeLogin/ServiceProviderPassword";

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
import CustomerAppointment2 from "./pages/afterLogin/customer/CustomerAppointment2";

import ServiceProviderAppointments from "./pages/afterLogin/serviceProvider/ServiceProviderAppointments";
import ServiceProviderBookings from "./pages/afterLogin/serviceProvider/ServiceProviderBookings";
import ServiceProviderCharges from "./pages/afterLogin/serviceProvider/ServiceProviderCharges";
import ServiceProviderChat from "./pages/afterLogin/serviceProvider/ServiceProviderChat";
import ServiceProviderPortfolio from "./pages/afterLogin/serviceProvider/ServiceProviderPortfolio";
import ServiceProviderProfile from "./pages/afterLogin/serviceProvider/ServiceProviderProfile";

import ChoosePackage from "./components/payment/ChoosePackage";

import ServiceproviderRatings from "./pages/afterLogin/serviceProvider/ServiceproviderRatings";

import CustomerEvents2 from "./pages/afterLogin/customer/CustomerEvents2";
import CustomerServices2 from "./pages/afterLogin/customer/CustomerServices2";

const API_URL = "http://localhost:4000/api/auth/isverify";
const API_URL_USER = "http://localhost:4000/api/user/";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userrole, setUserrole] = useState({});
  const [id, setId] = useState(null);

  const setAuth = (Boolean) => {
    setIsAuthenticated(Boolean);
  };

  async function isAuth() {
    try {
      const res = await axios.get(API_URL, {
        headers: { token: localStorage.token },
      });
      setId(res.data.payload);
      getUserrole(res.data.payload);

      res.data.status === true
        ? setIsAuthenticated(true)
        : setIsAuthenticated(false);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getUserrole(userid) {
    const res1 = await axios.post(API_URL_USER, {
      userid,
    });
    setUserrole(res1.data.userrole);
  }

  useEffect(() => {
    isAuth();
  }, []);
console.log('this is user id'+id);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home data={userrole} />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/setpassword/:userid/:token" element={<ResetPassword />} />
        <Route exact path="/emailverify/:userid/:token" element={<EmailVerify />} />
        <Route exact path="/setpasswordsp/:userid/:token" element={<ServiceProviderPassword />} />
        {/* Login routes */}
        <Route
          path="/home"
          element={
            userrole === "am" ? (
              <AdminDashboard />
            ) : userrole === "cs" ? (
              <CustomerEvents2 />
            ) : userrole === "sp" ? (
              <ServiceProviderPortfolio userid={id}/> 
            ) : (
              <Home />
            )
          }
        />

        {/*Admin pages */}
        <Route path="/admin" element={<Admin />} />
        <Route
          exact
          path="/adminusercustomer"
          element={
            isAuthenticated && userrole === "am" ? (
              <AdminUserCustomer />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/adminuserservice"
          element={
            isAuthenticated && userrole === "am" ? (
              <AdminUserServices />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/admindashboard"
          element={
            isAuthenticated && userrole === "am" ? <AdminDashboard /> : <Home />
          }
        />
        <Route
          exact
          path="/adminevents"
          element={
            isAuthenticated && userrole === "am" ? <AdminEvents /> : <Home />
          }
        />
        <Route
          exact
          path="/adminpayment"
          element={
            isAuthenticated && userrole === "am" ? <AdminPayment /> : <Home />
          }
        />
        <Route
          exact
          path="/adminreports"
          element={
            isAuthenticated && userrole === "am" ? <AdminReports /> : <Home />
          }
        />
        <Route
          exact
          path="/admincontact"
          element={
            isAuthenticated && userrole === "am" ? <AdminContact /> : <Home />
          }
        />
        <Route
          exact
          path="/adminterms"
          element={
            isAuthenticated && userrole === "am" ? (
              <AdminTermsCondition />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/adminpolicies"
          element={
            isAuthenticated && userrole === "am" ? (
              <AdminBusinessPolicies />
            ) : (
              <Home />
            )
          }
        />

        {/*Customer pages */}
        <Route
          exact
          path="/customerprofile"
          element={
            isAuthenticated && userrole === "cs" ? (
              <CustomerProfile userid={id} />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/customerhome"
          element={
            isAuthenticated && userrole === "cs" ? <CustomerHome /> : <Home />
          }
        />
        <Route
          exact
          path="/customerevents1"
          element={
            isAuthenticated && userrole === "cs" ? <CustomerEvents /> : <Home />
          }
        />
        <Route
          exact
          path="/customerevents"
          element={
            isAuthenticated && userrole === "cs" ? (
              <CustomerEvents2 />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/customerservices"
          element={
            isAuthenticated && userrole === "cs" ? (
              <CustomerServices />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/customerservices2"
          element={
            isAuthenticated && userrole === "cs" ? (
              <CustomerServices2 />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/customerbookings"
          element={
            isAuthenticated && userrole === "cs" ? (
              <CustomerBookings userid={id} />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/customerappointments"
          element={
            isAuthenticated && userrole === "cs" ? (
              <CustomerAppointments />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/customerappointment2"
          element={
            isAuthenticated && userrole === "cs" ? (
              <CustomerAppointment2 />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/customerchat"
          element={
            isAuthenticated && userrole === "cs" ? (
              <CustomerChat data={id} />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="customerserviceportfolio"
          element={
            isAuthenticated && userrole === "cs" ? (
              <CustomerServicePortfolio />
            ) : (
              <Home />
            )
          }
        />

        {/*Service provider pages */}

        <Route
          exact
          path="/serviceportfolio"
          element={
            isAuthenticated && userrole === "sp" ? (
              <ServiceProviderPortfolio userid={id}/>
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/serviceappointments"
          element={
            isAuthenticated && userrole === "sp" ? (
              <ServiceProviderAppointments data={id} />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/servicebookings"
          element={
            isAuthenticated && userrole === "sp" ? (
              <ServiceProviderBookings />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/servicechat"
          element={
            isAuthenticated && userrole === "sp" ? (
              <ServiceProviderChat data={id} />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/serviceratings"
          element={
            isAuthenticated && userrole === "sp" ? (
              <ServiceproviderRatings />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/servicecharges"
          element={
            isAuthenticated && userrole === "sp" ? (
              <ServiceProviderCharges />
            ) : (
              <Home />
            )
          }
        />
        <Route
          exact
          path="/serviceprofile"
          element={
            isAuthenticated && userrole === "sp" ? (
              <ServiceProviderProfile userid={id} />
            ) : (
              <Home />
            )
          }
        />

        <Route
          exact
          path="/userprofile"
          element={
            isAuthenticated && userrole === "am" ? <UserProfile userid={id} /> : <Home />
          }
        />
      </Routes>
    </div>
  );
}
export default App;
