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

const API_URL = "http://localhost:4000/api/customer";
function CustomerRegister() {
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const [inputs, setInputs] = React.useState({
    fname: "",
    lname: "",
    email: "",
    contactNum: "",
    address: "",
    uname: "",
    password: "",
  });

  const { fname, lname, email, contactNum, address, uname, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL, {
        fname,
        lname,
        email,
        contactNum,
        address,
        uname,
        password,
      });
      if (res.data.status) {
        localStorage.setItem("token", res.data.token);
        toast("Signup Successful !");
        setTimeout(() => {
          window.location.href = "/home";
        }, 2000);
      } else {
        toast("Signup UnSuccessful !");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
      console.log(res.data);
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
                    required
                    type="text"
                    name="fname"
                    onChange={(e) => onChange(e)}
                    value={fname}
                  />
                </FormControl>
              </div>
              <div className="flex flex-col basis-6/12 ml-1">
                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                  <InputLabel>Last Name</InputLabel>
                  <Input
                    required
                    type="text"
                    name="lname"
                    onChange={(e) => onChange(e)}
                    value={lname}
                  />
                </FormControl>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-2 ">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel>Email</InputLabel>
              <Input
                required
                type="email"
                name="email"
                onChange={(e) => onChange(e)}
                value={email}
              />
            </FormControl>
          </div>

          <div className="flex flex-col py-2">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel>Contact Number</InputLabel>
              <Input
                required
                type="text"
                name="contactNum"
                onChange={(e) => onChange(e)}
                value={contactNum}
              />
            </FormControl>
          </div>

          <div className="flex flex-col py-2">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel>Address</InputLabel>
              <Input
                required
                type="text"
                name="address"
                onChange={(e) => onChange(e)}
                value={address}
              />
            </FormControl>
          </div>

          <div className="flex flex-col py-2">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel>Username</InputLabel>
              <Input
                required
                type="text"
                name="uname"
                onChange={(e) => onChange(e)}
                value={uname}
              />
            </FormControl>
          </div>

          <div className="flex flex-col justify-around">
            <div className="flex flex-row">
              <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <Input
                  required
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={password}
                  name="password"
                  onChange={(e) => onChange(e)}
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
                  required
                  id="standard-adornment-password-confrim"
                  type={values.showPassword ? "text" : "password"}
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
          </div>

          <div className="flex items-center justify-between ">
            <div className="flex items-center mt-5">
              <input
                required
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
          <button
            type="submit"
            className="border w-full my-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-white"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default CustomerRegister;
