import React from "react";

function User() {
  return (
    <div className="grid grid-cols-6 p-3 m-3 border-b-2">
      <div>
        <img
          className="inline-block h-14 w-14 rounded-full ring-2 ring-gray-500"
          src="/assets/images/fab.jpg"
          alt=""
        />
      </div>
      <div className="col-span-5 flex flex-col">
        <p className="text-lg font-medium capitalize truncate">Fabs</p>
        <p className="text-sm italic truncate overflow-hidden">
          Thank you shakir for connecting us
        </p>
      </div>
    </div>
  );
}

export default User;
