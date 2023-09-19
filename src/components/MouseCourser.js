import { useEffect } from 'react';
import cursorTriangle from '../svg/coursertriangle.svg';
import click from '../svg/click.svg';

function MouseCourser() {
  
  useEffect(() => {
    // Set the initial cursor
    document.body.style.cursor = `url(${cursorTriangle}) 16 16, auto`;

    const handleMouseOver = () => {
      document.body.style.cursor = `url(${click}) 16 16, auto`;
    };

    const handleMouseOut = () => {
      document.body.style.cursor = `url(${cursorTriangle}) 16 16, auto`;
    };

    // Get all the buttons with the class hover-target
    const targetButtons = document.querySelectorAll('.hover-target');

    targetButtons.forEach(button => {
      button.addEventListener('mouseover', handleMouseOver);
      button.addEventListener('mouseout', handleMouseOut);
    });

    // Clean up event listeners on component unmount
    return () => {
      targetButtons.forEach(button => {
        button.removeEventListener('mouseover', handleMouseOver);
        button.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return null; // The component doesn't render anything.
}

export default MouseCourser;
