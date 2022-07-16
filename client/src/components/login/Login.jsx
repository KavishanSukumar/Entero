import React from "react";

function Login() {
  return (
    <>
      <div className=" flex flex-col justify-center font-serif">
        {/* <div className="-z-10 max-h-screen ">
          <video autoPlay loop muted class="absolute ">
            <source src="/assets/videos/lbg.mp4" type="video/mp4" />
          </video>
        </div> */}

        {/* <div
          style={{ backgroundImage: "url(/assets/images/login1.jpg)" }}
          className="bg-opacity-60 flex flex-col justify-center h-screen font-serif bg-cover"
        /> */}
        <form className="flex flex-row w-7/12 justify-center object-center mt-48 items-center mx-auto bg-white rounded-lg  shadow-inner ">
          <div className="basis-7/12 p-0">
            <img
              className="rounded-lg object-fill "
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

            <button className="border w-full my-5 py-2 bg-black hover:bg-gray-500 hover:text-black text-white">
              Sign In
            </button>
            <div className="text-center">
              <p>Do you have an account?</p>
              <a className="text-indigo-900 right-0 font-bold" href="">
                Sign Up
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
