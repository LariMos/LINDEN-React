import React from 'react'
import MouseAnimation from '../components/MouseAnimation'


function LandingPage() {
  return (
    <div className="relative h-screen">
      <MouseAnimation />
       
      <div className='flex flex-col justify-center items-center leading-none mt-36 mx-3 lg:text-[200px] md:text-[140px] sm:text-[50px] font-archivio'>
        <div>
            WELCOME
        </div>
        <div>
            TO
        </div>
        <div className='bg-gradient-to-r from-bermuda to-amber-200 text-transparent bg-clip-text'>
            LINDEN
        </div>

        <div className='lg:text-3xl sm:text-5xl leading-8'>
            YOUR HOME FOR <span className='font-chomsky lg:text-6xl sm:text-6xl'>New York Times</span> ARTICLES
        </div>
      </div>

      <div className="bg-yellow-400 h-96 flex items-center justify-center text-center p-80 mt-20">
        <div>
          <div className="text-4xl font-bold mb-6">
            "The more that you read, the more things you will know. The more that you learn, the more places you'll go."
          </div>
          <div className="text-xl font-light">
            Dr. Seuss in "I Can Read With My Eyes Shut!"
          </div>
        </div>
      </div>
      
      <div className="h-96 bg-white flex items-center justify-between p-40">
        <div className="text-4xl font-bold">
          Ready to start your adventure? Let's go!
        </div>
        <button className="bg-lime-500 hover-target text-white px-8 py-4 rounded-md">
          Search Articles
        </button>
      </div>

    </div>
  )
}

export default LandingPage;

