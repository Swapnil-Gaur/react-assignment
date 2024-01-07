import React from "react";
import "./Footer.css"
import { FaFacebookF} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaApple } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="F1">
        <div className="F2">
          <div className="F21">
            <h1>Stay Updated With Us</h1>
            <p>Subscribe the blogs, to know about photography</p>
          </div>
          <div className="F22">
            <div className="F23">
              <label>Email</label>
              <input type="email" />
            </div>
            <div className="F24">Notify Me</div>
          </div>
        </div>
        <div className="F4">
          <div className="F41">
            <div className="F42">
              <FaCameraRetro className="NBLogo" />
              <h1>POD</h1>
            </div>
            <div className="F43">
              This HTML structure contains three paragraphs of Lorem Ipsum text.
              You can add more paragraphs by duplicating the section as needed.
              This placeholder text is commonly used in design and publishing to
              mimic the look of written text without focusing on the actual
              content.
            </div>
            <div className="F44">
              <h4>Office Location</h4>
              <p>7365 Cherry Hill Court Kingston, NY 12401</p>
            </div>
          </div>
          <div className="F45">
            <div className="F46">
              <h3>Menu</h3>
              <div className="F47">
                <p>Features</p>
                <p>Gallery</p>
                <p>Available&nbsp;Cities</p>
                <p>Join&nbsp;PODIANs</p>
              </div>
            </div>
            <div className="F6">
              <h3>Company</h3>
              <div className="F7">
                <p>About</p>
                <p>Contact us</p>
                <p>FAQ's</p>
                <p>Legal</p>
              </div>
            </div>
            <div className="F6">
              <h3>Follow on</h3>
              <div className="F61">
                <div className="F612"><FaFacebookF className="icon"/></div>
                <div className="F612"><FaTwitter className="icon"/></div>
                <div className="F612"><RiInstagramFill className="icon"/></div>
                <div className="F612"><FaLinkedin className="icon"/></div>
                <div className="F612"><FaYoutube className="icon"/></div>
              </div>
              <h3>Download&nbsp;on</h3>
              <div className="DO1">
                <div className="DO2">
                  <BiLogoPlayStore className="Iconstore"/>
                  <div className="DO3">
                    <p>GET IT ON</p>
                    <h4>Google Play</h4>
                  </div>
                </div>
                <div className="DO2">
                  <FaApple className="Iconstore"/>
                  <div className="DO3">
                    <p>Download on the</p>
                    <h4>App Store</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="F9">Copyright &copy;2023 by Podian Pvt Ltd.</div>
      </div>
    </>
  );
}
