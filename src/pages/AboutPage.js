import React from 'react';
import { useRef } from 'react';
import Arrow from '../svg/arrow.svg'; 

function AboutPage() {
  const targetRef = useRef(null);

  const scrollToNextDiv = () => {
    if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen">
      <div className="relative h-full z-10 flex flex-col justify-center items-center leading-none mx-3 lg:mt-0 md:mt-0">
        <div className="lg:text-[180px] md:text-[100px] sm:text-[40px] font-archivio">WHAT</div>
        <div className="lg:text-[180px] md:text-[100px] sm:text-[40px] font-archivio">IS</div>
        <div className="mt-5 lg:text-[180px] md:text-[100px] sm:text-[40px] font-archivio bg-gradient-to-r from-bermuda to-amber-200 text-transparent bg-clip-text">LINDEN</div>
        <div className="text-xl lg:text-3xl md:text-2xl sm:text-xl font-archivio leading-6 lg:leading-8">
         <span className="font-chomsky md:text-4xl lg:text-6xl sm:text-xl">The New York Times</span> ARTICLE SEARCH
        </div>
        <div className='flex flex-row items-center mt-8 p-4'>
        <img src={Arrow} alt="Arrow pointing down" className="hover-target" onClick={scrollToNextDiv} />
        <div className='hover-target font-archivio text-lg ml-8' onClick={scrollToNextDiv}>Scroll Down</div>
        </div>
      </div> 
      <div ref={targetRef} className="relative flex flex-col justify-center align-center z-10 bg-teal-50 py-32"> {/* Removed h-full and added pb-12 for some padding at the bottom */}
        <div className="w-1/3 mx-auto font-poppins-900 font-bold text-xl leading-loose lg:text-3xl">
          <p className="mb-12 font-bold text-2xl lg:text-6xl ">
            In the heart of my grandmother's garden stood Linden, a tree that blossomed with memories.
          </p>
          <p className="mb-12">Every bloom brought forth an enchanting aroma, reminiscent of the stories grandma shared. In Romania, we cherished its leaves, brewing them into medicinal teas, grounding us in tradition and health.</p>
          <p className="mb-12">As the years passed, my grandmother began her battle with dementia. Instead of anchoring her to the present, I learned to journey with her into her past, cherishing her tales. Those moments of reflection inspired the creation of "Linden," an app dedicated to those navigating the labyrinth of Alzheimer's.</p>
          <p className="mb-12">With Linden, users can delve into the vast archives of The New York Times, offering reading material from as far back as 1908—the birth year of the oldest person in America, and extending to the present day, 2023. Reading isn't just a gateway to the past; studies reveal its power to slow the progression of Alzheimer's.</p>
          <p>Linden is more than just an app; it's a bridge to yesteryears and a testament to the power of stories, embodying the essence of my grandmother's legacy and the strength of memories.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;
