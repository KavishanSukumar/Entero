import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Shakir from "../../Shakir.jpg";
import SearchIcon from "@mui/icons-material/Search";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// import PageHeader from "../../../components/PagesHeader/PageHeader";
import Button from "../button/Button";
// import avatar from "../../documents/avatar.jpg";
// import avatar2 from "../../documents/avatar2.png";
import avatar3 from "../../documents/avatar3.png";
import avatar4 from "../../documents/avatar4.jpg";
import avatar5 from "../../documents/avatar5.jpg";

import Rate from "../rate/Rate";

import cate1 from "../../documents/cate1.jpg";
import cate2 from "../../documents/cate2.png";
import cate3 from "../../documents/cate3.jpg";
import cate4 from "../../documents/cate4.jpg";
import cate5 from "../../documents/cate5.jpg";
import cate6 from "../../documents/cate6.jpeg";
import cate7 from "../../documents/cate7.jpg";
import cate8 from "../../documents/cate8.jpg";

import servicespic1 from "../../documents/servicespic1.jpg";
import servicespic2 from "../../documents/servicespic2.jpg";
import servicespic3 from "../../documents/servicespic3.jpeg";
import servicespic4 from "../../documents/servicespic4.jpeg";
import servicespic5 from "../../documents/servicespic5.jpeg";
import servicespic6 from "../../documents/servicespic6.jpg";
import servicespic7 from "../../documents/servicespic7.jpeg";
import servicespic8 from "../../documents/servicespic8.jpg";

import dec1 from "../../documents/dec1.jpg";
import dec2 from "../../documents/dec2.jpg";
import dec3 from "../../documents/dec3.jpg";
import dec4 from "../../documents/dec4.jpg";
import dec5 from "../../documents/dec5.jpeg";
import dec6 from "../../documents/dec6.jpg";
import dec7 from "../../documents/dec7.jpg";
import dec8 from "../../documents/dec8.jpg";

import pho1 from "../../documents/pho1.jpeg";
import pho2 from "../../documents/pho2.jpg";
import pho3 from "../../documents/pho3.jpg";
import pho4 from "../../documents/pho4.jpg";
import pho5 from "../../documents/pho5.jpg";
import pho6 from "../../documents/pho6.jpg";
import pho7 from "../../documents/pho7.jpg";
import pho8 from "../../documents/pho8.jpg";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function EventsCustomer() {
  const [popup, setPopup] = useState(false);
  const [popupS, setPopupS] = useState(false);
  const [service, setService] = useState(false);
  const [serviceRegister, setServiceRegister] = useState(true);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePopup = () => {
    setPopup(!popup);
  };
  const handlePopupS = () => {
    setPopupS(!popupS);
  };
  const handleService = () => {
    if (!service) {
      setService(!service);
    }
    if (serviceRegister) {
      setServiceRegister(!serviceRegister);
    }
  };
  const handleServiceRegister = () => {
    if (!serviceRegister) {
      setServiceRegister(!serviceRegister);
    }
    if (service) {
      setService(!service);
    }
  };

  const cateData = (
    <>
      <div
        className="flex m-5 flex-wrap 
              gap-1"
      >
        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/assets/images/fabcake.jpg"
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                The Fab
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <Link
              to="/customerserviceportfolio"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              See Portfolio
              <svg
                class="ml-2 -mr-1 w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={cate2}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Sinro Caterers
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700  ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={cate3}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                A. H. Caters
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">Trial</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={cate4}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Raffles Catering
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={cate5}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Colombo Catering
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Trial</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={cate6}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Food, Function & Catering
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class=" w-72 bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={cate7}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Jayamal Caterers
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Trial</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={cate8}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Newsiri Caters
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );

  const serviceRegisterData = (
    <>
      <div
        className="flex m-5 flex-wrap 
              gap-1"
      >
        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={servicespic1}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Marino Beach Colombo
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={servicespic2}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Pegasus Reef Hotel
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={servicespic3}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Galadari Hotel
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Trial</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={servicespic4}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Mandarina Colombo
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={servicespic5}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Cinnamon Red Colombo
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Trial</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={servicespic6}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Cinnamon Grand Colombo
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class=" w-72 bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={servicespic7}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Galle Face Hotel
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Trial</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={servicespic8}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                ME Colombo
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
  const decData = (
    <>
      <div
        className="flex m-5 flex-wrap 
              gap-1"
      >
        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={dec1}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Smart Flora
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700  ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={dec2}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Wedding Carpet
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={dec3}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Olu Flora
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Trial</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={dec4}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Manahara Flora
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700  ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={dec5}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                2nd Chance Flowers
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Trial</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={dec6}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight ">
                Lassana Flora
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class=" w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={dec7}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">
                Wedding Dream Flora
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700  ">Trial</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={dec8}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Shamins Deorations
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );

  const phoData = (
    <>
      <div
        className="flex m-5 flex-wrap 
              gap-1"
      >
        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={pho1}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Shine Photography
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700  ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={pho2}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                CHE Studio
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={pho3}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Foto Station
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Trial</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={pho4}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                PhotoLk
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={pho5}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Roocine Studio
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Trial</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={pho6}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Dark Room Photography
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class=" w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={pho7}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Video7 Studio
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Trial</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="w-72 bg-white rounded-lg border border-gray-200 shadow-md ">
          <a href="#">
            <img
              class="rounded-t-lg"
              src={pho8}
              alt=""
              className=" w-72 h-60"
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                PassionArt Wedding Photographhy
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 ">Premium</p>
            <Rate />
            <a
              href="#"
              class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              See Portfolio
              <svg
                aria-hidden="true"
                class="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className=" relative p-5 w-full mt-14 md:mt-0 mb-2 h-full">
      {/* <div className={serviceRegister ? "hidden" : "flex p-1 md:px-4 py-2 "}> */}
      <div className="relative w-64 mt-6 mb-6">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchIcon
              className="!h-5 !w-5 fill-slate-300"
              viewBox="0 0 20 20"
            />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for Services..."
            type="text"
            name="search"
          />
        </label>
      </div>
      {/* </div> */}
      {/* tabs at the top of table
      <div className="w-full mt-2 md:w-[80%] md:mx-[10%] lg:w-[60%] lg:mx-[20%] text-[10px] md:text-xs">
        <ul class="flex ">
          <li
            className={
              service
                ? "mr-4 inline-block border-b-2 border-cyan-500 p-1 cursor-pointer text-cyan-500 uppercase text-lg "
                : "mr-4 inline-block p-1 border-b-2 hover:text-cyan-500 hover:border-cyan-500 cursor-pointer uppercase text-lg"
            }
            onClick={handleService}
          >
            Service
          </li>
          <li
            className={
              serviceRegister
                ? "mr-2 inline-block border-b-2 border-cyan-500 p-1 cursor-pointer text-cyan-500 uppercase text-lg "
                : "mr-2 inline-block p-1 border-b-2 hover:text-cyan-500 hover:border-cyan-500 cursor-pointer uppercase text-lg"
            }
            onClick={handleServiceRegister}
          >
            Service registrations
          </li>
        </ul>
      </div>
      end of tabs
      {service ? serviceData : serviceRegisterData} */}

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="BIRTHDAY" {...a11yProps(0)} />
            <Tab label="WEDDING" {...a11yProps(1)} />
            <Tab label="RECEPTION" {...a11yProps(2)} />
            <Tab label="ENGAGEMENT" {...a11yProps(3)} />
            <Tab label="OTHER OCCASION" {...a11yProps(4)} />

            {/* <div className="ml-28">
<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="Catering-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="Catering-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Catering</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="Halls-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="Halls-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Halls</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="Decoration-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
            <label for="Decoration-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Decoration</label>
        </div>
    </li>
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="Photography-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="Photography-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Photography</label>
        </div>
    </li>
</ul>
</div> */}
          </Tabs>
        </Box>

        <div className="flex flex-wrap lg:flex-nowrap justify-center">
          {/* <div
          className="flex flex-wrap
         gap-1"
        > */}
          <div>
            <br />
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
              Services
            </h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li class="w-full rounded-t-lg border-b border-gray-200 ">
                <div class="flex items-center pl-3">
                  <input
                    id="Caterings-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    checked
                  />
                  <label
                    for="Caterings-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Caterings
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg border-b border-gray-200 ">
                <div class="flex items-center pl-3">
                  <input
                    id="Halls-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="Halls-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Halls
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg border-b border-gray-200 ">
                <div class="flex items-center pl-3">
                  <input
                    id="Decoration-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="Decoration-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Decoration
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg border-b border-gray-200 ">
                <div class="flex items-center pl-3">
                  <input
                    id="Photography-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="Photography-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Photography
                  </label>
                </div>
              </li>
            </ul>

            <br />
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
              Status
            </h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li class="w-full rounded-t-lg border-b border-gray-200">
                <div class="flex items-center pl-3">
                  <input
                    id="premium-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="premium-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Premium
                  </label>
                </div>
              </li>
              <li class="w-full rounded-t-lg border-b border-gray-200">
                <div class="flex items-center pl-3">
                  <input
                    id="trial-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-blue-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="trial-checkbox"
                    class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Trial
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <TabPanel value={value} index={0}>
              {cateData}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {cateData}
              {serviceRegisterData}
              {decData}
              {phoData}
            </TabPanel>
            <TabPanel value={value} index={2}>
              {decData}
              {phoData}
            </TabPanel>
            <TabPanel value={value} index={3}>
              {phoData}
            </TabPanel>
          </div>

          {/* </div> */}
        </div>
      </Box>

      {/* <div
        className={
          popup
            ? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0"
            : "hidden"
        }
      >
        <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[70%] mx-[15%] p-2">
          <div className="w-full inline-flex justify-end items-end">
            <AiOutlineClose
              className="w-4 h-4 cursor-pointer"
              onClick={handlePopup}
            />
          </div>
          <div className="w-full flex flex-col lg:flex-row">
            <div className="flex flex-col  items-center shadow-2xl mb-2 ">
            
              <div className="p-2">
                <img
                  src={Shakir}
                  alt=""
                  className="w-28 h-28 rounded-full shadow-2xl "
                />
              </div>

          
              <div className="flex flex-col w-44 p-4">
                <button className=" border-2   p-1 mb-3 rounded hover:bg-transparent hover:border-black">
                  Remove
                </button>
              </div>
            </div>
            <div className=" w-full">
              <p className="text-center text-base font-medium mb-2 border-b-2">
                Details
              </p>
              <p className="md:ml-8 px-1 text-left">
                <b>Name:</b> Perera and sons
              </p>
              <p className="md:ml-8 px-1 text-left">
                <b>BR:</b> 867564980
              </p>
              <p className="md:ml-8 px-1 text-left">
                <b>Address:</b> 45,Kings Cross,Colombo 02
              </p>
              <div className="mx-[20%]">
                <button className="mt-4 w-full md:ml-8 text-center p-1 text-white bg-cyan-500 hover:bg-cyan-400">
                  Visit Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div
        className={
          popupS
            ? "fixed backdrop-blur-[1px] bg-black/60 top-0 w-full h-full z-50  p-4 left-0"
            : "hidden"
        }
      >
        <div className="bg-white fixed rounded-3xl shadow-2xl top-[20%] flex flex-col  w-[70%] mx-[15%] p-2">
          <div className="w-full inline-flex justify-end items-end">
            <AiOutlineClose
              className="w-6 h-6 cursor-pointer"
              onClick={handlePopupS}
            />
          </div>

          <div className=" w-full">
            <p className="text-center text-base font-medium mb-2 border-b-2">
              Details
            </p>
            <p className="md:ml-8 px-1 text-left">
              <b>Name:</b> Kalindu Photography
            </p>
            <p className="md:ml-8 px-1 text-left">
              <b>BR:</b> 867564980
            </p>
            <p className="md:ml-8 px-1 text-left">
              <b>Address:</b> 32,Ruhuna Road, Colombo 02
            </p>
          </div>
          <div className="mx-[20%] bg-red-600">
            <p className="text-center">Document comes here</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default EventsCustomer;
