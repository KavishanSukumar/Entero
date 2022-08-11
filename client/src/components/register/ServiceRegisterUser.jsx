import React from "react";

function ServiceRegisterUser() {
  return (
    <div className="flex flex-col justify-center h-100 place-items-center font-serif mt-40 ">
      <form className="max-w-fit w-full mx-auto bg-white p-4  rounded-lg border-2">
        <h1 className="text-xl font-bold text-center py-2">Sign Up</h1>

        <div className="flex flex-col py-2">
          <label>Username</label>
          <input
            className="border p-2 "
            placeholder="Enter Username"
            type="text"
            required
          />
        </div>

        <div className="flex flex-row justify-around">
          <div className="flex flex-col basis-5/12 mr-1">
            <label>Password</label>
            <input
              className="border  p-2"
              placeholder="Enter password"
              type="password"
              required
            />
          </div>
          <div className="flex flex-col basis-5/12 ml-1">
            <label className="">Confirm Password</label>
            <input
              className="border p-2"
              placeholder="Re-Enter Password"
              type="password"
              required
            />
          </div>
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
        <button className="border w-full my-5 py-2 bg-black hover:bg-yellow-900 hover:text-black text-white">
          Sign Up
        </button>
      </form>
      <footer>
        <br />
        <br />
      </footer>
    </div>
  );
}

export default ServiceRegisterUser;
