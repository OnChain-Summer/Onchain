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
            <div className="pt-20 mx-6 md:mx-14 lg:mx-32 items-center">
              <p className="text-2xl md:text-3xl lg:text-4xl text-center broge-font text-white">
                Mint Your{" "}
                <span className="bg-gradient-to-b from-yellow-500 via-red-400 to-red-500 bg-clip-text text-transparent">
                  NFT Collection:
                </span>{" "}
              </p>
              <p className=" pt-6 text-xl md:text-2xl text-center text-white">First, You’ll need to deploy an ERC-4337 contract <br /> on the blockchain to create a collection for your NFT.</p>
            </div>

            <div className="bg-transparent shadow-lg lg:backdrop-brightness-110 mt-4 md:mt-10 text-white p-6 rounded-lg max-w-3xl mx-2 md:mx-auto">
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

              <div>
                <label className="block text-sm font-medium mb-1">
                  Blockchain
                </label>
                <div className="flex space-x-4">
                  <button
                    className={`flex-1 bg-gray-800 border border-gray-700 rounded-lg p-4 text-center focus:outline-double ${
                      blockchain === "Ethereum" ? "bg-blue-500" : ""
                    }`}
                    onClick={() => setBlockchain("Ethereum")}
                  >
                    <div className="text-gray-400">Ethereum</div>
                    <div className="text-sm  bg-gray-700 p-1 w-auto rounded">
                      Most popular
                    </div>
                    <div className="mt-2 text-xs">
                      Estimated cost to deploy contract: $2.66
                    </div>
                  </button>
                  <button
                    className={`flex-1 bg-gray-800 border border-gray-700 rounded-lg p-4 text-center focus:outline-double ${
                      blockchain === "Base" ? "bg-blue-500" : ""
                    }`}
                    onClick={() => setBlockchain("Base")}
                  >
                    <div className="text-gray-400">Base</div>
                    <div className="text-sm bg-gray-700 p-1 w-auto rounded">
                      Cheaper
                    </div>
                    <div className="mt-2 text-xs">
                      Estimated cost to deploy contract: $0.01
                    </div>
                  </button>
                  <button className="flex-1 bg-gray-800 border border-gray-700 rounded-lg p-4 text-center focus:outline-double">
                    <div className="text-gray-400">See more options</div>
                  </button>
                </div>
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
              <ButtonTemp title="continue" />
            </div>
          </div>
        </GradientBackground>
      </div>
    </div>
  );
};

export default Mint;
