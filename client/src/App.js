import { Routes, Route } from "react-router-dom";
import Home from "./pages/beforeLogin/Home";
import CustomerRegister from "./components/register/CustomerRegister";
import ServiceRegister from "./components/register/ServiceRegister";
import ServiceRegisterUser from "./components/register/ServiceRegisterUser";
import Login from "./components/login/Login";
import CustomerChat from "./pages/afterLogin/customer/CustomerChat";
import ChooseUser from "./components/register/ChooseUser";
function App() {
  return (
    <div className="App">
      < Home/>
    </div>
  );
}

export default App;
