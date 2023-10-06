import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import lindenSunVideo from '../videos/lindensun.mp4';
import Arrow from '../svg/arrow.svg'; 


function LandingPage() {

  const targetRef = useRef(null);

  const scrollToNextDiv = () => {
    if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <div className='flex flex-row items-center mt-8 p-4'>
        <img src={Arrow} alt="Arrow pointing down" className="hover-target" onClick={scrollToNextDiv} />
        <div className='hover-target text-lg ml-8' onClick={scrollToNextDiv}>Scroll Down</div>
        </div>
      </div>

      <div ref={targetRef} className="bg-yellow-400 h-full flex flex-col items-center justify-center font-poppins-900 text-left p-10 mt-20 lg:mt-20">
          <div className="font-bold text-2xl lg:text-6xl font-bold mb-12 w-1/3 lg:mb-6">
            "The more that you read, the more things you will know. The more that you learn, the more places you'll go."
          </div>
          <div className="text-lg w-1/3 lg:text-2xl md:text-lg">
            Dr. Seuss in "I Can Read With My Eyes Shut!"
          </div>
      </div>
      
      <div className="h-full flex flex-col items-center justify-center p-8 bg-white lg:p-40">
        <div className="text-2xl lg:text-4xl font-bold">
          Ready to start your adventure? Let's go!
        </div>
        <Link to="/search" className="mt-12 mb-32 hover-target border-4 border-black bg-white hover:bg-tahiti-500 text-black font-bold py-4 px-8 mt-4 rounded text-xl lg:text-3xl w-[600px]">
          CLICK TO BEGIN YOUR SEARCH
        </Link>
      </div>

    </div>
  );
}

export default LandingPage;
