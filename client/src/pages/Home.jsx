import React from 'react';
import Navbar from '../components/Navbar';
import GradientBackground from '../components/GradientBG';
import Avatar from '../assets/avatar.png';
import ButtonTemp from '../components/Button';

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
                <p className='broge-font text-5xl text-center text-white'>Minting <span className='bg-gradient-to-t from-emerald-500 via-purple-200 to-purple-600 font-medium bg-clip-text text-transparent'>Unique  </span>Digital Art</p>
                <p className='bricolage-font text-white text-2xl text-center pt-6'>Empower creators to mint unique NFT collections effortlessly. Our platform offers seamless minting, showcasing, and trading of digital assets, revolutionizing ownership in the digital age.</p>
                <ButtonTemp title=" Mint Now 🢅"/>
              </div>
            </div>
          </div>
        </GradientBackground>
      </div>
    </div>
  );
}

export default Home;
