import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Login from "../login/Login";

function Header() {
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

  return (
    <>
      {/* Login Form */}
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
                <Dialog.Panel className="relative w-7/12  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>

                  <div className="mt-2">
                    <Login />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="sticky z-20 top-0 flex items-center h-14 w-full text-black bg-white shadow-2xl justify-between ">
        {/* Before login styles  */}

        {/* header logo */}
        <img
          src="/assets/images/Ss.svg"
          alt="logo"
          className="w-20 h-14 object-cover mt-3"
        />
        {/* <h1 className="text-3xl font-bold text-[#00df9a] px-4">Logo</h1> */}

        {/*header links */}
        <ul className="hidden md:flex">
          <li className="px-6 lg:px-8 py-3 hover:text-cyan-500 hover:rounded">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-cyan-500 hover:text-black" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-cyan-500 hover:text-black" : ""
              }
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li className="px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-cyan-500 hover:text-black" : ""
              }
              to="/events"
            >
              Events
            </NavLink>
          </li>
          <li className="px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-cyan-500 hover:text-black" : ""
              }
              to="/aboutus"
            >
              About Us
            </NavLink>
          </li>
          <li className="px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-cyan-500 hover:text-cyan-500" : ""
              }
              to="/contactus"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/*login components*/}
        <div className="p-3 hidden md:block">
          <button
            type="button"
            onClick={openModal}
            className="bg-cyan-500 text-white hover:bg-cyan-400 px-5 py-2 rounded mx-2"
          >
            Sign in
          </button>
        </div>

        {/* Responsive component */}
        <div onClick={handleNav} className="flex md:hidden">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-14 w-full p-2 min-h-full overflow-y-auto bg-gray-800 text-white  md:hidden"
              : " fixed left-[-100%]"
          }
        >
          <ul className=" text-sm">
            <li className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1"
                    : "inline-flex items-center "
                }
              >
                <span className="ml-3">Home</span>
              </NavLink>
            </li>
            <li className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1"
                    : "inline-flex items-center "
                }
              >
                <span className="ml-3">Services</span>
              </NavLink>
            </li>
            <li className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg">
              <NavLink
                to="/adminusercustomer"
                className={({ isActive }) =>
                  isActive
                    ? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1"
                    : "inline-flex items-center "
                }
              >
                <span className="ml-3">Events</span>
              </NavLink>
            </li>

            <li className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1"
                    : "inline-flex items-center "
                }
              >
                <span className="ml-3">About Us</span>
              </NavLink>
            </li>
            <li className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "inline-flex w-full items-center bg-gray-700 rounded-lg py-2 p-1"
                    : "inline-flex items-center "
                }
              >
                <span className="ml-3">Contact Us</span>
              </NavLink>
            </li>

            <li className="p-4">
              <Link
                to="/"
                className="bg-blue-500 text-white hover:bg-blue-400 px-5 py-2 rounded"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
