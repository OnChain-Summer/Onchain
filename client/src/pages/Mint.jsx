import React, { useState } from "react";
import Navbar from "../components/Navbar";
import GradientBackground from "../components/GradientBG";
import ButtonTemp from "../components/Button";

const Mint = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [community, setCommunity] = useState(""); // New state for community

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-black">
      <div className="">
        <GradientBackground>
          <div className="bricolage-font">
            <Navbar />
            <div className=" pt-32 md:pt-20 mx-6 md:mx-14 lg:mx-32 items-center">
              <p className="text-2xl md:text-3xl lg:text-4xl text-center broge-font text-white">
                Mint Your{" "}
                <span className="bg-gradient-to-b from-yellow-500 via-red-400 to-red-500 bg-clip-text text-transparent">
                  NFT Collection:
                </span>{" "}
              </p>
              <p className=" pt-6 md:text-2xl text-center text-white">First, You’ll need to deploy an ERC-4337 contract <br className=" hidden md:inline" /> on the blockchain to create a collection for your NFT.</p>
            </div>

            <div className="bg-transparent shadow-lg lg:backdrop-brightness-110 my-4 md:my-10  text-white p-6 rounded-lg max-w-3xl mx-2 md:mx-auto">
              <div className="mb-6">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="contractName"
                >
                  Contract name
                </label>
                <input
                  type="text"
                  id="contractName"
                  className="bg-gray-800 border border-gray-700 rounded w-full p-2 text-white"
                  placeholder="My Collection Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="tokenSymbol"
                >
                  Token symbol
                </label>
                <input
                  type="text"
                  id="tokenSymbol"
                  className="bg-gray-800 border border-gray-700 rounded w-full p-2 text-white"
                  placeholder="MCN"
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-1" htmlFor="community">
                  Select Community
                </label>
                <select
                  id="community"
                  className="bg-gray-800 border border-gray-700 rounded w-full p-2 text-white"
                  value={community}
                  onChange={(e) => setCommunity(e.target.value)}
                >
                  <option value="" disabled>Select a community</option>
                  <option value="Community1">OpenSea</option>
                  <option value="Community2">Rarible</option>
                  <option value="Community3">Foundation</option>
                  <option value="Community4">SuperRare</option>
                  <option value="Community5">Zora</option>
                  <option value="Community6">Mintable</option>
                  <option value="Community7">Async Art</option>
                  <option value="Community8">Known Origin</option>
                  <option value="Community9">Nifty Gateway</option>
                  <option value="Community10">BakerySwap</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="media"
                >
                  Upload Media
                </label>
                <input
                  type="file"
                  id="media"
                  className="bg-gray-800 border border-gray-700 rounded w-full p-2 text-white"
                  onChange={handleFileChange}
                />
              </div>
              {preview && (
                <div className="mt-6">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
              )}
              <ButtonTemp title="continue 🢅" />
            </div>
          </div>
        </GradientBackground>
      </div>
    </div>
  );
};

export default Mint;
