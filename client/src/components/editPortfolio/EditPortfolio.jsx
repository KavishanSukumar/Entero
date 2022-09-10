
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AboutUs from "./AboutUs";
import Packages from "./Packages";
import Review from "./Review";
import Contact from "./Contact";
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:4000/api/serviceprovider/portfoliosp";

function PortFolio(props) {
  

  const [userid, setUser] = React.useState(props.id);
  console.log("this is from service provider portfolio 2 ====== "+userid);

  const [portfolioinfo, setportfolioinfo] = useState([]);
 

  async function getportfolioinfo(uid) {

    try {
      const res = await axios.get(API_URL, {uid})
      setportfolioinfo(res.data);
  
    } catch (error) {
      console.error(error.message);
      console.log('error in edit portfolio ');
    }
  }
  useEffect(() => {
    getportfolioinfo(userid);
   
  }, []);

  const [activeTab, setActiveTab] = React.useState(<AboutUs  uid={userid}  />);
  const handleChange = (id,userid,ischeckapp,ischeckchat) => {

    switch (id) {
      case "aboutus":
        setActiveTab(<AboutUs uid={userid} />);
        break;
      case "packages":
        setActiveTab(<Packages uid={userid} />);
        break;
      case "review":
        setActiveTab(<Review uid={userid}/>);
        break;
      case "contact":
        console.log('chat in Edit portfolio');
        console.log(ischeckapp);
        console.log(ischeckchat);
        setActiveTab(<Contact uid={userid} appcheck={ischeckapp} chatcheck={ischeckchat}/>);
        break;
      default:
        break;
    }
  };

  let stars = 2.5;
  const starlist = [];

  for (let i = 1; i <= 5; i++) {
    if (stars > 0) {
      starlist.push(
        <StarRateIcon key={i} className="text-amber-200 text-xs" />
      );
      stars--;
    } else if (!Number.isInteger(stars)) {
      starlist.push(
        <StarHalfIcon key={i} className="text-amber-200 text-xs" />
      );
      stars = 0;
    } else {
      starlist.push(<StarRateIcon key={i} className="text-xs" />);
    }
  }
  return (
    <div className="flex flex-col m-3 shadow-inner rounded-lg">
      <div className="flex flex-row m-3">
        <div className="flex justify-left mx-3  basis-1/12">
          <img
            src="/assets/images/fab.jpg"
            alt="logo"
            className="w-36 h-36 object-contain m-3 shadow-inner"
          />
        </div>
        <div className="flex flex-col justify-center m-3 basis-6/12">
          <div>
            <p className="font-sans text-2xl max-w-sm">The Fab</p>
          </div>
          <div className="">{starlist}</div>
          <div className="my-3">
            <nav className="flex justify-start space-x-18">
              <p
                onClick={() => handleChange("aboutus",userid)}
                className="cursor-pointer font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 "
              >
                About Us
              </p>
              <p
                onClick={() => handleChange("packages",userid)}
                className="cursor-pointer font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                Packages
              </p>

              <p
                onClick={() => {handleChange("contact",userid,portfolioinfo[0].appointment_enable,portfolioinfo[0].chat_enable)}}
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
