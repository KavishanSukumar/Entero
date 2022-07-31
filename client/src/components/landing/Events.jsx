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
    <div className="m-3">
      <div className="flex justify-center m-3">
        <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          Events
        </h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        <div class=" flex flex-row bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative">
          <div class="inline-flex items-center justify-center p-2 rounded-md shadow-lg mr-3 ">
            <img
              src={EventImgs[0]}
              className="w-auto h-100 object-cover rounded-full"
              alt="Event Imgs"
            />
          </div>
          <div className="ml-3">
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              Birthday
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
        </div>
        <div class=" flex flex-row bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative">
          <div class="inline-flex items-center justify-center p-2 rounded-md shadow-lg mr-3">
            <img
              src={EventImgs[1]}
              className="w-auto h-100 object-cover rounded-full"
              alt="Event Imgs"
            />
          </div>
          <div className="ml-3">
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              Wedding
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
        </div>
        <div class=" flex flex-row bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative">
          <div class="inline-flex items-center justify-center p-2 rounded-md shadow-lg mr-3">
            <img
              src={EventImgs[2]}
              className="w-auto h-100 object-cover rounded-full"
              alt="Event Imgs"
            />
          </div>
          <div className="ml-3">
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              Reception
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
        </div>
        <div class=" flex flex-row bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative">
          <div class="inline-flex items-center justify-center p-2 rounded-md shadow-lg mr-3">
            <img
              src={EventImgs[3]}
              className="w-auto h-100 object-cover rounded-full"
              alt="Event Imgs"
            />
          </div>
          <div className="ml-3">
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              Engagement
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
        </div>
        <div class=" flex flex-row bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl relative">
          <div class="inline-flex items-center justify-center p-2 rounded-md shadow-lg mr-3">
            <img
              src={EventImgs[4]}
              className="w-auto h-100 object-cover rounded-full"
              alt="Event Imgs"
            />
          </div>
          <div className="ml-3">
            <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              Other Occasion
            </h3>
            <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation,
              including upside-down. It even works in outer space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
