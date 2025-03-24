import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {

  const date = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div>
          <h3 className="text-xl font-semibold">Shopify</h3>
          <p className="mt-4">
            Your one-step for all your needs. Use shophify and experience the
            best online shopping experiences{" "}
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="lg:font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                className="relative after:block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in hover:after:w-full"
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="relative after:block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in hover:after:w-full"
                to={"/shop"}
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                className="relative after:block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in hover:after:w-full"
                to={"/contact"}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="relative after:block after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-white after:left-0 after:bottom-0 after:transition-all after:duration-300 after:ease-in hover:after:w-full"
                to={"/about"}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Follow us</h3>
          <div className="flex space-x-4 mt-4">
            <a href="" className="hover:text-gray-400 lg:text-2xl">
              <FaInstagram />
            </a>
            <a href="" className="hover:text-gray-400 lg:text-2xl">
              <FaFacebook />
            </a>
            <a href="" className="hover:text-gray-400 lg:text-2xl">

              <FaXTwitter />
            </a>
            <a href="" className="hover:text-gray-400 lg:text-2xl">
              <FaWhatsapp />
            </a>
          </div>
          <form className=" flex items-center justify-center mt-8">
            <input type="email" placeholder="Enter email" className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600" />
            <button className="bg-red-600 text-white px-4 py-2.5 rounded-r-lg border border-gray-600">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {date} Shopify All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="" className="hover:underline">Privacy Policy</a>
            <a href="" className="hover:underline">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
