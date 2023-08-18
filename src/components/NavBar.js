// StickyNavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90 shadow-md p-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold hover-target text-black">HOME</Link>
        <div className="space-x-4">
          <Link to="/search" className="hover-target text-black">SEARCH</Link>
          <Link to="/about" className="hover-target text-black">ABOUT</Link>
          <Link to="/favorites" className="hover-target text-black">FAVORITES</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
 