import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaCameraRetro } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useGlobalContext } from "./Context";
function Navbar() {
  const { toggle, isToggled } = useGlobalContext();
  return (
    <>
      <div className="NB1">
        <div>
        <Link
            to="/"
            style={{
              textDecoration: "none",
              fontSize: "0.5rem",
              color: "black",
            }}
          ><FaCameraRetro className="NBLogo" />
          </Link>
        </div>
        <div className="NBItems">
        <Link
            to="/autoslider"
            style={{
              textDecoration: "none",
              fontSize: "0.5rem",
              color: "black",
            }}
          >
          <h1 className="NBh1">
            <span>Features </span>
            <IoIosArrowDown />
          </h1></Link>
          <Link
            to="/discover"
            style={{
              textDecoration: "none",
              fontSize: "0.5rem",
              color: "black",
            }}
          >
            <h1>Discover</h1>
          </Link>
          <h1>About us</h1>
          <Link
            to="/marque"
            style={{
              textDecoration: "none",
              fontSize: "0.5rem",
              color: "black",
            }}
          >
            <h1>Blogs</h1>
          </Link>
          <h1>Contact Us</h1>
        </div>
        <div className="NBDownload">Download App</div>
        <div className="ToggleState" onClick={toggle}>
          <AiOutlineMenuFold className="MenuIcon" />
        </div>
        {isToggled && <MobileMenu />}
      </div>
    </>
  );
}

function MobileMenu() {
  const { toggle } = useGlobalContext();
  return (
    <>
      <div className="MM">
        <div className="MM1">
          <Link
            to="/autoslider"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <h1 className="MMh1">Features</h1>
          </Link>
          <Link
            to="/discover"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <h1>Discover</h1>
          </Link>
          <h1>About us</h1>
          <Link
            to="/marque"
            style={{
              textDecoration: "none",
              color:'white'
            }}
          >
            <h1>Blogs</h1>
          </Link>
          <h1>Contact Us</h1>
        </div>
        <RxCross2 className="MM2" onClick={toggle} />
      </div>
    </>
  );
}
export { Navbar, MobileMenu };
