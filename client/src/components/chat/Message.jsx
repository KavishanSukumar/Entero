import React from "react";

function Message({ status }) {
  return (
    <div
      className={
        status
          ? "flex flex-row m-3 items-center justify-end"
          : "flex flex-row m-3 items-center justify-start"
      }
    >
      <div className="m-3">
        <img
          className="inline-block h-9 w-9 rounded-full ring-2 ring-black"
          src="/assets/images/fab.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <div
          className={
            status
              ? "flex bg-gray-100 p-3 rounded-xl"
              : "flex bg-blue-100 p-3 rounded-xl"
          }
        >
          <p className="text-sm italic ml-3 max-w-md">
            We have package related to you requirements. and those are vissible
            in the portfolio section. You can refer them to us for more details.
          </p>
        </div>
        <div className="flex">
          <p className="text-sm italic ml-3 max-w-md">1 hour ago</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
