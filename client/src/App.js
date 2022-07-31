import { Routes, Route } from "react-router-dom";
import Home from "./pages/beforeLogin/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import CustomerChat from "./pages/afterLogin/customer/CustomerChat";
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
