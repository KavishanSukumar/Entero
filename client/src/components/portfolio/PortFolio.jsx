import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AboutUs from "./AboutUs";
import Packages from "./Packages";
import Review from "./Review";
import Contact from "./Contact";

function PortFolio() {
  const [activeTab, setActiveTab] = React.useState(<AboutUs />);

  const handleChange = (id) => {
    switch (id) {
      case "aboutus":
        setActiveTab(<AboutUs />);
        break;
      case "packages":
        setActiveTab(<Packages />);
        break;
      case "review":
        setActiveTab(<Review />);
        break;
      case "contact":
        setActiveTab(<Contact />);
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
            src="data:image/jpeg;base64,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"
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
                onClick={() => handleChange("aboutus")}
                className="cursor-pointer font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                About Us
              </p>
              <p
                onClick={() => handleChange("packages")}
                className="cursor-pointer font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                Packages
              </p>
              <p
                onClick={() => handleChange("review")}
                className="cursor-pointer font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                Reviews
              </p>
              <p
                onClick={() => handleChange("contact")}
                className="cursor-pointer font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
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
