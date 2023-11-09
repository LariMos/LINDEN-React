

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import homePng from '../images/home.png';
import searchPng from '../images/search.png';
import aboutPng from '../images/about.png';
import helpPng from '../images/help.png';
import menuPng from '../images/menu.png';
import exitPng from '../images/exit.png';


const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHelpClick = () => {
    Swal.fire({
      icon: 'success',
      title: "We're on our way!",
      text: 'Our assistants have been contacted',
      confirmButtonText: 'OK',
      customClass: {
        title: 'font-poppins-800 font-bold text-black text-5xl',
        content: 'font-poppins-800 text-3xl',
        confirmButton: 'font-poppins-300 hover-target border-4 border-black bg-white hover:bg-tahiti-500 text-black font-bold '
      }
    });
  };

  return (
  
    <div className="fixed top-0 z-50 w-full">
      {/* Menu icon for small screens */}
      <div className="sm:block lg:hidden md:hidden flex justify-end p-8">
        <button onClick={() => setIsMenuOpen(true)} className="pointer-events-auto relative">
          <img src={menuPng} alt="Menu" className="w-40 h-40" />
          <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 font-extrabold font-poppins-600 text-white text-3xl">MENU</span>
        </button>

        {/* Exit icon */}
        {isMenuOpen && (
          <button onClick={() => setIsMenuOpen(false)} className="pointer-events-auto absolute top-8 right-8 z-50">
            <img src={exitPng} alt="Exit" className="w-40 h-40" />
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 font-extrabold font-poppins-600 text-black text-3xl">EXIT</span>
          </button>
        )}

        {/* Dropdown menu */}
        {isMenuOpen && (
          <div className="absolute top-0 right-0 font-extrabold font-poppins-600 h-screen w-full bg-blue flex flex-col items-center justify-center text-white text-6xl pointer-events-auto z-40">
            <Link to="/" className="mb-4" onClick={() => setIsMenuOpen(false)}>HOME</Link>
            <Link to="/search" className="mb-4" onClick={() => setIsMenuOpen(false)}>SEARCH</Link>
            <Link to="/about" className="mb-4" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
            <button className="mb-4" onClick={handleHelpClick}>HELP</button>
          </div>
        )}
      </div>



    {/* <div className="flex items-center justify-between p-8 fixed top-8 z-50 w-full pointer-events-none"> */}
    <div className="flex items-center justify-between p-8 fixed top-8 z-50 w-full hidden sm:hidden lg:flex md:flex pointer-events-auto">

    {/* Regular navigation for lg and md screens */}
    {/* <div className="hidden sm:hidden lg:flex md:flex pointer-events-auto"> */}
      <Link to="/" className="relative pointer-events-auto">
        <img src={homePng} alt="Home" className="hover-target w-[212px] lg:w-[212px] md:w-[170px] sm:w-[130px] h-[212px] lg:h-[212px] md:h-[170px] sm:h-[130px] rounded-full" />
        <div className="hover-target absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[164px] lg:w-[164px] md:w-[130px] sm:w-[100px] h-[61px] text-center text-white text-5xl lg:text-5xl md:text-4xl sm:text-3xl font-extrabold font-poppins-600">HOME</div>
      </Link>
      
      <div className="flex flex-col space-y-4 items-end">
        <Link to="/search" className="relative pointer-events-auto">
          <img src={searchPng} alt="Search" className="hover-target w-[145px] lg:w-[145px] md:w-[120px] sm:w-[100px] h-[145px] lg:h-[145px] md:h-[120px] sm:h-[100px]" />
          <div className="hover-target absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[219px] lg:w-[219px] md:w-[170px] sm:w-[130px] h-[61px] text-center text-white text-[30px] lg:text-[30px] md:text-[24px] sm:text-[20px] font-bold font-poppins-300">SEARCH</div>
        </Link>
        
        <Link to="/about" className="relative pointer-events-auto">
          <img src={aboutPng} alt="About" className="hover-target w-[145px] lg:w-[145px] md:w-[120px] sm:w-[100px] h-[145px] lg:h-[145px] md:h-[120px] sm:h-[100px]" />
          <div className="hover-target absolute top-1/2 left-1/2 transform -translate-y-1/3 -translate-x-1/2 w-[219px] lg:w-[219px] md:w-[170px] sm:w-[130px] h-[61px] text-center text-white text-[30px] lg:text-[30px] md:text-[24px] sm:text-[20px] font-bold font-poppins-300">ABOUT</div>
        </Link>
      </div>
    </div>
    <div className="hidden sm:hidden lg:flex md:flex fixed bottom-32 left-8 z-50 pointer-events-auto">
      <button onClick={handleHelpClick}>
          <img src={helpPng} alt="Help" className="hover-target w-[145px] lg:w-[145px] md:w-[120px] sm:w-[100px] h-[145px] lg:h-[145px] md:h-[120px] sm:h-[100px]" />
          <div className="hover-target absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[219px] lg:w-[219px] md:w-[170px] sm:w-[130px] h-[61px] text-center text-white text-[30px] lg:text-[30px] md:text-[24px] sm:text-[20px] font-bold font-poppins-300">HELP</div>
      </button>
  </div>
  </div>
  
  );
}

export default NavBar;



