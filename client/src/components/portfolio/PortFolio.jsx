import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import AboutUs from "./AboutUs";
import Packages from "./Packages";
import Review from "./Review";
import Contact from "./Contact";

function PortFolio() {
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
            src="https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/277582841_5239128016098567_5556185992353256575_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGKp4fnlNOqfC6OxI8ZuGz0AYIcaGARm5ABghxoYBGbkJ_pSaYhzhJ0teluCZKKj-kYsDS0AzDUItxxmzTiIc3k&_nc_ohc=RQrvQX_yWL4AX_rOUvS&tn=cj98qFRJLNhnK42a&_nc_ht=scontent-sin6-2.xx&oh=00_AT-_yHyRdj384wYy6JUscCFLkcRtjjHHpOn4Hoq2itE_Hg&oe=62EF85A4"
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
              <a
                href="/"
                className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                About Us
              </a>
              <a
                href="/"
                className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                Packages
              </a>
              <a
                href="/"
                className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                Reviews
              </a>
              <a
                href="/"
                className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
        <div className="basis-5/12 flex justify-end m-3">
          <div>
            <button
              to=""
              className=" bg-cyan-500 text-white hover:bg-blue-400 py-2 px-3 rounded mr-1 cursor-pointer"
            >
              Back
            </button>
          </div>
        </div>
      </div>
      <div className="m-3">
        <Contact />
      </div>
    </div>
  );
}

export default PortFolio;
