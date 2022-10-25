import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AboutUs from "./AboutUs";
import Packages from "./Packages";
import Review from "./Review";
import Contact from "./Contact";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const API_URL = "http://localhost:4000/api/serviceprovider/portfoliosp";
const API_URL_USER = "http://localhost:4000/api/user/";
const File_Url = "http://localhost:4000/profilePics/";
const URL_REVIEW_AVG =
  "http://localhost:4000/api/review/serviceprovider/reviewcount/";

function PortFolio(props) {
  const [userid, setUserid] = React.useState(props.id);
  console.log("this is from Edit portfolio  ====== " + userid);

  const [portfolioinfo, setportfolioinfo] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [User, setUser] = React.useState();

  async function getportfolioinfo(uid) {
    try {
      let y = API_URL + "/" + uid;
      const res = await axios.get(y);
      setportfolioinfo(res.data);
    } catch (error) {
      console.error(error.message);
      console.log("error in edit portfolio ");
    }
  }
  useEffect(() => {
    getportfolioinfo(userid);
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res2 = await axios.post(API_URL_USER, {
        userid,
      });
      setUser(res2.data);
      const res = await axios.get(URL_REVIEW_AVG + userid);
      setAverageRating(res.data.average);
    } catch (error) {
      console.log(error);
    }
  };

  const [activeTab, setActiveTab] = React.useState(<AboutUs uid={userid} />);
  const handleChange = (id, userid, ischeckapp, ischeckchat) => {
    switch (id) {
      case "aboutus":
        setActiveTab(<AboutUs uid={userid} />);
        break;
      case "packages":
        setActiveTab(<Packages uid={userid} />);
        break;
      case "review":
        setActiveTab(<Review uid={userid} />);
        break;
      case "contact":
        console.log("chat in Edit portfolio");
        console.log(ischeckapp);
        console.log(ischeckchat);
        setActiveTab(
          <Contact uid={userid} appcheck={ischeckapp} chatcheck={ischeckchat} />
        );
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
            alt="logo"
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
                onClick={() => handleChange("aboutus", userid)}
                className="cursor-pointer font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 "
              >
                About Us
              </p>
              <p
                onClick={() => handleChange("packages", userid)}
                className="cursor-pointer font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                Packages
              </p>

              <p
                onClick={() => {
                  handleChange(
                    "contact",
                    userid,
                    portfolioinfo[0].appointment_enable,
                    portfolioinfo[0].chat_enable
                  );
                }}
                className="cursor-pointer font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                Contact
              </p>
            </nav>
          </div>
        </div>
      </div>
      <div className="m-3">{activeTab}</div>
    </div>
  );
}

export default PortFolio;
