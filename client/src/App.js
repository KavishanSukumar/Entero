import { Routes, Route } from "react-router-dom";
import Home from "./pages/beforeLogin/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import CustomerChat from "./pages/afterLogin/customer/CustomerChat";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer" element={<CustomerChat />} />
      </Routes>
    </div>
  );
}

export default App;
