import React,{ useState } from "react";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";

const API_URL = "http://localhost:4000/api/setpassword";
function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState ("wow");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    let checkErrors = 0;

    const validEmailCheck = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    try {
      if (!email.trim()) {
        setEmailError("Email is required");
        checkErrors = 1;
      } else if (!validEmailCheck.test(email)) {
        setEmailError("Email is invalid");
        checkErrors = 1;
      }

      if (checkErrors === 0) {
        setMessage('hello');
        const res = await axios.post(API_URL, {
          email,
        });

        setMessage('hellos');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
      <div className="flex flex-col justify-center place-items-center ">
        <form
          onSubmit={onSubmitForm}
          className="w-[80%] md:w-[50%] lg:w-[30%] mx-auto bg-white p-4  rounded-lg border-2"
        >
          <h1 className="text-xl font-bold text-center py-2">
            Forgot Password?
          </h1>

          <div className="flex flex-col py-2 ">
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel>Enter your email</InputLabel>
              <Input
                type="text"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                value={email}
              />
            </FormControl>
            <p className="text-red-500 text-sm">{emailError}</p>
          </div>
          <button
            type="submit"
            className="border w-full my-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-white"
          >
            Send Email
          </button>
          <p>{message}</p>
        </form>
      </div>
    
  );
}

export default ForgotPasswordForm;
