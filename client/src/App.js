<<<<<<< HEAD
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import LandingPage from "./pages/landingPage/LandingPage";
=======

import Chat from "./components/chat/Chat";
import { Routes,Route} from 'react-router-dom';
import Home from "./pages/beforeLogin/Home";
import Events from "./pages/beforeLogin/Events";
import Services from "./pages/beforeLogin/Services";
import ContactUs from "./pages/beforeLogin/ContactUs";
import AboutUs from "./pages/beforeLogin/AboutUs";
import AdminPage from "./pages/afterLogin/admin/AdminPage";
import AdminEvents from "./pages/afterLogin/admin/AdminEvents";
import UserProfile from "./pages/afterLogin/UserProfile";


>>>>>>> 627612f6291ca987ea361e61213d6af607950ddc

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Register/>
=======
      
      <Routes>
                   
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/events" element={<Events/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/aboutus" element={<AboutUs/>} />
        <Route exact path="/contactus" element={<ContactUs/>} />
        <Route exact path="/adminpage" element={<AdminPage />} />
        <Route exact path="/adminevents" element={<AdminEvents />} />
        <Route exact path="/userprofile" element={<UserProfile />} />
      </Routes>
      {/* <Chat /> */}
>>>>>>> 627612f6291ca987ea361e61213d6af607950ddc
    </div>
  );
}

export default App;
