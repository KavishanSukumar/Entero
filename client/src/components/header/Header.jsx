import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { NavHashLink } from "react-router-hash-link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Login from "../login/Login";

function Header(props) {
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
                <Dialog.Panel className="relative w-9/12  transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
                    <Login data={props.data} />
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
            <NavHashLink to="/#carousel" smooth>
              Home
            </NavHashLink>
            {/* <a href="#carousel">Home</a> */}
          </li>
          <li className="px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded">
            <NavHashLink to="/#services" smooth>
              Services
            </NavHashLink>
            {/* <a href="#services">Services</a> */}
          </li>
          <li className="px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded">
            <NavHashLink to="/#events" smooth>
              Events
            </NavHashLink>
            {/* <a href="#events">Events</a> */}
          </li>
          <li className="px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded">
            <NavHashLink to="/#aboutus" smooth>
              About Us
            </NavHashLink>
            {/* <a href="#aboutus">About Us</a> */}
          </li>
          <li className="px-6 lg:px-8 py-3 hover:text-cyan-500  hover:rounded">
            <NavHashLink to="/#contactus" smooth>
              Contact Us
            </NavHashLink>
            {/* <a href="#contactus">Contact Us</a> */}
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
            <li
              className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg"
              onClick={handleNav}
            >
              <NavHashLink to="/#carousel">Home</NavHashLink>
            </li>
            <li
              className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg"
              onClick={handleNav}
            >
              <NavHashLink to="/#services">Services</NavHashLink>
            </li>
            <li
              className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg"
              onClick={handleNav}
            >
              <NavHashLink to="/#events">Events</NavHashLink>
            </li>
            <li
              className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg"
              onClick={handleNav}
            >
              <NavHashLink to="/#aboutus">About Us</NavHashLink>
            </li>

            <li
              className="py-2 border-b mb-4 border-gray-500 flex text-white p-3 hover:bg-gray-700 hover:rounded-lg"
              onClick={handleNav}
            >
              <NavHashLink to="/#contactus">Contact Us</NavHashLink>
            </li>

            <li className="p-4">
              <button
                type="button"
                onClick={() => handleBoth()}
                className="bg-cyan-500 text-white hover:bg-cyan-400 px-5 py-2 rounded mx-2"
              >
                Sign in
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
