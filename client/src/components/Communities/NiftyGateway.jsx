import React from "react";
import Meme1 from "./assets/meme1.png";

const OpenSea = () => {
  return (
    <div className=" items-center text-center text-white md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-800 hover:bg-gray-700 rounded bg-opacity-60 shadow-lg lg:backdrop-brightness-110 p-2 my-3 md:my-0 card2">
        <img className=" h-52 lg:h-52 mx-auto" src={Meme1} alt="" />
        <p>Name of the collection</p>
        <p>Collection Address</p>
      </div>
      <div className="bg-gray-800 hover:bg-gray-700 rounded bg-opacity-60 shadow-lg lg:backdrop-brightness-110 p-2 my-3 md:my-0 card2">
        <img className=" h-52 lg:h-52 mx-auto" src={Meme1} alt="" />
        <p>Name of the collection</p>
        <p>Collection Address</p>
      </div>
      <div className="bg-gray-800 hover:bg-gray-700 rounded bg-opacity-60 shadow-lg lg:backdrop-brightness-110 p-2 my-3 md:my-0 card2">
        <img className=" h-52 lg:h-52 mx-auto" src={Meme1} alt="" />
        <p>Name of the collection</p>
        <p>Collection Address</p>
      </div>
      <div className="bg-gray-800 hover:bg-gray-700 rounded bg-opacity-60 shadow-lg lg:backdrop-brightness-110 p-2 my-3 md:my-0 card2">
        <img className=" h-52 lg:h-52 mx-auto" src={Meme1} alt="" />
        <p>Name of the collection</p>
        <p>Collection Address</p>
      </div>
      <div className="bg-gray-800 hover:bg-gray-700 rounded bg-opacity-60 shadow-lg lg:backdrop-brightness-110 p-2 my-3 md:my-0 card2">
        <img className=" h-52 lg:h-52 mx-auto" src={Meme1} alt="" />
        <p>Name of the collection</p>
        <p>Collection Address</p>
      </div>
    </div>
  );
};

export default OpenSea;
