
import Chat from "./components/chat/Chat";
import { Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import AdminPage from "./pages/AdminPage";
import AdminEvents from "./pages/AdminEvents";


function App() {
  return (
    <div className="App">
      
      <Routes>
                   
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/aboutus" element={<AboutUs/>} />
        <Route exact path="/contactus" element={<ContactUs/>} />
        <Route exact path="/adminpage" element={<AdminPage />} />
        <Route exact path="/adminevents" element={<AdminEvents />} />
      </Routes>
      {/* <Chat /> */}
    </div>
  );
}

export default App;
