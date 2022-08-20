import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import * as React from "react";

function ServiceRegister() {
  return (
    <div className="flex flex-row justify-center ">
      <form className=" m-3  bg-white p-4  rounded-lg border-2 w-128 ">
        <h1 className="text-xl font-bold text-center py-2">
          Service Provider Sign Up
        </h1>

        <div className="flex flex-col  ">
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>Company Name</InputLabel>
            <Input />
          </FormControl>
        </div>

        <div className="flex flex-col  ">
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>Email</InputLabel>
            <Input />
          </FormControl>
        </div>

        <div className="flex flex-col ">
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>Contact Number</InputLabel>
            <Input />
          </FormControl>
        </div>

        <div className="flex flex-col ">
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>Address</InputLabel>
            <Input />
          </FormControl>
        </div>

        <div className="flex flex-col py-5 px-2">
          <label>Service Category</label>
          <FormGroup className="px-3">
            <FormControlLabel control={<Checkbox />} label="Refreshment" />
            <FormControlLabel control={<Checkbox />} label="Decoration" />
            <FormControlLabel control={<Checkbox />} label="Photography" />
            <FormControlLabel control={<Checkbox />} label="Hall Services" />
          </FormGroup>
        </div>

        <div className="flex flex-col py-2 px-2">
          <label className="mb-3">Business Registration Document</label>
          <input
            type="file"
            className="block w-full text-sm text-slate-500
            file:mr-4 file:py-1 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-cyan-500 file:text-white
            hover:file:bg-cyan-400"
          />
        </div>

        <div className="flex items-center justify-between py-3 px-2">
          <div className="flex items-center mt-5">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label
              htmlFor="terms"
              className="ml-2 block top-8 text-sm text-indigo-700 right-0 cursor-pointer"
            >
              Accept Terms & Conditions
            </label>
          </div>
        </div>
        <button className="border w-full my-5 py-1 bg-cyan-500 hover:bg-cyan-400 text-white">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default ServiceRegister;