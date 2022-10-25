import React, { useState } from "react";
import ReviewCard from "./review/ReviewCard";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
const URL_REVIEW = "http://localhost:4000/api/review/serviceprovider/";
const USER = "http://localhost:4000/api/user";
const File_Url = "http://localhost:4000/profilePics/";
const URL_REVIEW_AVG =
  "http://localhost:4000/api/review/serviceprovider/reviewcount/";

function Review({ userid }) {
  console.log(userid);
  const [stars, setStars] = useState(0);
  const starlist = [];
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    getAllTheReviews();
    getAllTheAverage();
  }, []);

  const getAllTheReviews = async () => {
    const res = await axios.get(URL_REVIEW + userid);
    setReviews(res.data);
  };
  const getAllTheAverage = async () => {
    const res = await axios.get(URL_REVIEW_AVG + userid);
    setAverageRating(res.data.average);
  };
  console.log(averageRating);
  return (
    <div className="flex flex-col shadow-inner rounded-lg p-3 h-auto">
      <div className="m-3">
        <div className="">
          <p className="text-5xl">{averageRating}</p>
        </div>
        <div>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="read-only"
              value={averageRating}
              readOnly
              precision={0.5}
            />
          </Box>
        </div>
        <div className="flex flex-row ">
          <div className="">
            <PersonIcon />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs">{reviews.length} Review</p>
          </div>
        </div>
      </div>
      <div>
        {reviews.map((review) => (
          <ReviewCard data={review} />
        ))}
      </div>
    </div>
  );
}

export default Review;
