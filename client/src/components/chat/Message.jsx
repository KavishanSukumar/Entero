import React from "react";
import moment from "moment";

function Message({ status, message }) {
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
          <p className="text-sm italic ml-3 max-w-md">{message.message}</p>
        </div>
        <div className="flex">
          <p className="text-sm italic ml-3 max-w-md">
            {moment(message.date, "YYYY-MM-DD").fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
