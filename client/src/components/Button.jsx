import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ButtonTemp = ({ title, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <div>
      <div className="flex justify-center pt-6 broge-font">
        <motion.button
          className="text-white bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:from-yellow-500 hover:via-red-500 hover:to-pink-500 hover:shadow-xl p-3 rounded text-base font-medium border-b-2 border-white"
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
        >
          {title}
        </motion.button>
      </div>
    </div>
  );
};

export default ButtonTemp;
