import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
const File_Url = "http://localhost:4000/profilePics/";

function ReviewCard({ data }) {
  console.log(data);
  return (
    <div className="flex flex-col m-3 shadow-inner rounded-lg">
      <div className="flex flex-row m-3">
        <div className="m-3">
          <img
            class="h-16 w-16 object-cover rounded-full"
            src={File_Url + data.image}
            alt="Current profile photo"
          />
        </div>
        <div className="flex flex-col m-3">
          <div className="font-sans text-2xl">{data.name}</div>
          <div>
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating name="read-only" value={data.rating} readOnly />
            </Box>
          </div>
        </div>
      </div>
      <div className="m-3 font-serif italic">{data.content}</div>
    </div>
  );
}

export default ReviewCard;
