import React from "react";

const ServicesImgs = [
  "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  "https://images.unsplash.com/photo-1530211880599-888c156159e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80",

  "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

function Services() {
  return (
    <div className="m-3">
      <div className="flex justify-center m-3">
        <h5 className="text-4xl font-bold tracking-tight text-gray-900 ">
          Services
        </h5>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mx-3 my-3">
        <div class="bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span class="inline-flex items-center justify-center p-2 rounded-md shadow-lg">
              <img
                src={ServicesImgs[0]}
                className="w-screen h-auto  rounded-xl"
                alt="Event Imgs"
              />
            </span>
          </div>
          <h3 class="text-slate-900  mt-5 text-base font-medium tracking-tight">
            Catering
          </h3>
          <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
        <div class="bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span class="inline-flex items-center justify-center p-2 rounded-md shadow-lg">
              <img
                src={ServicesImgs[1]}
                className="w-screen h-auto  rounded-xl"
                alt="Event Imgs"
              />
            </span>
          </div>
          <h3 class="text-slate-900  mt-5 text-base font-medium tracking-tight">
            Decorations
          </h3>
          <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
        <div class="bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span class="inline-flex items-center justify-center p-2 rounded-md shadow-lg">
              <img
                src={ServicesImgs[2]}
                className="w-screen h-auto  rounded-xl"
                alt="Event Imgs"
              />
            </span>
          </div>
          <h3 class="text-slate-900  mt-5 text-base font-medium tracking-tight">
            Hall
          </h3>
          <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
        <div class="bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span class="inline-flex items-center justify-center p-2 rounded-md shadow-lg">
              <img
                src={ServicesImgs[3]}
                className="w-screen h-auto  rounded-xl"
                alt="Event Imgs"
              />
            </span>
          </div>
          <h3 class="text-slate-900  mt-5 text-base font-medium tracking-tight">
            Photography
          </h3>
          <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
