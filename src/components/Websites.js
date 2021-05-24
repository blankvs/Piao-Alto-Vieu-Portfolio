import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sky from "../assets/Sky.png";
import WebPhotoSlider from "./WebPhotoSlider";
import WebPhotoSlider2 from "./WebPhotoSlider2";
import WebPhotoSlider3 from "./WebPhotoSlider3";
import NNLand from "../assets/NNLand.png";
import Three from "../assets/Three.png";
import WebSlotDisney from "./WebSlotDisney";
import WEBWRAP from "../assets/WEBWRAP.png";
import Disney1 from "../assets/Disney1.png";
import "../css/Website.css";

function Websites() {
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
            <Link className="LinkWebsitesMob" to="/MUSIC">
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
      <div className="Yeah2" style={{ backgroundImage: `url(${WEBWRAP})` }}>
        <div className="HeaderWrapper">
          <h1 className="HeaderLogo">PIAO ALTO VIEU</h1>
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
              <Link className="LinkAbout" to="ABOUT">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="LinkWebsites" to="/WEBSITES">
                WEBSITES
              </Link>
            </li>
            <li>
              <Link className="LinkDesign" to="/MUSIC">
                MUSIC
              </Link>
            </li>
            <li>
              <Link className="LinkContact" to="/CONTACT">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        {menu}

        <h1 className="WebH1">WEBSITES</h1>
        {/*
                <div className="WebDes">
                    <WebPhotoSlider />
                    <div className="paragraphBox">
                        <h2 className="WebTit1">NOTE NETT</h2>
                        <p className="NOTENETTDescription">With NOTE NETT, I Formulated a Note/Todo App, applying full CRUD in where you can check off, edit, delete & pin notes. I utilized bcrypt for Authentication and a secure user experience (UX/UI) and implemented a 3rd party technology, Firebase as a real time customizable user storage/database.</p>
                    </div>
                </div>

                <div className="webDes-2">
                    <WebPhotoSlider3 />
                    <div className="paragraphBox2">
                        <h2 className="WebTit1">VIDVIEU<a className="link" href=""></a></h2>
                        <p className="NOTENETTDescription">With VIDVIEU, I Formulated a video viewing platform, making use of a 3rd party technology/ API. </p>
                    </div>
                </div>
                
                <div className="webDes-2">
                    <WebPhotoSlider2 />
                    <div className="paragraphBox2">
                        <h2 className="WebTit1">EKANS<a className="link" href="https://pavekans.com">https://pavekans.com</a></h2>
                        <p className="NOTENETTDescription">Ekans, a vanilla javascript, fully functional version of "Snake Game"</p>
                    </div>
                </div> */}
        <div className="websites__fit">
          <WebSlotDisney
            title="DISNEY PLUS"
            techUsed="REACT || REDUX || FIREBASE || API'S || AUTHENTICATION || DATABASE || STYLED COMPONENTS"
            description="The recreation of Disney Plus, A popular Television Streaming Site/App. Recreated in an attempt at better understanding Firebase & Redux and a mission accomplished. A fully functional Authentication using Firebase and It's Google Sign In method."
            gitLink="https://github.com/blankvs/disney-plus-clone"
            a="https://github.com/blankvs/disney-plus-clone"
            gitLink="https://github.com/blankvs/disney-plus-clone"
            b="https://www.pavdisneyplus.com/"
            webLink="https://www.pavdisneyplus.com/"
          />
        </div>
      </div>

      <div className="footer">
        <h1 className="cc">© 2021 PiaoAltoVieu.</h1>
      </div>
    </div>
  );
}

export default Websites;
