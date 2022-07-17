
import Chat from "./components/chat/Chat";
import { Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="App">
      
      
      <Routes>
                   
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/aboutus" element={<AboutUs/>} />
        <Route exact path="/contactus" element={<ContactUs/>} />
        <Route exact path="/userpage" element={<UserPage />} />
      </Routes>
      {/* <Chat /> */}
    </div>
  );
}

export default App;
