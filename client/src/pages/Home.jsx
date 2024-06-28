import React from "react";
import Navbar from "../components/Navbar";
import GradientBackground from "../components/GradientBG";
import Avatar from "../assets/avatar.png";
import ButtonTemp from "../components/Button";
import NFTText from "../assets/nfttext.png";
import NFT from "../assets/nftcollection.png";

const Home = () => {
  return (
    <div className="bg-black">
      <div className="">
        <GradientBackground>
          <div className="">
            <Navbar />
            <div className="mx-6 md:mx-14 lg:mx-32 lg:grid lg:grid-cols-2 justify-between gap-20 items-center">
              <div className="flex justify-center">
                {/* Set a fixed size for the image using inline styles */}
                <img
                  className="bottom-0 pt-10  h-96 md:h-[600px] md:w-[500px] lg:h-[800px] lg:w-[1000px]"
                  src={Avatar}
                  alt=""
                  // style={{ width: "1000px", height: "800px" }}
                />
              </div>
              <div className="">
                <p className="broge-font text-3xl md:text-4xl lg:text-5xl text-center text-white">
                  Minting{" "}
                  <span className="bg-gradient-to-t from-emerald-500 via-purple-200 to-purple-600 font-medium bg-clip-text text-transparent">
                    Unique{" "}
                  </span>
                  Digital Art
                </p>
                <p className="bricolage-font text-white md:text-2xl text-center pt-6">
                  Empower creators to mint unique NFT collections effortlessly.
                  Our platform offers seamless minting, showcasing, and trading
                  of digital assets, revolutionizing ownership in the digital
                  age.
                </p>
                <ButtonTemp title="Mint Now 🢅" to="/mint" />
              </div>
            </div>
          </div>
        </GradientBackground>
      </div>
    </div>
  );
};

export default Home;
