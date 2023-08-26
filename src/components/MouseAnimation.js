// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// function MouseAnimation() {
//   const triangleRef = useRef(null);

//   useEffect(() => {
//     gsap.set(triangleRef.current, { xPercent: -50, yPercent: -180 });

//     const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
//     const mouse = { x: pos.x, y: pos.y };
//     const speed = 0.2;

//     const xSet = gsap.quickSetter(triangleRef.current, "x", "px");
//     const ySet = gsap.quickSetter(triangleRef.current, "y", "px");

//     window.addEventListener("mousemove", (e) => {
//       mouse.x = e.x;
//       mouse.y = e.y + window.scrollY;  // Adjust y position considering scroll
//     });

//     gsap.ticker.add(() => {
//       const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
//       pos.x += (mouse.x - pos.x) * dt;
//       pos.y += (mouse.y - pos.y) * dt;
//       xSet(pos.x);
//       ySet(pos.y);
//     });

//     // Optional: Cleanup event listener on component unmount
//     return () => {
//       window.removeEventListener("mousemove");
//     };
//   }, []);

//   return (
//     <div
//       ref={triangleRef}
//       style={{
//         width: 0,
//         height: 0,
//         borderLeft: '40px solid transparent',
//         borderRight: '40px solid transparent',
//         borderBottom: '80px solid dodgerblue'
//       }}
//       className="absolute z-20 pointer-events-none"
//     ></div>
//   );
// }

// export default MouseAnimation;

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function MouseAnimation() {
  const triangleRef = useRef(null);
  
  const [direction, setDirection] = useState('up'); // 'up' or 'down'
  const [lastY, setLastY] = useState(window.innerHeight / 2); 

  useEffect(() => {
    gsap.set(triangleRef.current, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.2;

    const xSet = gsap.quickSetter(triangleRef.current, "x", "px");
    const ySet = gsap.quickSetter(triangleRef.current, "y", "px");

    window.addEventListener("mousemove", (e) => {
      const newY = e.y + window.scrollY;

      if (newY > lastY) {
        setDirection('down');
      } else if (newY < lastY) {
        setDirection('up');
      }

      setLastY(newY);

      mouse.x = e.x;
      mouse.y = newY;
    });

    gsap.ticker.add(() => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });

    // Optional: Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove");
    };
  }, [lastY]);

  return (
    <div
      ref={triangleRef}
      style={{
        width: 0,
        height: 0,
        borderLeft: direction === 'up' ? '40px solid transparent' : 'none',
        borderRight: direction === 'up' ? '40px solid transparent' : 'none',
        borderTop: direction === 'down' ? '40px solid transparent' : 'none',
        borderBottom: direction === 'up' ? '80px solid dodgerblue' : 'none',
        borderLeft: direction === 'down' ? '80px solid dodgerblue' : 'none',
      }}
      className="absolute z-20 pointer-events-none"
    ></div>
  );
}

export default MouseAnimation;
