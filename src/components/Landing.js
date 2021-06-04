import React, { Component } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Github from "../assets/Github.png";
import Linkedin from "../assets/Linkedin.png";
import Dunes from "../assets/Dunes.jpg";
import Grain from "../assets/Grain.png";
import Landing2 from "../assets/Landing2.png";
import Skills from "../assets/Skills.png";
import Three from "../assets/Three.png";
import UPDATE from "../assets/UPDATE.png";
import { Helmet } from "react-helmet";
import SVResume from "../assets/SVResume.pdf";
// import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";
import Resume from "./Resume";
import DateAndTime from "./DateAndTime";

import "../css/Landing.css";

function Landing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let menu;

  if (isMenuOpen) {
    menu = (
      <div className="fixBox">
        <div className="mobileBox">
          <p>
            <Link className="LinkWebsitesMob" to="/">
              HOME
            </Link>
          </p>
          <p>
            <Link className="LinkWebsitesMob" to="/About">
              ABOUT
            </Link>
          </p>
          <p>
            <Link className="LinkWebsitesMob" to="/Websites">
              WEBSITES
            </Link>
          </p>
          <p>
            <Link className="LinkWebsitesMob" to="/Music">
              MUSIC
            </Link>
          </p>
          <p>
            <Link className="LinkWebsitesMob" to="/Contact">
              CONTACT
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>PiaoAltoVieu - Home.</title>
        <meta name="Home" content="Home Page" />
      </Helmet>
      <div className="Yeah" style={{ backgroundImage: `url(${UPDATE})` }}>
        <div className="HeaderWrapper">
          <h1 className="HeaderLogo">PIAO ALTO VIEU</h1>
          <div className="move">
            <div className="yerr">
              <img
                className="ThreeMenu"
                src={Three}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
            <ul className="LinkSpread">
              <li>
                <Link className="LinkWebsites" to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="LinkAbout" to="/About">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link className="LinkWebsites" to="/Websites">
                  WEBSITES
                </Link>
              </li>
              <li>
                <Link className="LinkDesign" to="/Music">
                  MUSIC
                </Link>
              </li>
              <li>
                <Link className="LinkContact" to="/Contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {menu}
        <div className="landing__center">
          <div className="stepTwo">
            <div className="LandingWrapper">
              <div>
                <DateAndTime />
              </div>
              <div>
                <h1 className="LandingH1Name">SERGIO GARCIA</h1>
                <h1 className="LandingH1Description">
                  FRONT END WEB DEVELOPER || DESIGNER
                </h1>
              </div>
            </div>
            <div className="IconWrapper">
              <div className="Icons"></div>
              <div className="Icon2">
                <div>
                  <a href="https://github.com/blankvs">
                    <img className="GitIcon" src={Github}></img>
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/sergio-vega-902a151b9/">
                    <img className="LinkedinIcon" src={Linkedin}></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="LeftLineLanding">
              <img className="Skills" src={Skills}></img>
              <div className="landing__wrapper">
                <a className="landing__resumeLink" href={SVResume} download>
                  RESUME
                </a>

                <Link to="/WEBSITES">
                  <button className="landing__youtubeLink">WEBSITES</button>
                </Link>
              </div>
            </div>
          </div>

          <div className="footer">
            <h1 className="cc">© 2021 PiaoAltoVieu.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
