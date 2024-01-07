import React from "react";
import "./AutoSlider.css";
import { useState } from "react";
import { FaArrowRight, FaLeftLong } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export default function AutoSlider() {
  const [cardIndex, setCardIndex] = useState(0);

  const moveCards = (direction) => {
    const maxIndex = 4; // Number of cards - 1

    if (direction === "right" && cardIndex < maxIndex) {
      setCardIndex(cardIndex + 1);
    } else if (direction === "left" && cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };
  return (
    <>
      <div className="ASs">
        <div className="ASs1">
          <div className="ASs2">
            <h1>12</h1>
            <div className="ASs3">
              <p>NO. of</p>
              <p>Shoot Hours</p>
            </div>
          </div>
          <div className="ASs2">
            <h1>12K+</h1>
            <div className="ASs3">
              <p>NO. of</p>
              <p>Bookings</p>
            </div>
          </div>
          <div className="ASs2">
            <h1>5M</h1>
            <div className="ASs3">
              <p>NO. of</p>
              <p>PODIANS</p>
            </div>
          </div>
          <div className="ASs2">
            <h1>10M</h1>
            <div className="ASs3">
              <p>NO. of</p>
              <p>User</p>
            </div>
          </div>
        </div>
        <div className="ASs4">
          <div className="ASs5">
            <div className="ASs6">
              <h1>Explore More</h1>
              <h1>Announcement</h1>
            </div>
            <div className="ASs7">
              <button onClick={() => moveCards("left")} className="Btn"><FaArrowRight/></button>
              <button onClick={() => moveCards("right")} className="Btn1"><FaArrowLeft/></button>
            </div>
          </div>
          <div className="cards">
            <div
              className="card"
              style={{ transform: `translateX(${-cardIndex * 250}px)` }}
            >
              <div className="ASscard">
                <img src="https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg" alt="#" className="Image"/>
                <h1>Hello Good Morning</h1>
              </div>
              <div className="ASscard">
                <img src="https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_640.jpg" alt="#" className="Image"/>
                <h1>Hello Good Morning</h1>
              </div>
              <div className="ASscard">
                <img src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg" alt="#" className="Image"/>
                <h1>Hello Good Morning</h1>
              </div>
              <div className="ASscard">
                <img src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg" alt="#" className="Image"/>
                <h1>Hello Good Morning</h1>
              </div>
              <div className="ASscard">
                <img src="https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_640.jpg" alt="#" className="Image"/>
                <h1>Hello Good Morning</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
