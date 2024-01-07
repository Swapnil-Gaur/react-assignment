import React, { useRef, useEffect } from 'react';
import "./AutoScroller.css"
import { FaAppleAlt } from "react-icons/fa";
import { GiMonkey } from "react-icons/gi";
import { GiLion } from "react-icons/gi";
import { SiLionair } from "react-icons/si";
import { FaWolfPackBattalion } from "react-icons/fa6";
const AutoScroller = () => {
  const containerRef = useRef(null);
  const scrollSpeed = 1;
  const cardWidth = 220;

  useEffect(() => {
    const scrollContainer = containerRef.current;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth - cardWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='AS1'>
      <div className='AS2'>
          <h1>POD's Star-Studded Ensemble</h1>
          <p>When Brands and POD Get Together, Magic Unfolds!</p>
      </div>
      <div ref={containerRef} className="AS3">
      <div className="custom-cards">
        <div className="custom-card card1">
              <GiMonkey/>Theon
        </div>
        <div className="custom-card card2">
            <GiLion/>Leo
        </div>
        <div className="custom-card card3">
            <FaAppleAlt/>pple
        </div>
        <div className="custom-card card4">
            <FaWolfPackBattalion/>eaven
        </div>
        <div className="custom-card card5">
            <SiLionair/>ing
        </div>
      </div>
    </div>
    </div>
  );
};

export default AutoScroller;
