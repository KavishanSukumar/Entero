import React from "react";
import ReviewCard from "./review/ReviewCard";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PersonIcon from "@mui/icons-material/Person";

function Review() {
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
    <div className="flex flex-col shadow-inner rounded-lg p-3 h-auto">
      <div className="m-3">
        <div className="">
          <p className="text-8xl">5.0</p>
        </div>
        <div>{starlist}</div>
        <div className="flex flex-row ">
          <div className="">
            <PersonIcon />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs">1 Review</p>
          </div>
        </div>
      </div>
      <div>
        <ReviewCard data={starlist} />
        
      </div>
    </div>
  );
}

export default Review;
