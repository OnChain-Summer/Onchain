import React from "react";
import Navbar from "../components/Navbar";
import GradientBackground from "../components/GradientBG";
import Avatar from "../assets/avatar.png";
import ButtonTemp from "../components/Button";
import Elon from "../assets/elon.png";
import Meme1 from "../assets/meme1.png";
import Meme2 from "../assets/meme2.png";
import Meme3 from '../assets/meme3.png'

const Home = () => {
  return (
    <div className="bg-black">
      <div className=" bricolage-font">
        <GradientBackground>
          <div className="">
            <Navbar />
            <div className="mx-6 md:mx-14 pt-10 lg:mx-32 lg:grid lg:grid-cols-2 justify-between gap-20 items-center">
              <div className="flex justify-center">
                <img
                  className="bottom-0 h-72 md:h-[600px] md:w-[500px] lg:h-[800px] lg:w-[1000px]"
                  src={Avatar}
                  alt="Avatar"
                />
              </div>
              <div className="">
                <p className="broge-font text-xl md:text-4xl text-center text-white">
                  Own the Internet's
                  <span className=" px-3 md:px-5 bg-gradient-to-t from-emerald-500 via-purple-200 to-purple-600 font-medium bg-clip-text text-transparent">
                    Funniest Moments
                  </span>
                  as NFTs!
                </p>
                <p className="bricolage-font text-white md:text-2xl text-center pt-3 md:pt-6">
                  Welcome to OnchainMemes, the ultimate platform for creating,
                  owning, and trading meme NFTs. We bring the best of internet
                  humor and digital art together, transforming your favorite
                  memes into unique, collectible NFTs.
                </p>
                <ButtonTemp title="Mint Now 🢅" to="/mint" />
              </div>
            </div>
          </div>
          <div className=" items-center mb-10">
            <p className=" text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 md:text-4xl broge-font text-center text-white mt-4 md:mt-0 p-4 md:p-10">
              How it Works
            </p>
            <div className=" md:flex items-center pt-10">
              <div className="bg-transparent shadow-lg lg:backdrop-brightness-110 my-4 md:my-10 hover:bg-gradient-to-t hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white px-6 py-3 md:py-6 rounded-lg max-w-96 max-h-72 text-center mx-2 md:mx-auto">
                <p className=" broge-font text-5xl md:text-7xl">1</p>
                <p className=" text-2xl font-semibold">Create & Mint</p>
                <p>
                  Transform your favorite memes into one-of-a-kind NFTs with our
                  user-friendly tools. Whether it's Doge or Success Kid, make it
                  yours.
                </p>
              </div>
              <div className=" hidden md:flex ">
                <img
                  className=" max-w-96 max-h-72 rounded"
                  src={Meme1}
                  alt=""
                />
              </div>
              <div className="bg-transparent shadow-lg lg:backdrop-brightness-110 my-4 md:my-10 hover:bg-gradient-to-t hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white px-6 py-3 md:py-6 rounded-lg max-w-96 max-h-72 text-center mx-2 md:mx-auto">
                <p className=" broge-font text-5xl md:text-7xl">2</p>
                <p className=" text-2xl font-semibold">Collect & Trade</p>
                <p>
                  Browse a vast collection of meme NFTs. Find classics like
                  Grumpy Cat or discover new meme sensations.
                </p>
              </div>
            </div>
            <div className=" md:flex items-center md:justify-center md:mx-32">
              <div className="hidden md:flex mx-2 md:mx-auto">
                <img
                  className="  max-w-96 max-h-72 rounded"
                  src={Meme2}
                  alt=""
                />
              </div>
              <div className="bg-transparent shadow-lg lg:backdrop-brightness-110 my-4 md:my-10 hover:bg-gradient-to-t hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white px-6 py-3 md:py-6 rounded-lg max-w-96 max-h-72 text-center mx-2 md:mx-auto">
                <p className=" broge-font text-5xl md:text-7xl">3</p>
                <p className=" text-2xl font-semibold">Community Driven</p>
                <p>
                  Join our lively community of meme lovers and NFT enthusiasts.
                  Share, discuss, and stay updated on the latest meme trends.
                </p>
              </div>
              <div className="hidden md:flex mx-2 md:mx-auto">
                <img
                  className=" max-w-96 max-h-72 rounded"
                  src={Meme3}
                  alt=""
                />
              </div>
            </div>
            <ButtonTemp title="Get Started -->" to="/mint" />
          </div>
          <p className=" bg-black p-2 text-center text-white">© 2024 OnchainMemes. All rights reserved. </p>
        </GradientBackground>
      </div>
    </div>
  );
};

export default Home;
