import { Routes, Route } from "react-router-dom";
import Home from "./pages/beforeLogin/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import CustomerChat from "./pages/afterLogin/customer/CustomerChat";
import PortFolio from "./components/portfolio/PortFolio";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PortFolio />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer" element={<CustomerChat />} />
      </Routes>
    </div>
  );
}

export default App;
