import Login from "./components/login/Login";
import Register from "./components/register/Register";
import LandingPage from "./pages/landingPage/LandingPage";
import Chat from "./components/chat/Chat";
import { Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Events from "./pages/Events";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import AdminPage from "./pages/AdminPage";
import AdminEvents from "./pages/AdminEvents";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";


function App() {
  return (
    <div className="App">      
      {/* <Routes>                   
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/events" element={<Events/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/aboutus" element={<AboutUs/>} />
        <Route exact path="/contactus" element={<ContactUs/>} />
        <Route exact path="/adminpage" element={<AdminPage />} />
        <Route exact path="/adminevents" element={<AdminEvents />} />
      </Routes> */}
      <Register/>

    </div>
  );
}

export default App;
