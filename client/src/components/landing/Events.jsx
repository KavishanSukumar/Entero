import { Card } from "@mui/material";
import React from "react";

const EventImgs = [
  "https://images.unsplash.com/photo-1517398741578-fc1e1a3c6c1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1579555973297-560c43ca7562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

function Events() {
  return (

    <div className="mx-3 mb-10 mt-24">
      <div className="flex justify-center mx-3 my-8">

        <h5 className="text-4xl font-bold tracking-tight text-gray-900 ">
          Events
        </h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div className=" flex flex-row bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative hover:scale-105">
          <div className="inline-flex items-center justify-center p-2 rounded-md shadow-lg mr-3 ">
            <img
              src={EventImgs[0]}
              className="w-auto h-100 object-cover rounded-xl"
              alt="Event Imgs"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-slate-900  mt-5 text-base font-medium tracking-tight">
              Birthday
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              We enlight your birthday celebration with more joyful and elegant
              services
            </p>
          </div>
        </div>
        <div className=" flex flex-row bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative hover:scale-105">
          <div className="inline-flex items-center justify-center p-2 rounded-md shadow-lg mr-3">
            <img
              src={EventImgs[1]}
              className="w-auto h-100 object-cover rounded-xl"
              alt="Event Imgs"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-slate-900  mt-5 text-base font-medium tracking-tight">
              Wedding
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              You can choose the services as per your wish to make your day more
              special and surprising.
            </p>
          </div>
        </div>
        <div className=" flex flex-row bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative hover:scale-105">
          <div className="inline-flex items-center justify-center p-2 rounded-md shadow-lg mr-3">
            <img
              src={EventImgs[2]}
              className="w-auto h-100 object-cover rounded-xl"
              alt="Event Imgs"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-slate-900  mt-5 text-base font-medium tracking-tight">
              Reception
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              Experience your moments in every point which makes you happy
            </p>
          </div>
        </div>
        <div className=" flex flex-row bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative hover:scale-105">
          <div className="inline-flex items-center justify-center p-2 rounded-md shadow-lg mr-3">
            <img
              src={EventImgs[3]}
              className="w-auto h-100 object-cover rounded-xl"
              alt="Event Imgs"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-slate-900  mt-5 text-base font-medium tracking-tight">
              Engagement
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              To make your day success make a keen choice
            </p>
          </div>
        </div>
        <div className=" flex flex-row bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative hover:scale-105">
          <div className="inline-flex items-center justify-center p-2 rounded-md shadow-lg mr-3">
            <img
              src={EventImgs[4]}
              className="w-auto h-100 object-cover rounded-xl"
              alt="Event Imgs"
            />
          </div>
          <div className="ml-3">
            <h3 className="text-slate-900  mt-5 text-base font-medium tracking-tight">
              Other Occasion
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              Here we are to resolve your needs to make your occations ideal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
