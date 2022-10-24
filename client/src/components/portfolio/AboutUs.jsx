import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";

const IMG_URL2 = "http://localhost:4000/api/serviceprovider/portfolioimages";

function AboutUs({ userid, data }) {
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    getportfolioimages(userid);
  }, [userid]);

  const getportfolioimages = async (uid) => {
    try {
      const res = await axios.get(IMG_URL2 + "/" + uid);
      setItemData(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex flex-row">
      <div className="basis-7/12 p-3 flex flex-col lg:flex-col-reverse justify-center min-w-36 h-96 overflow-auto m-3">
        {data?.description}
      </div>
      <div className="basis-8/12 m-3">
        <ImageList
          sx={{ width: 1000, height: 500 }}
          variant="woven"
          cols={3}
          gap={8}
        >
          {itemData.map(
            (item, index) => (
              console.log(index),
              (
                <ImageListItem key={item.img}>
                  <img
                    src={
                      "http://localhost:4000/" + userid + "/" + itemData[index]
                    }
                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              )
            )
          )}
        </ImageList>
      </div>
    </div>
  );
}

export default AboutUs;
