import React from "react";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeContent from "./HomeContent";
import "./Home.css";
import MarqueAnimation from "./Marqued";
import Footer from "./Footer";
import CityDiscover from "./CityDiscover";
import AutoSlider from "./AutoSlider";

export default function Home() {
  const location = useLocation();
  const [path, setPath] = useState("");
  useEffect(() => {
    setPath(location?.pathname);
  }, [location]);
  return (
    <>
      <div className="Home">
        <Navbar />
        {path === "/" ? (
          <HomeContent />
        ) : path === "/marque" ? (
          <MarqueAnimation />
        ) : (
          path === "/discover" ? (
            <CityDiscover/>
          ): path === "/autoslider" ?(
            <AutoSlider/> 
          ) :""
        )}
        <Footer/>
      </div>
    </>
  );
}
