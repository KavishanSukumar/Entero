import React, { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AboutUs from "./AboutUs";
import Packages from "./Packages";
import Review from "./Review";
import Contact from "./Contact";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const API_URL_USER = "http://localhost:4000/api/user/";
const PORTFOLIOURL = "http://localhost:4000/api/serviceprovider/portfoliosp/";
const File_Url = "http://localhost:4000/profilePics/";
const URL_REVIEW_AVG =
  "http://localhost:4000/api/review/serviceprovider/reviewcount/";

function PortFolio({ myuserid }) {
  const urlParameters = useParams();
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);
  const [userid, setUserId] = React.useState(urlParameters.sp_id);
  const [User, setUser] = React.useState();
  const [data, setData] = React.useState();
  const [averageRating, setAverageRating] = useState(0);

  React.useEffect(() => {
    getPortFolio();
    getAllTheAverage();
  }, [userid]);

  const getPortFolio = async () => {
    try {
      const res1 = await axios.get(PORTFOLIOURL + urlParameters.sp_id);
      setData(res1.data[0]);
      const res2 = await axios.post(API_URL_USER, {
        userid,
      });

      setUser(res2.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllTheAverage = async () => {
    const res = await axios.get(URL_REVIEW_AVG + userid);
    setAverageRating(res.data.average);
  };
  console.log(User);

  const [activeTab, setActiveTab] = React.useState(<AboutUs />);
  console.log(data);
  const handleChange = (id) => {
    switch (id) {
      case "aboutus":
        {
          setActiveTab(<AboutUs />);
          setActiveTabIndex(0);
        }
        break;
      case "packages":
        {
          setActiveTab(<Packages />);
          setActiveTabIndex(1);
        }
        break;
      case "review":
        {
          setActiveTab(<Review userid={userid} />);
          setActiveTabIndex(2);
        }
        break;
      case "contact":
        {
          setActiveTab(
            <Contact userid={userid} myuserid={myuserid} data={data} />
          );
          setActiveTabIndex(3);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col m-3 shadow-inner rounded-lg">
      <div className="flex flex-row m-3">
        <div className="flex justify-left mx-3  basis-1/12">
          <img
            src={File_Url + User?.image}
            alt=""
            className="w-36 h-36 object-contain m-3 shadow-inner"
          />
        </div>
        <div className="flex flex-col justify-center m-3 basis-6/12">
          <div>
            <p className="font-sans text-2xl max-w-sm">{User?.name}</p>
          </div>
          <div className="">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating name="read-only" value={averageRating} readOnly />
            </Box>
          </div>
          <div className="my-3">
            <nav className="flex justify-start space-x-18">
              <p
                onClick={() => handleChange("aboutus")}
                className={
                  activeTabIndex == 0
                    ? "cursor-pointer font-bold px-3 py-2 rounded-lg bg-slate-100 text-slate-900"
                    : "cursor-pointer font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 "
                }
              >
                About Us
              </p>
              <p
                onClick={() => handleChange("packages")}
                className={
                  activeTabIndex == 1
                    ? "cursor-pointer font-bold px-3 py-2 rounded-lg bg-slate-100 text-slate-900"
                    : "cursor-pointer font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 "
                }
              >
                Packages
              </p>
              <p
                onClick={() => handleChange("review")}
                className={
                  activeTabIndex == 2
                    ? "cursor-pointer font-bold px-3 py-2 rounded-lg bg-slate-100 text-slate-900"
                    : "cursor-pointer font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 "
                }
              >
                Reviews
              </p>
              <p
                onClick={() => handleChange("contact")}
                className={
                  activeTabIndex == 3
                    ? "cursor-pointer font-bold px-3 py-2 rounded-lg bg-slate-100 text-slate-900"
                    : "cursor-pointer font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 "
                }
              >
                Contact
              </p>
            </nav>
          </div>
        </div>
        <div className="basis-5/12 flex justify-end m-3">
          <div>
            <Link
              to="/customerevents"
              className=" bg-cyan-500 text-white hover:bg-blue-400 py-2 px-3 rounded mr-1 cursor-pointer"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="m-3">{activeTab}</div>
    </div>
  );
}

export default PortFolio;
