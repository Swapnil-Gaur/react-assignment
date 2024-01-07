import React from "react";
import { FcOldTimeCamera } from "react-icons/fc";
import "./HomeContent.css";

export default function HomeContent() {
  return (
    <div className="page-container">
      <p className="text">Book photoshoot in just few Seconds <span>Book Now</span></p>
      <div className="video-container">
        <div className="content">
          <div className="text-over-video">
            <h1>PIXELS THAT INSPIRE</h1>
            <p>POD - India's first personal</p>
            <p>photographer booking platform.</p>
            <p>#kahibhikabhibhi <FcOldTimeCamera /></p>
          </div>
        </div>
        <div className="video-background">
          <video autoPlay loop muted className="fullscreen-video">
            <source src="video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
