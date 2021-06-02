import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import WebSlot from "./WebSlot";

// IMAGES
import BD4 from "../assets/BD4.png";
import Three from "../assets/Three.png";

// HELMET
import { Helmet } from "react-helmet";

// SLIDERS
import WebSlotDisneySlider from "./WebSlotDisneySlider";
import WebSlotAmazonSlider from "./WebSlotAmazonSlider";
import WebSlotGoogleMapsSlider from "./WebSlotGoogleMaps";
import WebSlotNoteSlider from "./WebSlotNoteSlider";
import WebSlotVidVieuSlider from './WebSlotVidVieuSlider'

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
      <Helmet>
        <title>PiaoAltoVieu - Web.</title>
        <meta name="Home" content="Home" />
      </Helmet>
      <div className="Yeah2" style={{ backgroundImage: `url(${BD4})` }}>
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
        <div className="websites__fit">
          <WebSlot
            title="DISNEY PLUS"
            techUsed="REACT || REDUX || FIREBASE || API'S || AUTHENTICATION || DATABASE || STYLED COMPONENTS"
            description="The recreation of the popular streaming service, Disney Plus. With a fully functional Firebase database allowing for excellently smooth state management & an uncluttered Google Firebase user sign in Authentication. Redux, to allow for the ease of user’s data information passing. All this with the complete use of industry standard competitor, Styled-Components, styled head to toe to perfection. "
            gitLink="https://github.com/blankvs/disney-plus-clone"
            a="https://github.com/blankvs/disney-plus-clone"
            webLink="https://www.pavdisneyplus.com/"
            b="https://www.pavdisneyplus.com/"
            view={<WebSlotDisneySlider />}
          />

          <WebSlot
            title="AMAZON"
            techUsed="REACT || FIREBASE || AUTHENTICATION || DATABASE || NPM PACKAGES|| STYLED COMPONENTS"
            description="The recreation of more than popular Amazon. With a fully functional, easy to use Firebase database, used to store products and user information. A fully functional user Firebase Authentication. Beautiful use of existing npm packages and an overall clean application thanks to the complete use of Styled-Components."
            gitLink="https://github.com/blankvs/pav-amazon"
            a="https://github.com/blankvs/pav-amazon"
            webLink=""
            b=""
            view={<WebSlotAmazonSlider />}
          />

          <WebSlot
            title="NOTE NETT"
            techUsed="REACT || REDUX || SQL || AXIOS || EXPRESS || NODE || BCRYPT || DOTENV || REACT ROUTER DOM || MASSIVE || SASS"
            description="Fantastic formulation of a note / todo app, Note Nett. Made with only essential node packages, a fully functional backend authentication utilizing SQL and state being managed completely by Redux. Note Nett, allowing for notes to be added, completed and deleted, equaling out to a Full CRUD structure. All this with the beautiful, simplistic layout, utilizing the use of myself and SASS."
            gitLink="https://github.com/blankvs/pav-note-nett"
            a="https://github.com/blankvs/pav-note-nett"
            webLink="null"
            b=""
            view={<WebSlotNoteSlider />}
          />

          <WebSlot
            title="GOOGLE MAPS"
            techUsed="HTML5 || JAVASCRIPT || CSS || MAPBOX API"
            description="A dive into the popular MapBox Api. Completed with only HTML, JS & CSS technologies. Including Navigation controls & a very much neat Directions plug-in, all a part of the MapBox Api under Mapbox GL JS documentation. Overall a very neat project with incredibly neat new possibilities."
            gitLink="https://github.com/blankvs/google-maps"
            a="https://github.com/blankvs/google-maps"
            webLink=""
            b=""
            view={<WebSlotGoogleMapsSlider />}
          />

          <WebSlot
            title="VID VIEU"
            techUsed="REACT || REDUX || SQL || AXIOS || EXPRESS || NODE || BCRYPT || DOTENV || REACT ROUTER DOM || MASSIVE || REACT-PLAYER API || SASS"
            description="A dive into the popular MapBox Api. Completed with only HTML, JS & CSS technologies. Including Navigation controls & a very much neat Directions plug-in, all a part of the MapBox Api under Mapbox GL JS documentation. Overall a very neat project with incredibly neat new possibilities."
            gitLink="https://github.com/blankvs/pav-vid-vieu"
            a="https://github.com/blankvs/pav-vid-vieu"
            webLink=""
            b=""
            view={<WebSlotVidVieuSlider />}
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
