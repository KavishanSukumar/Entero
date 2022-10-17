import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import * as React from "react";
import axios from "axios";

const API_URL = "http://localhost:4000/api/service";

function ServiceRegister() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    contactNum: "",
    address: "",
    brNo: "",
  });
  const [emailMessage,setEmailMessage]=useState('')
  const [services, setServices] = useState([]);
  const [events, setEvents] = useState([]);
  const [file, setFile] = useState();

  const { name, email, contactNum, address, brNo } = inputs;

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactNumError, setContactNumError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [brNoError, setbrNoError] = useState("");
  const [fileError, setFileError] = useState("");
  const [servicesError, setServicesError] = useState("");
  const [eventsError, setEventsError] = useState("");

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const fileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const serviceList=(e)=>{
    if(services.includes(e.target.value)){
      setServices(services.filter((g) => g !== e.target.value))
    }else if(!services.includes(e.target.value)){
      setServices([...services,e.target.value])
    }
  }

  const eventList=(e)=>{
    if(events.indexOf(e.target.value)===1){
      setEvents(events.filter((g) => g !== e.target.value))
    }else if(events.indexOf(e.target.value)===-1){
      setEvents([...events,e.target.value])
    }
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    let checkErrors = 0;
    
    const validEmailCheck = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    try {
      if (!name.trim()) {
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
      if (!brNo.trim()) {
        setbrNoError("Business Registration number is required");
        checkErrors = 1;
      }
      if (services.length===0) {
        
        setServicesError("Choose service");
        checkErrors = 1;
      }
      if (events.length===0) {
        setEventsError("Choose Event");
        checkErrors = 1;
      }
      if (!file) {
        setFileError("Upload the BR document");
        checkErrors = 1;
      } else if (file.type != "application/pdf") {
        setFileError("Only pdf files are allowed");
        checkErrors = 1;
      }

      if (checkErrors == 0) {
        const formDetail = new FormData();

        formDetail.append("file", file);
        formDetail.append("name", name);
        formDetail.append("email", email);
        formDetail.append("contactNum", contactNum);
        formDetail.append("address", address);
        formDetail.append("brNo", brNo);
        formDetail.append("services", services);
        formDetail.append("events", events);

        const res = await axios.post(API_URL, formDetail, {
          headers: {
            "Content-Type": "multipart/form-data",
            uploadType:"1",
            
            
          },
        });

        setEmailMessage(res.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-row justify-center ">
      <form
        className=" m-3  bg-white p-4  rounded-lg border-2 w-128 "
        onSubmit={handleRegister}
        encType="multipart/form-data"
      >
        <h1 className="text-xl font-bold text-center py-2 text-slate-500">
          Service Provider Sign Up
        </h1>

        <div className="flex flex-col  ">
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>Company Name</InputLabel>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                onChange(e);
                setNameError("");
              }}
            />
          </FormControl>
          <p className="text-red-500 text-sm">{nameError}</p>
        </div>

        <div className="flex flex-col  ">
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>Email</InputLabel>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                onChange(e);
                setEmailError("");
              }}
            />
          </FormControl>
          <p className="text-red-500 text-sm">{emailError}</p>
        </div>

        <div className="flex flex-col ">
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>Contact Number</InputLabel>
            <Input
              type="text"
              name="contactNum"
              value={contactNum}
              onChange={(e) => {
                onChange(e);
                setContactNumError("");
              }}
            />
          </FormControl>
          <p className="text-red-500 text-sm">{contactNumError}</p>
        </div>

        <div className="flex flex-col  ">
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>Address</InputLabel>
            <Input
              type="text"
              name="address"
              value={address}
              onChange={(e) => {
                onChange(e);
                setAddressError("");
              }}
            />
          </FormControl>
          <p className="text-red-500 text-sm">{addressError}</p>
        </div>

        <div className="flex flex-col text-slate-500">
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel>Business Registration Number</InputLabel>
            <Input
              type="text"
              name="brNo"
              value={brNo}
              onChange={(e) => {
                onChange(e);
                setbrNoError("");
              }}
            />
          </FormControl>
          <p className="text-red-500 text-sm">{brNoError}</p>
        </div>
        <div className="flex flex-col py-4 px-2 text-slate-500">
          <label className="mb-3">Business Registration Document</label>
          <input
            type="file"
            name="file"
            onChange={fileChange}
            className="block w-full text-sm text-slate-500
            file:mr-4 file:py-1 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-cyan-500 file:text-white
            hover:file:bg-cyan-400"
          />
          <p className="text-red-500 text-sm">{fileError}</p>
        </div>

        <div className="flex flex-col py-5 px-2 text-slate-500">
          <label>Service Category</label>
          <FormGroup className="px-3">
            <FormControlLabel
              control={
                <Checkbox
                  value="refreshment"
                  onClick={(e) => {
                    serviceList(e);
                    setServicesError("");
                  }}
                />
              }
              label="Refreshment"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="decoration"
                  onClick={(e) => {
                    serviceList(e);
                    setServicesError("");
                  }}
                />
              }
              label="Decoration"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="photography"
                  onClick={(e) => {
                    serviceList(e);
                    setServicesError("");
                  }}
                />
              }
              label="Photography"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="hall"
                  onClick={(e) => {
                    serviceList(e);
                    setServicesError("");
                  }}
                />
              }
              label="Hall Services"
            />
          </FormGroup>
          <p className="text-red-500 text-sm">{servicesError}</p>
        </div>

        <div className="flex flex-col py-5 px-2 text-slate-500">
          <label>Events</label>
          <FormGroup className="px-3">
            <FormControlLabel
              control={
                <Checkbox
                  value="birthday"
                  onClick={(e) => {
                    eventList(e);
                    setEventsError("");
                  }}
                />
              }
              label="Birthday"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="reception"
                  onClick={(e) => {
                    eventList(e);
                    setEventsError("");
                  }}
                />
              }
              label="Reception"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="wedding"
                  onClick={(e) => {
                    eventList(e);
                    setEventsError("");
                  }}
                />
              }
              label="Wedding"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="engagement"
                  onClick={(e) => {
                    eventList(e);
                    setEventsError("");
                  }}
                />
              }
              label="Engagement"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="other"
                  onClick={(e) => {
                    eventList(e);
                    setEventsError("");
                  }}
                />
              }
              label="Other Occasion"
            />
          </FormGroup>
          <p className="text-red-500 text-sm">{eventsError}</p>
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
        {emailMessage && <p className="text-green-700">{emailMessage}</p>}
      </form>
    </div>
  );
}

export default ServiceRegister;