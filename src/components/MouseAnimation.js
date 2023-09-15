import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function MouseAnimation() {
  const triangleUpRef = useRef(null);
  const rectangleRef = useRef(null);

  useEffect(() => {
    gsap.set(triangleUpRef.current, { xPercent: 0, yPercent: -180 });
    gsap.set(rectangleRef.current, { xPercent: 20, yPercent: -20 });

    const handleMouseMove = (e) => {
      const offsetX = triangleUpRef.current?.offsetWidth / 2;
      const rectOffsetX = rectangleRef.current?.offsetWidth / 2;
      const rectOffsetY = rectangleRef.current?.offsetHeight / 2;

      gsap.to(triangleUpRef.current, {
        x: e.clientX - offsetX,
        y: e.clientY + window.scrollY,
        duration: 0.15,
        overwrite: true
      });

      gsap.to(rectangleRef.current, {
        x: e.clientX - rectOffsetX,
        y: e.clientY - rectOffsetY + window.scrollY,
        duration: 0.3,
        overwrite: true
      });
    };

    const handleHoverEnter = (e) => {
      if (e.target.classList.contains('hover-target')) {
        if (triangleUpRef.current) triangleUpRef.current.style.display = 'none';
        if (rectangleRef.current) rectangleRef.current.style.display = 'block';
      }
    };

    const handleHoverLeave = (e) => {
      if (e.target.classList.contains('hover-target')) {
        if (rectangleRef.current) rectangleRef.current.style.display = 'none';
        if (triangleUpRef.current) triangleUpRef.current.style.display = 'block';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleHoverEnter);
    document.addEventListener('mouseout', handleHoverLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleHoverEnter);
      document.removeEventListener('mouseout', handleHoverLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={triangleUpRef}
        style={{
          width: 0,
          height: 0,
          borderLeft: '40px solid transparent',
          borderRight: '40px solid transparent',
          borderBottom: '80px solid dodgerblue'
        }}
        className="absolute z-20 pointer-events-none"
      ></div>
      <div
        ref={rectangleRef}
        style={{ display: 'none' }}
        className="absolute z-50 pointer-events-none flex flex-col items-center justify-center"
      >
        <i className="z-50 fa-solid fa-hand-pointer fa-6x text-rose-500 p-0 m-0"></i>
        <h2 className='mt-2 rounded-lg text-rose-500 bg-white font-semibold text-center'> CLICK HERE </h2>
      </div>
    </>
  );
}

export default MouseAnimation;
