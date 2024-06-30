import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Wallet from './Wallet'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleCloseClick = () => {
    setIsOpen(false); // Close the sidebar when the close button is clicked
  };

  return (
    <div className=" bricolage-font">
      <div className="bg-transparent p-4 z-10 w-full fixed backdrop-filter backdrop-blur-lg bg-opacity-20 flex justify-between items-center ">
        <motion.a href="/" className=" text-white text-xl broge-font hover:cursor-pointer" whileTap={{ scale: 0.9 }}>
          OnChain
        </motion.a>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="block text-xl text-white font-semibold focus:outline-none mr-4"
          >
            ☰
          </button>
        </div>
        <div
          className={`lg:hidden absolute inset-y-0 z-50 left-0 transform transition duration-300 ease-in-out bg-white text-black backdrop-filter backdrop-blur-lg h-screen w-64 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={handleCloseClick}
            className="absolute top-0 right-0 m-4 text-2xl focus:outline-none"
          >
            ×
          </button>
          <ul className="p-4 space-y-2 poppins-font font-medium">
            <li>
              <Link
                to="/"
                className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
              >
                NFT Collections
              </Link>
            </li>
            <li>
              <Link
                to="/mint"
                className="py-1 px-1 mx-1 pt-2 md:py-3 md:px-3 md:mx-3 flex-wrap hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
              >
                Mint NFT
              </Link>
            </li>
          </ul>
        </div>
        {/* Desktop Navbar */}
        <div className="hidden lg:flex text-white lg:items-center lg:justify-center lg:space-x-4  space-x-2 poppins-font font-medium mr-4 text-lg">
          <div className="">
            <Link
              to="/"
              className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:border-b-2 hover:border-white  hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
            >
              Home
            </Link>
            <Link
              to="/experience"
              className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
            >
              About Us
            </Link>
            <Link
              to="/works"
              className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
            >
              NFT Collections
            </Link>
            <Link
              to="/mint"
              className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
            >
              Mint NFTs
            </Link>
            <Link
              to="/communities"
              className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:border-b-2 hover:border-white hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"
            >
              Communities
            </Link>
          </div>
        </div>
        <Wallet />
      </div>
    </div>
  );
};

export default Navbar;
