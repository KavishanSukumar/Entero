import React from "react";
import PackageCard from "./package/PackageCard";

function Packages(props) {
  return (
    <div className="flex flex-col">
      <PackageCard uid={props.uid} />
    </div>
  );
}

export default Packages;
