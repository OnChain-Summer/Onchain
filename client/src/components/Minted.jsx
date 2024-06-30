import React from "react";
import Kid from "../assets/successkid.png";
import GradientBackground from "../components/GradientBG";
import ButtonTemp from "./Button";

const Minted = () => {
  return (
      <div className=" ">
        <GradientBackground>
          <div className="bricolage-font fixed inset-0 flex items-center ">
            <div className="bg-transparent shadow-2xl border-2 border-white lg:backdrop-brightness-110 text-white px-6 py-3 md:py-6 rounded-lg max-w-4xl mx-2 md:mx-auto">
                <div className=" items-center">
              <img className="mx-auto h-52 md:h-72 w-auto" src={Kid} alt="" />
              <p className=" text-2xl text-center md:text-3xl broge-font">
                You have <span className=" bg-gradient-to-t from-emerald-500 via-purple-200 to-purple-600 font-medium bg-clip-text text-transparent"> succesfully minted!</span>
              </p>
              <ButtonTemp title="Go Back 🢅" to="/" />
              </div>
            </div>
          </div>
        </GradientBackground>
      </div>
  );
};

export default Minted;
