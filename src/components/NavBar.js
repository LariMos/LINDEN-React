import React from 'react';
import { Link } from 'react-router-dom';
import homePng from '../images/home.png';
import searchPng from '../images/search.png';
import aboutPng from '../images/about.png';

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-8 fixed top-0 z-50 w-full">
      <Link to="/" className="relative">
        <img src={homePng} alt="Home" className="hover-target w-[212px] lg:w-[212px] md:w-[170px] sm:w-[130px] h-[212px] lg:h-[212px] md:h-[170px] sm:h-[130px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[164px] lg:w-[164px] md:w-[130px] sm:w-[100px] h-[61px] text-center text-white text-5xl lg:text-5xl md:text-4xl sm:text-3xl font-extrabold font-poppins-600">HOME</div>
      </Link>
      
      <div className="flex flex-col space-y-4 items-end">
        <Link to="/search" className="relative">
          <img src={searchPng} alt="Search" className="hover-target w-[145px] lg:w-[145px] md:w-[120px] sm:w-[100px] h-[145px] lg:h-[145px] md:h-[120px] sm:h-[100px]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[219px] lg:w-[219px] md:w-[170px] sm:w-[130px] h-[61px] text-center text-white text-[30px] lg:text-[30px] md:text-[24px] sm:text-[20px] font-bold font-poppins-300">SEARCH</div>
        </Link>
        
        <Link to="/about" className="relative">
          <img src={aboutPng} alt="About" className="hover-target w-[145px] lg:w-[145px] md:w-[120px] sm:w-[100px] h-[145px] lg:h-[145px] md:h-[120px] sm:h-[100px]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-y-1/3 -translate-x-1/2 w-[219px] lg:w-[219px] md:w-[170px] sm:w-[130px] h-[61px] text-center text-white text-[30px] lg:text-[30px] md:text-[24px] sm:text-[20px] font-bold font-poppins-300">ABOUT</div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
