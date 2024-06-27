import React from 'react';
import Navbar from '../components/Navbar';
import GradientBackground from '../components/GradientBG';
import Avatar from '../assets/avatar.png';

const Home = () => {
  return (
    <div className="bg-black">
      <div>
        <GradientBackground>
          <div className="">
            <Navbar />
            <div className="mx-6 md:mx-14 lg:mx-32 md:grid md:grid-cols-2 justify-between gap-20 items-center">
              <div className="flex justify-center">
                {/* Set a fixed size for the image using inline styles */}
                <img className='bottom-0' src={Avatar} alt="" style={{ width: '1000px', height: '800px' }} />
              </div>
              <div className="">
                <p className='broge-font text-4xl text-center text-white'>Minting <span className='bg-gradient-to-t from-emerald-500 to-violet-300 font-medium bg-clip-text text-transparent'>Unique  </span>Digital Art</p>
                <p className='bricolage-font text-white text-2xl text-center pt-6'>Empower creators to mint unique NFT collections effortlessly. Our platform offers seamless minting, showcasing, and trading of digital assets, revolutionizing ownership in the digital age.</p>
                <div className=" flex justify-center pt-6 broge-font">
                  <button className=' bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 p-3 rounded text-xl font-medium border-b-2 border-white'>Mint Now ➮</button>
                </div>
              </div>
            </div>
          </div>
        </GradientBackground>
      </div>
    </div>
  );
}

export default Home;
