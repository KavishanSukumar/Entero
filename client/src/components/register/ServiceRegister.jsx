import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function ServiceRegister() {
  return (
    <div className="flex flex-row justify-center font-serif">
      <form className="w-4/12 m-10  bg-white p-4  rounded-lg border-2">
        <h1 className="text-xl font-bold text-center py-2">Sign Up</h1>

        <div className="flex flex-col py-2 ">
          <label>Company Name</label>
          <input
            className="border p-2 "
            placeholder="Enter Company Name"
            type="text"
          />
        </div>

        <div className="flex flex-col py-2 ">
          <label>E-mail</label>
          <input
            className="border p-2 "
            placeholder="Enter E-mail"
            type="text"
          />
        </div>

        <div className="flex flex-col py-2">
          <label>Contact Number</label>
          <input
            className="border p-2 "
            placeholder="Enter Contact Number"
            type="text"
            required
          />
        </div>

        <div className="flex flex-col py-2">
          <label>Address</label>
          <input
            className="border p-2 "
            placeholder="Enter Address"
            type="text"
            required
          />
        </div>

        <div className="flex flex-col py-2">
          <label>Service Category</label>
          <FormGroup className="px-3">
            <FormControlLabel control={<Checkbox />} label="Refreshment" />
            <FormControlLabel control={<Checkbox />} label="Decoration" />
            <FormControlLabel control={<Checkbox />} label="Photography" />
            <FormControlLabel control={<Checkbox />} label="Hall Services" />
          </FormGroup>
        </div>

        <div className="flex flex-col py-2">
          <label>Business Registration Document</label>
          <input
            type="file"
            className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-cyan-500 file:text-white
            hover:file:bg-violet-100"
          />
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
    </div>
  );
}

export default ServiceRegister;
