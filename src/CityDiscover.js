import React, { useRef, useState } from "react";
import "./CityDiscover.css";
import AutoScroller from "./AutoScroller";
const CityDiscover = () => {
  const containerRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    containerRef.current.classList.add("grabbing");
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    containerRef.current.classList.remove("grabbing");
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    containerRef.current.classList.remove("grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scrolling speed here
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="CD1">
      <div className="CD2">
        <h1>We're Popping Up Everywhere!</h1>
        <p>Your City, Your Moments- Discover Where POD's Lens Is Focused!</p>
      </div>
      <div
        ref={containerRef}
        className="city-container"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <div className="city-cards">
          <div className="city-card">
            <img
              src="https://cdn.pixabay.com/photo/2016/09/11/00/33/festival-1660475_640.jpg"
              className="CCi" alt="surat"
            />
            <div className="CCi1">
              <h3>Kolkata</h3>
              <p>City of Joy</p>
            </div>
          </div>
          <div className="city-card">
            <img
              src="https://cdn.pixabay.com/photo/2020/01/21/08/11/indian-temple-4782312_1280.jpg"
              className="CCi" alt="surat"
            />
            <div className="CCi1">
              <h3>Vrindavan</h3>
              <p>City of Love</p>
            </div>
          </div>
          <div className="city-card">
            <img
              src="https://cdn.pixabay.com/photo/2022/07/13/15/24/varanasi-7319470_1280.jpg"
              className="CCi" alt="surat"
            />
            <div className="CCi1">
              <h3>Banaras</h3>
              <p>City of Faith and Color</p>
            </div>
          </div>
          <div className="city-card">
            <img
              src="https://cdn.pixabay.com/photo/2017/03/19/08/01/qutub-minar-2155776_640.jpg"
              className="CCi" alt="surat"
            />
            <div className="CCi1">
              <h3>Delhi</h3>
              <p>City of Diversity</p>
            </div>
          </div>
          <div className="city-card">
            <img
              src="https://cdn.pixabay.com/photo/2018/05/13/11/32/dal-3396109_640.jpg"
              className="CCi" alt="surat"
            />
            <div className="CCi1">
              <h3>Sri Nagar</h3>
              <p>City of Pashmina</p>
            </div>
          </div>
          <div className="city-card">
            <img
              src="https://cdn.pixabay.com/photo/2022/09/06/12/32/chiffon-sarees-wholesale-7436540_640.jpg"
              className="CCi" alt="surat"
            />
            <div className="CCi1">
              <h3>Surat</h3>
              <p>City of Saree</p>
            </div>
          </div>
          <div className="city-card">
            <img
              src="https://cdn.pixabay.com/photo/2022/10/13/16/29/dwarka-7519479_640.jpg"
              className="CCi" alt="surat"
            />
            <div className="CCi1">
              <h3>Dwarka</h3>
              <p>City of sovereign</p>
            </div>
          </div>
        </div>
      </div>
      <AutoScroller/>
    </div>
  );
};

export default CityDiscover;
