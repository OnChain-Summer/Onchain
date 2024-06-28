import React from "react";
import Navbar from "../components/Navbar";
import GradientBackground from "../components/GradientBG";
import Cube from "../components/Cube";

const Communities = () => {
  return (
    <div className="bg-black">
      <div className="">
        <GradientBackground>
          <div className="">
            <Navbar />
            <div className="mx-6 md:mx-14 lg:mx-32 gap-20 items-center flex-row md:flex justify-center">
                <div className=" pt-32">
                <Cube />
                </div>
                <div className="">
                    <p className=" pt-32 text-3xl text-white bricolage-font">sneonionioen sdvndslvn sdkjvjdsnvkjs  sjnkjdsnkjvndskjv dsnvjdsnvn</p>
                </div>
            </div>
          </div>
        </GradientBackground>
      </div>
    </div>
  );
};

export default Communities;
