import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month,
  Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../../../data/dummy';
import { Header } from '../../../components';
import {Button} from '../../../components';


const Appointment2 = () => {
  return (
    <div className="w-full p-2 pb-48
    bg-slate-100">
    <div className="m-2 md:m-10 mt-24 p-2
    md:p-10 bg-white rounded-3xl">
      <Header title="Appointments" />
      
      {/* <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource:scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
        >
          <Inject services={[Day, Week, WorkWeek,
          Month, Resize, DragAndDrop]} />
      </ScheduleComponent> */}



        <div className="flex w-full justify-center items-center mt-2">
        {/* <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-slate-200 w-full max-w-4xl p-8 rounded-xl shadow-lg  bg-opacity-60  justify-center items-center" > */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-white w-full max-w-4xl p-8 rounded-xl shadow-lg  bg-opacity-60  justify-center items-center" >
            {/* <div className="flex flex-col space-y-8 justify-between"> */}
                {/* <div>
                    <h1 className="font-bold text-4xl tracking-wide">
                        Contact Us
                    </h1>
                    <p className="pt-2 text-white-100 text-sm">
                        Need to get in touch or want to say us anything, send us a message we will reach you back within one business day
                    </p>
                </div> */}

            {/* </div> */}

            {/* <div>
                <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 md:w-80">
                    <form className="flex flex-col space-y-4 ">
                        <div>
                            <input type="text" placeholder="Your name" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black">
                            </input>
                        </div>

                        <div>
                            <input type="email" placeholder="Your email" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black">
                            </input>
                        </div>

                        <div>
                            <textarea placeholder="Your message" rows="5" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black">
                            </textarea>
                        </div>

                        <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-sky-700 ">
                            Send
                        </button>
                    </form>
                </div>
            </div> */}



            <div>
                {/* <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 md:w-80"> */}
                    <form className="flex flex-col space-y-4 ">
                        <div>
                            <input type="date" placeholder="Date" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black">
                            </input>
                        </div>

                        <div>
                            <input type="time" placeholder="Time" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black">
                            </input>
                        </div>

                        {/* <div>
                            <textarea placeholder="Your message" rows="5" className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300  text-black">
                            </textarea>
                        </div> */}

                        {/* <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-sky-700 ">
                            Send
                        </button> */}
 <div className="mt-6 justify-center items-center">
              <Button 
                color="white"
                bgColor="#03C9D7"
              //  bgColor={currentColor}
                text="Create"
                borderRadius="10px"
                size="md"
                width="300px"
                // margin-right="200px"
              />
            </div>

                    </form>
                {/* </div> */}
            </div>



        </div>
    </div>


    </div>




    </div>
  )
}

export default Appointment2

