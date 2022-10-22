import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";
import * as React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoopIcon from "@mui/icons-material/Loop";

const API_URL = "http://localhost:4000/api/customerregistration";
function CustomerRegister() {
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const [emailMessage,setEmailMessage]=useState('')
  const [inputs, setInputs] = React.useState({
    fname: "",
    lname: "",
    email: "",
    contactNum: "",
    address: "",
    password: "",
    conf_password: "",
  });
  const [buttonval, setButtonval] = React.useState(
    <button
      type="submit"
      className="border w-full my-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-white"
    >
      Sign Up
    </button>
  );

  const { fname, lname, email, contactNum, address, password, conf_password } =
    inputs;

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactNumError, setContactNumError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    let checkErrors = 0;
<<<<<<< HEAD
    const validPasswordCheck =
      /(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[-+_!@#$%^&*.,?])/;
=======
    const validPasswordCheck=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])/
>>>>>>> shakir
    const validEmailCheck = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    try {
      if (!fname.trim() && !lname.trim()) {
        setNameError("Name is required");
        checkErrors = 1;
      }
      if (!email.trim()) {
        setEmailError("Email is required");
        checkErrors = 1;
      } else if (!validEmailCheck.test(email)) {
        setEmailError("Email is invalid");
        checkErrors = 1;
      }
      if (!contactNum.trim()) {
        setContactNumError("Contact number is required");
        checkErrors = 1;
      }
      if (!address.trim()) {
        setAddressError("Address is required");
        checkErrors = 1;
      }
      if (!password.trim() || !conf_password.trim()) {
        setPasswordError("Password is required");
        checkErrors = 1;
      } else if (password.length < 8 || password.length > 16) {
        setPasswordError(
          "Password should be more than 8 and less than 20 characters"
        );
        checkErrors = 1;
      } else if (password.trim() !== conf_password.trim()) {
        setPasswordError("Passwords mismatch");
        checkErrors = 1;
      } else if (!validPasswordCheck.test(password)) {
        setPasswordError(
          "Password must contain lower case,upper case letters, a number and a special character"
        );
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
        const res = await axios.post(API_URL, {
          fname,
          lname,
          email,
          contactNum,
          address,
          password,
        });
        

        setEmailMessage(res.data.message)
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="flex flex-col justify-center place-items-center ">
        <form
          onSubmit={onSubmitForm}
          className="max-w-fit w-full mx-auto bg-white p-4  rounded-lg border-2"
        >
          <h1 className="text-xl font-bold text-center py-2">
            Customer Sign Up
          </h1>

          <div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col basis-6/12 mr-1">
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel>First Name</InputLabel>
                  <Input
                    type="text"
                    name="fname"
                    onChange={(e) => {
                      onChange(e);
                      setNameError("");
                    }}
                    value={fname}
                  />
                </FormControl>
              </div>
              <div className="flex flex-col basis-6/12 ml-1">
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel>Last Name</InputLabel>
                  <Input
                    type="text"
                    name="lname"
                    onChange={(e) => {
                      onChange(e);
                      setNameError("");
                    }}
                    value={lname}
                  />
                </FormControl>
              </div>
            </div>
            <p className="text-red-500 text-sm">{nameError}</p>
          </div>
          <div className="flex flex-col py-2 ">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel>Email</InputLabel>
              <Input
                type="text"
                name="email"
                onChange={(e) => {
                  onChange(e);
                  setEmailError("");
                }}
                value={email}
              />
            </FormControl>
            <p className="text-red-500 text-sm">{emailError}</p>
          </div>

          <div className="flex flex-col py-2">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel>Contact Number</InputLabel>
              <Input
                type="text"
                name="contactNum"
                onChange={(e) => {
                  onChange(e);
                  setContactNumError("");
                }}
                value={contactNum}
              />
            </FormControl>
            <p className="text-red-500 text-sm">{contactNumError}</p>
          </div>

          <div className="flex flex-col py-2">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel>Address</InputLabel>
              <Input
                type="text"
                name="address"
                onChange={(e) => {
                  onChange(e);
                  setAddressError("");
                }}
                value={address}
              />
            </FormControl>
            <p className="text-red-500 text-sm">{addressError}</p>
          </div>

          <div className="flex flex-col justify-around">
            <div className="flex flex-row">
              <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={password}
                  name="password"
                  onChange={(e) => {
                    onChange(e);
                    setPasswordError("");
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password-confrim">
                  Confirm Password
                </InputLabel>
                <Input
                  id="standard-adornment-password-confrim"
                  type={values.showPassword ? "text" : "password"}
                  value={conf_password}
                  name="conf_password"
                  onChange={(e) => {
                    onChange(e);
                    setPasswordError("");
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <p className="text-red-500 text-sm">{passwordError}</p>
          </div>

          <div className="flex items-center justify-between ">
            <div className="flex items-center mt-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label
                htmlFor="terms"
                className="ml-2 block top-8 text-sm text-indigo-700 right-0"
              >
                Accept Terms & Conditions
              </label>
            </div>
          </div>
<<<<<<< HEAD
          <div>{buttonval}</div>
=======
          <button
            type="submit"
            className="border w-full my-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-white"
          >
            Sign Up
          </button>
          {emailMessage && <p className="text-green-700">{emailMessage}</p>}
>>>>>>> shakir
        </form>
      </div>
    </>
  );
}

export default CustomerRegister;
