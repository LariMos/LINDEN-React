import React from 'react';
import { Link } from 'react-router-dom';
import lindenSunVideo from '../videos/lindensun.mp4';


function LandingPage() {
  return (
    <div className="relative h-screen">
      {/* <MouseAnimation /> */}
      
      <div className="relative h-full z-10 flex flex-col justify-center items-center leading-none mx-3 lg:mt-0 md:mt-0 lg:text-[180px] md:text-[100px] sm:text-[40px] font-archivio">
        <div>WELCOME</div>
        <div>TO</div>
        <div className="relative text-transparent bg-clip-text">
          {/* SVG with clipPath */}
          <svg width="100%" height="100%" style={{ position: 'absolute', top: '0', left: '0' }}>
            <defs>
              <clipPath id="video-clip">
                <text x="50%" y="50%" dy=".35em" textAnchor="middle" fontSize="190px" className="font-archivio lg:text-[190px] md:text-[100px] sm:text-[60px]">LINDEN</text>
              </clipPath>
            </defs>
            <foreignObject x="0" y="0" width="100%" height="100%" clipPath="url(#video-clip)">
            <video
                autoPlay
                loop
                muted
                playsInline
                src={lindenSunVideo}
                style={{ objectFit: 'cover', width: '300%', height: '300%' }}
                playbackRate={0.5}
            ></video>
            </foreignObject>
          </svg>
          LINDEN
        </div>
        <div className="text-xl lg:text-3xl md:text-2xl sm:text-xl leading-6 lg:leading-8">
          YOUR HOME FOR <span className="font-chomsky md:text-4xl lg:text-6xl sm:text-xl">The New York Times</span> ARTICLES
        </div>
        <div className='text-lg mt-24 animate-bounce'>Scroll Down</div>
      </div>

      <div className="bg-yellow-400 h-full flex items-center justify-center text-center p-10 lg:px-80 md:px-80 mt-20 lg:mt-20">
        <div>
          <div className="md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            "The more that you read, the more things you will know. The more that you learn, the more places you'll go."
          </div>
          <div className="text-sm lg:text-xl md:text-lg font-light">
            Dr. Seuss in "I Can Read With My Eyes Shut!"
          </div>
        </div>
      </div>
      
      <div className="h-full lg:h-96 bg-white flex flex-col items-center justify-center p-8 lg:p-40">
        <div className="text-2xl lg:text-4xl font-bold">
          Ready to start your adventure? Let's go!
        </div>
        <Link to="/search" className="bg-lime-500 hover-target text-white px-6 py-3 m-12 lg:px-8 lg:py-4 rounded-md">
          Search Articles
        </Link>
      </div>

    </div>
  );
}

export default LandingPage;
