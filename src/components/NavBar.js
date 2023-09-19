import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import homePng from '../images/home.png';
import searchPng from '../images/search.png';
import aboutPng from '../images/about.png';
import helpPng from '../images/help.png';


const NavBar = () => {

  const handleHelpClick = () => {
    Swal.fire({
      icon: 'success',
      title: "We're on our way!",
      text: 'Our assistants have been contacted',
      confirmButtonText: 'OK',
      customClass: {
        title: 'font-poppins font-bold text-5xl',
        content: 'font-poppins text-3xl',
        confirmButton: 'font-poppins hover-target'
      }
    });
  };

  return (
    <>
    <div className="flex items-center justify-between p-8 fixed top-8 z-50 w-full pointer-events-none">
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
    <div className="fixed bottom-16 right-8 z-50 pointer-events-auto">
      <button onClick={handleHelpClick}>
          <img src={helpPng} alt="Help" className="hover-target w-[145px] lg:w-[145px] md:w-[120px] sm:w-[100px] h-[145px] lg:h-[145px] md:h-[120px] sm:h-[100px]" />
          <div className="hover-target absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[219px] lg:w-[219px] md:w-[170px] sm:w-[130px] h-[61px] text-center text-white text-[30px] lg:text-[30px] md:text-[24px] sm:text-[20px] font-bold font-poppins-300">HELP</div>
      </button>
  </div>
  </>
  );
}

export default NavBar;
