import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

function ChooseUser() {
  return (
    <div className="flex flex-row mt-48 justify-center font-serif h-auto">
      <div className="relative w-96 h-auto shadow-md rounded-md m-3 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        <div className="flex flex-row justify-center">
          <PersonIcon className="!h-36 !w-36" />
        </div>
        <div>
          <p className="text-lg font-bold text-center py-2">Sign up as</p>
          <p className="text-xl font-bold text-center py-2">Customer</p>
        </div>
      </div>
      <div className="w-96  shadow-md rounded-md m-3 h-auto hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        <div className="flex flex-row justify-center">
          <ManageAccountsIcon className="!h-36 !w-36 " />
        </div>
        <div>
          <p className="text-lg font-bold text-center py-2">Sign up as</p>
          <p className="text-xl font-bold text-center py-2">Service Provider</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseUser;
