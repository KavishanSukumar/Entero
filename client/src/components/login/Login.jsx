import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = "http://localhost:4000/api/auth/login";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChangeInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL, { email, password });
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      if (res.data.status) {
        toast("Login Successful");
        setTimeout(() => {
          window.location.href = "/servicechat";
        }, 2000);
      } else {
        toast("Login Failed");
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (error) {}
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <form
        onSubmit={onSubmitForm}
        className="flex flex-row w-10/12 justify-center object-center items-center mx-auto bg-white rounded-lg  shadow-inner "
      >
        <div className="basis-7/12 p-0">
          <img
            className=" rounded-lg object-fill "
            src="/assets/images/loginbg.png"
          />
        </div>
        <div className="basis-5/12 ml-5  ">
          <h1 className="text-2xl font-bold text-center py-6">Sign In</h1>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input
              type="email"
              className="border p-2"
              placeholder="Enter email"
              name="email"
              value={email}
              onChange={(e) => onChangeInputs(e)}
            />
          </div>

          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border p-2"
              placeholder="Enter Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChangeInputs(e)}
            />
          </div>

          <div className="flex items-center justify-between ">
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
              <p
                href="#"
                className="font-medium text-purple-600 hover:text-purple-500"
              >
                Forgot your password?
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="border w-full mt-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-white"
          >
            Sign in
          </button>

          <div className="text-center">
            <p>Do you have an account?</p>
            <p className="text-indigo-900 right-0 font-bold" href="">
              <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
