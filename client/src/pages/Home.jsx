import React from 'react'
// import LandingPic from '../assets/landing.png'
import Gradients from '../assets/Gradients.png'
import Navbar from '../components/Navbar'
import GradientBackground from '../components/GradientBG'

const Home = () => {
  return (
    <div classname=" bg-black">
        <div>
            <GradientBackground>
            <div className="">
                <Navbar />
            </div>
            </GradientBackground>
        </div>
    </div>
  )
}

export default Home