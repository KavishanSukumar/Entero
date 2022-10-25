import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SellIcon from "@mui/icons-material/Sell";
import ChoosePackage from "./ChoosePackage";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function PaymentPackageServicePerbooking() {
  const [value, setValue] = React.useState(0);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleBoth() {
    openModal();
    handleNav();
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-11/12  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div> */}

                  <div className="mt-2">
                    <ChoosePackage />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="m-3 flex flex-col">
        <div className="flex justify-start mb-7">
          <h2 className="text-2xl font-bold leading-7 font-serif text-gray-900 sm:text-3xl">
            Service Charge
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="basis-1/2 relative max-w-screen-xl my-3 px-4 sm:px-6 lg:px-8">
            <div className="h-auto lg:h-72 pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
                <h3 className="text-2xl uppercase leading-8 font-extrabold text-gray-900 sm:text-2xl sm:leading-9 dark:text-white">
                  <WorkspacePremiumIcon className="text-yellow-500 !h-10 !w-10" />
                  Trial
                </h3>
                <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
                  This Trial package will give you <b>one month free trial </b>
                  subscription
                </p>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-white">
                  <span>Free Trial</span>
                </div>
                <div className="mt-6">
                  <div className="rounded-md ">
                    <p className="py-2 px-4  text-white w-full  text-center text-base font-semibold  rounded-lg ">
                      Activated
                    </p>
                    <div className="rounded-md shadow">
                      <button
                        onClick={openModal}
                        type="button"
                        className="py-2 px-4  bg-cyan-500 hover:bg-cyan-400 focus:ring-cyan-900 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Change Package
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-3">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Pending Payments" {...a11yProps(0)}></Tab>
                <Tab label="Past Payments" {...a11yProps(1)}></Tab>
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className="overflow-auto justify-center w-full h-auto mt-5">
                <table class="min-w-full z-0">
                  <thead class="bg-white border-b sticky top-0">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Payment ID
                      </th>

                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Time
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Package Name
                      </th>

                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Pay
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        P001
                      </td>

                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        15:00:56
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        30.07.2022
                      </td>

                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                        Premium Montly
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                        LKR 2000
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                        <button
                          type="button"
                          className="py-2 px-4  bg-cyan-500 hover:bg-cyan-400 focus:ring-cyan-900 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        >
                          Click to Pay
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="overflow-auto justify-center w-full h-auto mt-5">
                <table class="min-w-full z-0">
                  <thead class="bg-white border-b sticky top-0">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Payment ID
                      </th>

                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Time
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Package Name
                      </th>

                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Payment Method
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        P001
                      </td>

                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        15:00:56
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        30.07.2022
                      </td>

                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                        Premium Montly
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                        LKR 2000
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap truncate overflow-hidden">
                        Visa
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>
          </Box>
        </div>
      </div>
    </>
  );
}

export default PaymentPackageServicePerbooking;
