import React from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SellIcon from "@mui/icons-material/Sell";

function ChoosePackage() {
  return (
    
    <div>
      <div className="text-2xl font-serif text-center mt-10 text-gray-700">
        <h1>Choose your payment package</h1>
      </div>
      <div className="m-3 flex flex-col lg:flex-row">
        <div >
          <div className="basis-1/3 mt-9 relative max-w-screen-xl my-1 px-4 sm:px-6 lg:px-8">
            <div className="h-auto lg:h-52 pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="bg-white  dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-4">
                <h3 className="text-2xl uppercase  leading-8 font-extrabold text-gray-900 sm:text-xl sm:leading-9 dark:text-white">
                  <WorkspacePremiumIcon className="text-yellow-500 !h-10 !w-10" />
                  Trial
                </h3>
                <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                  This Trial package will give you <b>one month free trial </b>
                  subscription
                </p>
              </div>
              <div className=" bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:p-8">
                <div className="flex content-justify item-justify text-2xl leading-none font-extrabold text-gray-900 dark:text-white">
                  <span>Free Trial</span>
                </div>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <button
                      type="button"
                      className="py-2 px-4  bg-cyan-500 hover:bg-cyan-400 focus:ring-cyan-900 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Activate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="basis-1/3 mt-9 relative max-w-screen-xl my-3 px-4 sm:px-6 lg:px-8">
            <div className="h-auto lg:h-52 pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="bg-white  dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-4">
                <h3 className="text-2xl uppercase  leading-8 font-extrabold text-gray-900 sm:text-xl sm:leading-9 dark:text-white">
                  <WorkspacePremiumIcon className="text-yellow-500 !h-10 !w-10" />
                  Standard
                </h3>
                <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                  This Standard package will give you <b>six months </b>
                  subscription
                </p>
              </div>
              <div className=" bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:p-8">
                <div className="flex content-justify item-justify text-2xl leading-none font-extrabold text-gray-900 dark:text-white">
                  <span>LKR 4000</span>
                </div>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <button
                      type="button"
                      className="py-2 px-4  bg-cyan-500 hover:bg-cyan-400 focus:ring-cyan-900 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Activate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div >
          <div className="basis-1/3 mt-9 relative max-w-screen-xl my-3 px-4 sm:px-6 lg:px-8">
            <div className="h-auto lg:h-52 pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="bg-white  dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-4">
                <h3 className="text-2xl uppercase  leading-8 font-extrabold text-gray-900 sm:text-xl sm:leading-9 dark:text-white">
                  <WorkspacePremiumIcon className="text-yellow-500 !h-10 !w-10" />
                  Premium
                </h3>
                <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                  This Premium package will give you <b>one year </b>
                  subscription
                </p>
              </div>
              <div className=" bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:p-8">
                <div className="flex content-justify item-justify text-2xl leading-none font-extrabold text-gray-900 dark:text-white">
                  <span>LKR 7000</span>
                </div>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <button
                      type="button"
                      className="py-2 px-4  bg-cyan-500 hover:bg-cyan-400 focus:ring-cyan-900 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                    >
                      Activate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoosePackage;
