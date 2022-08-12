import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
  return (
    <div className="py-3 px-3 grid md:grid-cols-3 gap-8 text-black  shadow-3xl rounded-lg border-2 m-2">
      <div>
        <img
          src="/assets/images/Ss.svg"
          alt="logo"
          className="w-36 h-36 object-cover "
        />
        <p className="py-1">
          Entero is a event planning site which is dedicated to making any event
          you can imagine a reality. Make your event memorable with Entero.
        </p>
        <div className="flex justify-between my-3">
          <BsFillTelephoneFill
            className="cursor-pointer text-green-600"
            size={30}
          />
          <ImLocation className="cursor-pointer text-red-600" size={30} />
          <FaFacebookSquare className="cursor-pointer text-sky-800" size={30} />
          <FaInstagram className="cursor-pointer text-red-500" size={30} />
          <FaTwitterSquare className="cursor-pointer text-cyan-500" size={30} />
        </div>
      </div>
      <div className="md:col-span-2 flex justify-around mt-3">
        <div>
          <h6 className="font-medium text-black">Information</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">
              <Link to="/aboutus">About us</Link>
            </li>
            <li className="py-2 text-sm cursor-pointer">Event Management</li>
            <li className="py-2 text-sm cursor-pointer">
              <Link to="/contactus cursor-pointer">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-black">Categories</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Pricing</li>
            <li className="py-2 text-sm cursor-pointer">Documentation</li>
            <li className="py-2 text-sm cursor-pointer">Guides</li>
            <li className="py-2 text-sm cursor-pointer">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-black ">Legal</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
