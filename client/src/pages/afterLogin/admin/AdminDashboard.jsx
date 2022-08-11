import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

// import { Stacked, Button, SparkLine } from '../../../components';
import Stacked from "../../../components/Charts/Stacked";
import Button from "../../../components/button/Button";
import SparkLine from "../../../components/Charts/SparkLine";
import { earningData } from "../../../documents/dummy";
import { SparklineAreaData } from "../../../documents/dummy";
// import { useStateContext } from '../contexts/ContextProvider';
import AdminHeader from "../../../components/header/AdminHeader";
import AdminSidebar from "../../../components/sidebar/AdminSidebar";
import Footer from "../../../components/footer/Footer";
const AdminDashboard = () => {
  //  const { currentColor } = useStateContext();

  return (
    <div>
      <AdminHeader />
      <div>
        <AdminSidebar />
        <div className="pt-12 max-h-fit">
          <div>
            <div className=" bg-slate-100 max-h-fit">
              <div className="flex flex-wrap lg:flex-nowrap justify-center">
                {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dary-bg h-44
          rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repat bg-cover bg-center">
            <div className="flex justify-between item-center">
              <div>
                <p className="font-bold text-gray-400">
                  Earnings
                </p>
                <p className="text-2xl">
                  $3,448.78
                </p>
              </div>
  
            </div>
            <div className="mt-6">
              <Button 
                color="white"
                bgColor="#03C9D7"
              //  bgColor={currentColor}
                text="Download"
                borderRadius="10px"
                size="md"
              />
            </div>
          </div> */}

                <div
                  className="flex m-3 flex-wrap justify-center
          gap-1 item-center"
                >
                  {earningData.map((item) => (
                    <div
                      key={item.title}
                      className="bg-white
                dark:text-gray-200
                dark:bg-secondary-dark-bg md:w-56
                p-4 pt-9 rounded-2xl"
                    >
                      <button
                        type="button"
                        style={{
                          color: item.iconColor,
                          backgroundColor: item.iconBg,
                        }}
                        className="text-2xl opacity-0.9
                  rounded-full p-4
                  hover:drop-shadow-xl"
                      >
                        {item.icon}
                      </button>
                      <p className="mt-3">
                        <span className="text-lg font-semibold text-black">
                          {item.amount}
                        </span>
                        {/* <span className={`text-sm text-${item.pcColor} ml-2`}>
                      {item.percentage}
                    </span> */}
                      </p>
                      <p className="text-sm text-black mt-1">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-10 flex-wrap justify-center">
                <div
                  className="bg-white m-3 p-4
          rounded-2xl md:w-780"
                >
                  <div className="flex justify-between">
                    <p className="font-semibold text-black text-xl">
                      Revenue Updates
                    </p>
                    <div className="flex item-center gap-4">
                      {/* <p className="flex item-center gap-2 text-gray-600
                hover:drop-shadow-xl">
                  <span><GoPrimitiveDot /></span>
                  <span>Expense</span>
                </p> */}
                      <p
                        className="flex item-center gap-2 text-green-400
                hover:drop-shadow-xl"
                      >
                        <span>2022</span>
                      </p>
                    </div>
                  </div>

                  <div
                    className="mt-10 flex gap-10
              flex-wrap justify-center"
                  >
                    <div className="border-r-1 border-color m-4 pr-10">
                      <div>
                        <p>
                          <span className="text-3xl font-semibold">
                            LKR 1500
                          </span>
                          {/* <span className="p-1.5 hover:drop-shadow-xl cursor-pointer
                      rounded-full text-white bg-green-400 ml-3 text-xs">
                        23%
                      </span> */}
                        </p>
                        <p className="text-gray-500 mt-1">Income</p>
                      </div>

                      <div className="mt-8">
                        <p>
                          {/* <span className="text-3xl font-semibold">
                        $48,438
                      </span> */}
                        </p>
                        {/* <p className="text-gray-500 mt-1">
                      Expense
                    </p> */}
                      </div>

                      {/* <div className="mt-5">
                      <SparkLine 
                        currentColor="#03C9D7"
                        // currentColor={currentColor}
                        id="line-sparkline"
                        type="Line"
                        height="80px"
                        width="250px"
                        data={SparklineAreaData}
                        color="#03C9D7"
                        // color={currentColor}
                      />
                    </div> */}

                      <div className="mt-10">
                        <Button
                          color="white"
                          bgColor="#03C9D7"
                          // bgColor={currentColor}
                          text="Go to Report"
                          borderRadius="10px"
                        />
                      </div>
                    </div>
                    <div>
                      <Stacked width="360px" height="360px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
