import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid, earningData2 } from "../../../documents/dummy";
import { Header } from "../../../components";
import { Button } from "../../../components";
import avatar from "../../../documents/avatar.jpg";
import avatar2 from "../../../documents/avatar2.jpg";
import avatar3 from "../../../documents/avatar3.png";
import avatar4 from "../../../documents/avatar4.jpg";
import avatar5 from "../../../documents/avatar5.jpg";

const Services2 = () => {
  return (
    <div
      className="w-full p-2 pb-48
              bg-slate-100"
    >
      <div
        className="m-2 md:m-10 p-2 md:p-10 
            bg-white rounded-3xl"
      >
        <Header title="Services" />

        <div className="flex flex-wrap lg:flex-nowrap justify-center">
        

          <div
            className="flex flex-wrap
           gap-1"
          >
            <div 
              className=" ml-5"
            // className="flex m-5 flex-wrap justify-center
            //   gap-1 item-center"
            >
              {earningData2.map((item) => (
                <div
                  key={item.title}
                  className="bg-white
                    dark:text-gray-200
                    dark:bg-secondary-dark-bg md:w-56 gap-4 mt-2
                    p-4 pt-9 rounded-2xl hover:drop-shadow-xl shadow-lg"
                >
                  <div className="flex m-1 flex-wrap gap-1">
                    <div className="ml-1">
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
                    </div>

                    <div className="ml-12">
                      <Button
                        color="white"
                        bgColor="#03C9D7"
                        //  bgColor={currentColor}
                        text="Search"
                        borderRadius="10px"
                        size="md"
                      />
                    </div>
                  </div>

                  <p className="mt-3">
                    <span className="text-lg font-semibold">{item.amount}</span>
                    <span className={`text-sm text-${item.pcColor} ml-2`}>
                      {item.percentage}
                    </span>
                  </p>
                  {/* <p className="text-sm text-gray-400 mt-1">{item.title}</p> */}
                </div>
              ))}
            </div>
            <div
            // className="flex m-5 flex-wrap 
            // gap-1"
            >

<div
            //   className="flex m-5 flex-wrap justify-center
            //   gap-1 item-center"
            className="flex m-5 flex-wrap 
              gap-1"
            >
              {/* <div>
                <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 md:w-80">
                  <form className="flex flex-col space-y-4 ">
                    <div>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                      ></input>
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Your email"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                      ></input>
                    </div>

                    <div>
                      <textarea
                        placeholder="Your message"
                        rows="5"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                      ></textarea>
                    </div>
                    
                    <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-sky-700 ">
                      View Portfolio
                    </button>
                  </form>
                </div>
              </div> */}

              

            

              <div>
                <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 md:w-80">
                  <form className="flex flex-col space-y-4 ">
                    <div
                      className=" flex item-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                      // onClick={() => handleClick('userProfile')}
                    >
                      <img className="rounded-full w-12 h-12" src={avatar5} />
                      <p>
                        <span className="text-gray-400 text-14">
                          Yonali Fernando
                        </span>{" "}
                        <br />
                        <span className="text-gray-400 font-bold ml-1 text-14">
                          Galle
                        </span>
                      </p>
                      {/* <MdKeyboardArrowDown className="text-gray-400 text-14"/> */}
                    </div>

                    <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-sky-700 ">
                      View Portfolio
                    </button>
                  </form>
                </div>
              </div>

              <div>
                <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 md:w-80">
                  <form className="flex flex-col space-y-4 ">
                    <div
                      className=" flex item-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                      // onClick={() => handleClick('userProfile')}
                    >
                      <img className="rounded-full w-12 h-12" src={avatar2} />
                      <p>
                        <span className="text-gray-400 text-14">
                          Priskila Athauda
                        </span>{" "}
                        <br />
                        <span className="text-gray-400 font-bold ml-1 text-14">
                          Kandy
                        </span>
                      </p>
                      {/* <MdKeyboardArrowDown className="text-gray-400 text-14"/> */}
                    </div>

                    <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-sky-700 ">
                      View Portfolio
                    </button>
                  </form>
                </div>
              </div>

              <div>
                <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 md:w-80">
                  <form className="flex flex-col space-y-4 ">
                    <div
                      className=" flex item-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                      // onClick={() => handleClick('userProfile')}
                    >
                      <img className="rounded-full w-12 h-12" src={avatar} />
                      <p>
                        <span className="text-gray-400 text-14">
                          Kavishan Sukumar
                        </span>{" "}
                        <br />
                        <span className="text-gray-400 font-bold ml-1 text-14">
                          Kaluthara
                        </span>
                      </p>
                      {/* <MdKeyboardArrowDown className="text-gray-400 text-14"/> */}
                    </div>

                    <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-sky-700 ">
                      View Portfolio
                    </button>
                  </form>
                </div>
              </div>

              </div>

            <div
            //   className="flex m-5 flex-wrap justify-center
            //   gap-1 item-center"
            className="flex m-5 flex-wrap 
              gap-1"
            >
              {/* <div>
                <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 md:w-80">
                  <form className="flex flex-col space-y-4 ">
                    <div>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                      ></input>
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Your email"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                      ></input>
                    </div>

                    <div>
                      <textarea
                        placeholder="Your message"
                        rows="5"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black"
                      ></textarea>
                    </div>
                    
                    <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-sky-700 ">
                      View Portfolio
                    </button>
                  </form>
                </div>
              </div> */}

              

            

              <div>
                <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 md:w-80">
                  <form className="flex flex-col space-y-4 ">
                    <div
                      className=" flex item-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                      // onClick={() => handleClick('userProfile')}
                    >
                      <img className="rounded-full w-12 h-12" src={avatar3} />
                      <p>
                        <span className="text-gray-400 text-14">
                          Shakir Saheel
                        </span>{" "}
                        <br />
                        <span className="text-gray-400 font-bold ml-1 text-14">
                          Maggona
                        </span>
                      </p>
                      {/* <MdKeyboardArrowDown className="text-gray-400 text-14"/> */}
                    </div>

                    <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-sky-700 ">
                      View Portfolio
                    </button>
                  </form>
                </div>
              </div>

              <div>
                <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 md:w-80">
                  <form className="flex flex-col space-y-4 ">
                    <div
                      className=" flex item-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                      // onClick={() => handleClick('userProfile')}
                    >
                      <img className="rounded-full w-12 h-12" src={avatar4} />
                      <p>
                        <span className="text-gray-400 text-14">
                          Senal Punsara
                        </span>{" "}
                        <br />
                        <span className="text-gray-400 font-bold ml-1 text-14">
                          Colombo
                        </span>
                      </p>
                      {/* <MdKeyboardArrowDown className="text-gray-400 text-14"/> */}
                    </div>

                    <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-sky-700 ">
                      View Portfolio
                    </button>
                  </form>
                </div>
              </div>

              <div>
                <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 md:w-80">
                  <form className="flex flex-col space-y-4 ">
                    <div
                      className=" flex item-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                      // onClick={() => handleClick('userProfile')}
                    >
                      <img className="rounded-full w-12 h-12" src={avatar5} />
                      <p>
                        <span className="text-gray-400 text-14">
                          Yonali Fernando
                        </span>{" "}
                        <br />
                        <span className="text-gray-400 font-bold ml-1 text-14">
                          Galle
                        </span>
                      </p>
                      {/* <MdKeyboardArrowDown className="text-gray-400 text-14"/> */}
                    </div>

                    <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-sky-700 ">
                      View Portfolio
                    </button>
                  </form>
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

export default Services2;
