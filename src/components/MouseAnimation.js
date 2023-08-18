// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// function MouseAnimation() {
//   const triangleRef = useRef(null);
//   const rectangleRef = useRef(null);

//   useEffect(() => {
//     gsap.set([triangleRef.current, rectangleRef.current], { xPercent: -50, yPercent: -50 });
    
//     const xToTriangle = gsap.quickTo(triangleRef.current, "x", {duration: 0.6, ease: "power3"});
//     const yToTriangle = gsap.quickTo(triangleRef.current, "y", {duration: 0.6, ease: "power3"});
//     const xToRect = gsap.quickTo(rectangleRef.current, "x", {duration: 0.6, ease: "power3"});
//     const yToRect = gsap.quickTo(rectangleRef.current, "y", {duration: 0.6, ease: "power3"});

//     const handleMouseMove = (e) => {
//       xToTriangle(e.clientX);
//       yToTriangle(e.clientY);
//       xToRect(e.clientX);
//       yToRect(e.clientY);
//     };

//     const hoverTarget = document.querySelector('.hover-target');

//     hoverTarget.addEventListener('mouseenter', () => {
//       triangleRef.current.style.display = 'none';
//       rectangleRef.current.style.display = 'block';
//     });

//     hoverTarget.addEventListener('mouseleave', () => {
//       triangleRef.current.style.display = 'block';
//       rectangleRef.current.style.display = 'none';
//     });

//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//     };

//   }, []);

//   return (
//     <>
//       <div
//         ref={triangleRef}
//         style={{
//           width: 0,
//           height: 0,
//           borderLeft: '20px solid transparent',
//           borderRight: '20px solid transparent',
//           borderBottom: '34px solid dodgerblue'
//         }}
//         className="absolute pointer-events-none"
//       ></div>
//       <div
//         ref={rectangleRef}
//         style={{ display: 'none' }}
//         className="absolute w-24 h-24 p-6 bg-deep-orange-800 rounded-full flex text-center justify-items-center items-center text-orange-50 leading-5 font-archivio pointer-events-none"
//       >
//         CLICK HERE
//       </div>
//     </>
//   );
// }

// export default MouseAnimation;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function MouseAnimation() {
  const triangleRef = useRef(null);
  const rectangleRef = useRef(null);
  let lastScrollY = window.scrollY; // To store the previous scroll position

  useEffect(() => {
    gsap.set(triangleRef.current, { xPercent: 0, yPercent: -120 }); // This will place the triangle's tip on the cursor.
    gsap.set(rectangleRef.current, { xPercent: 20, yPercent: -50 }); // This will center the circle on the cursor.

    const xToTriangle = gsap.quickTo(triangleRef.current, "x", { duration: 0.1, ease: "linear" });
    const yToTriangle = gsap.quickTo(triangleRef.current, "y", { duration: 0.1, ease: "linear" });
    const xToRect = gsap.quickTo(rectangleRef.current, "x", { duration: 0.1, ease: "linear" });
    const yToRect = gsap.quickTo(rectangleRef.current, "y", { duration: 0.1, ease: "linear" });


    const handleMouseMove = (e) => {
        const offsetX = triangleRef.current.offsetWidth / 2; // half width of triangle
        const offsetY = triangleRef.current.offsetHeight; // full height since triangle points downwards
      
        xToTriangle(e.clientX - offsetX);
        yToTriangle(e.clientY - offsetY);
      
        const rectOffsetX = rectangleRef.current.offsetWidth / 2; // half width of rectangle
        const rectOffsetY = rectangleRef.current.offsetHeight; // full height of rectangle with hand icon
    
        xToRect(e.clientX - rectOffsetX);
        yToRect(e.clientY - rectOffsetY);
    };
    
      

    const hoverTarget = document.querySelector('.hover-target');

    hoverTarget.addEventListener('mouseenter', () => {
      triangleRef.current.style.display = 'none';
      rectangleRef.current.style.display = 'block';
    });

    hoverTarget.addEventListener('mouseleave', () => {
      triangleRef.current.style.display = 'block';
      rectangleRef.current.style.display = 'none';
    });

    document.addEventListener('mousemove', handleMouseMove);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling Down
        gsap.to(triangleRef.current, { rotation: 180, duration: 0.3 }); // Point down
      } else {
        // Scrolling Up
        gsap.to(triangleRef.current, { rotation: 0, duration: 0.3 }); // Point up
      }
      
      lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={triangleRef}
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
        className="absolute z-20 pointer-events-none flex flex-col items-center justify-center"
      >
        <i className="fa-solid fa-hand-pointer fa-6x text-rose-500 p-0 m-0"></i>
        <h2 className='text-rose-900 font-semibold text-center'>CLICK HERE</h2>
      </div>

    </>
  );
}

export default MouseAnimation;
