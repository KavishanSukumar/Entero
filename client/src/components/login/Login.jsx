import React from "react";
import {Link} from 'react-router-dom';

function Login() {
  return (
    <>
      {/* <div className=" flex flex-col justify-center font-serif mb-8"> */}
        {/* <div className="-z-10 max-h-screen ">
          <video autoPlay loop muted class="absolute ">
            <source src="/assets/videos/lbg.mp4" type="video/mp4" />
          </video>
        </div> */}

        {/* <div
          style={{ backgroundImage: "url(/assets/images/login1.jpg)" }}
          className="bg-opacity-60 flex flex-col justify-center h-screen font-serif bg-cover"
        /> */}
        <form className="flex flex-row w-10/12 justify-center object-center items-center mx-auto bg-white rounded-lg  shadow-inner ">
          <div className="basis-7/12 p-0">
            <img
              className=" rounded-lg object-fill "
              src="/assets/images/loginbg.png"
            />
          </div>
          <div className="basis-5/12 ml-5  ">
            <h1 className="text-2xl font-bold text-center py-6">Sign In</h1>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input
                className="border p-2"
                placeholder="Enter Username"
                type="text"
              />
            </div>

            <div className="flex flex-col py-2">
              <label>Password</label>
              <input
                className="border p-2"
                placeholder="Enter Password"
                type="password"
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
                <a
                  href="#"
                  className="font-medium text-purple-600 hover:text-purple-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <button className="border w-full my-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-white">

            <Link to="/customerhome">Sign in</Link>

            </button>
            <div className="text-center">
              <p>Do you have an account?</p>
              <a className="text-indigo-900 right-0 font-bold" href="">
              <Link to="/signup">Sign Up</Link>
              </a>
            </div>
          </div>
        </form>
      {/* </div> */}
      
    </>
  );
}

export default Login;
