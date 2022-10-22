import { useState,useEffect } from "react";
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
import {useParams} from "react-router-dom";


const API_URL = "http://localhost:4000/api/customer";

function ResetPasswordForm() {
  const urlParameters=useParams()
  const [emailMessage,setEmailMessage]=useState('')
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  async function messageStatus(){
    try {
    
      const res = await axios.get(`http://localhost:4000/api/setpassword/${urlParameters.userid}/${urlParameters.token}`);
      setEmailMessage(res.data.message)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    messageStatus();
  }, []);
  
  const [inputs, setInputs] = React.useState({
    password: "",
    conf_password: "",
  });

  const { password, conf_password } =
    inputs;

 
  const [passwordError, setPasswordError] = useState("");

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    let checkErrors = 0;
    const validPasswordCheck=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])/
    
    try {
      
      
      if (!password.trim() || !conf_password.trim()) {
        setPasswordError("Password is required");
        checkErrors = 1;
      } else if (password.length < 8 || password.length > 16) {
        setPasswordError("Password should be more than 8 and less than 20 characters");
        checkErrors = 1;
      } else if (password.trim() !== conf_password.trim()) {
        setPasswordError("Passwords mismatch");
        checkErrors = 1;
      }else if (!validPasswordCheck.test(password)){
        setPasswordError("Password must contain lower case,upper case letters, a number and a special character");
        checkErrors = 1;
      }

      if (checkErrors == 0) {
        const res = await axios.put(`http://localhost:4000/api/setpassword/${urlParameters.userid}/${urlParameters.token}`, {
          password
        });
        setEmailMessage(res.data.message)
        setTimeout(() => {
          window.location.href = "/home";
        }, 2000);
        
        
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
      {emailMessage==="ok"? 
      <div className="flex flex-col justify-center place-items-center ">
        <form
          onSubmit={onSubmitForm}
          className="max-w-fit w-full mx-auto bg-white p-4  rounded-lg border-2"
        >
          <h1 className="text-xl font-bold text-center py-2">
            New Password
          </h1>

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

          
          <button
            type="submit"
            className="border w-full my-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-white"
          >
            Confirm
          </button>
          {emailMessage && <p>{emailMessage}</p>}
        </form>
      </div>: emailMessage && <p>{emailMessage}</p>}
    </>
  );
}

export default ResetPasswordForm;