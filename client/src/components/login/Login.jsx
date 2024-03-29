import { useState } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import LoopIcon from "@mui/icons-material/Loop";

const API_URL = "http://localhost:4000/api/auth/login";

function Login(props) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { email, password } = inputs;
  console.log(props.data);
  const onChangeInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const [buttonval, setButtonval] = React.useState(
    <button
      type="submit"
      className="border w-full mt-8 py-2 bg-cyan-500 hover:bg-cyan-400 text-white"
    >
      Sign in
    </button>
  );

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const validEmailCheck = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    let checkErrors = 0;

    try {
      if (!password.trim()) {
        setPasswordError("Password is required");
        checkErrors = 1;
      }
      if (!email.trim()) {
        setEmailError("Email is required");
        checkErrors = 1;
      } else if (!validEmailCheck.test(email)) {
        setEmailError("Email is invalid");
        checkErrors = 1;
      }
      if (checkErrors == 0) {
        setButtonval(
          <button
            type="submit"
            className="border w-full my-5 py-2 bg-cyan-500 text-white"
            disabled
          >
            <LoopIcon className="animate-spin" />
            Processing ...
          </button>
        );
        const res = await axios.post(API_URL, { email, password });
        localStorage.setItem("token", res.data.token);
        if (res.data.status) {
          toast("Login Successful!");
          setTimeout(() => {
            window.location.href = "/home";
          }, 2000);
        } else {
          toast("Email or Password is incorrect!");
          setTimeout(() => {
            window.location.href = "/";
          }, 2000);
        }
      }
    } catch (error) {}
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <form
        onSubmit={onSubmitForm}
        className="flex flex-col lg:flex-row justify-center object-center items-center m-5 p-3 bg-white rounded-lg  shadow-inner "
      >
        <div className="basis-7/12 p-0">
          <img
            className=" rounded-lg object-fill "
            src="/assets/images/loginbg.png"
          />
        </div>
        <div className="basis-5/12 ml-5">
          <h1 className="text-2xl font-bold text-center py-6">Sign In</h1>
          <div className="flex flex-col py-2">
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel>Email</InputLabel>
              <Input
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  onChangeInputs(e);
                  setEmailError("");
                }}
              />
            </FormControl>
            <p className="text-red-500 text-sm">{emailError}</p>
          </div>

          <div className="flex flex-col py-2">
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                name="password"
                value={password}
                onChange={(e) => {
                  onChangeInputs(e);
                  setPasswordError("");
                }}
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <p className="text-red-500 text-sm">{passwordError}</p>
          </div>

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block top-8 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgotpassword">
                <p
                  href="#"
                  className="font-medium text-purple-600 hover:text-purple-500"
                >
                  Forgot your password?
                </p>
              </Link>
            </div>
          </div>
          <div>{buttonval}</div>
        </div>
      </form>
    </>
  );
}

export default Login;
