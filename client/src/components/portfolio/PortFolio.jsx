import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AboutUs from "./AboutUs";
import Packages from "./Packages";
import Review from "./Review";
import Contact from "./Contact";

function PortFolio() {
  const [activeTab, setActiveTab] = React.useState(<AboutUs />);
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

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
          setActiveTab(<Review />);
          setActiveTabIndex(2);
        }
        break;
      case "contact":
        {
          setActiveTab(<Contact />);
          setActiveTabIndex(3);
        }
        break;
      default:
        break;
    }
  };

  let stars = 5;
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
            alt=""
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
            <a
              href="/CustomerServices"
              className=" bg-cyan-500 text-white hover:bg-blue-400 py-2 px-3 rounded mr-1 cursor-pointer"
            >
              Back
            </a>
          </div>
        </div>
      </div>
      <div className="m-3">{activeTab}</div>
    </div>
  );
}

export default PortFolio;
