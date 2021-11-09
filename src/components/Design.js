import React, { Component } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import DESIFOR from "../assets/DESIFOR.png"
import Three from "../assets/Three.png"
import "../css/Design.css"
import TDWTSUT from "../assets/TDWTSUT.png"
import SHORTTSWEETT from "../assets/SHORTTSWEETT.png"
import SPOT from "../assets/SPOT.png"
import LT from "../assets/LT.jpg"
import AM from "../assets/AM.png"
import SC from "../assets/SC.png"
import FL from "../assets/FL.jpg"
import MM from "../assets/MM.jpg"
import WW from "../assets/WW.jpg"
import IS from "../assets/IS.png"
import FFF from "../assets/FFF.png"
import TTT from "../assets/TTT.png"
import TTS from "../assets/TTS.JPG"
import UTUT from "../assets/UTUT.PNG"
import IMG from "../assets/IMG.jpg"










import { Helmet } from "react-helmet"

function Design() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  let menu

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
    )
  }

  return (
    <div
      loading="lazy"
      className="background-wallpaper-music"
      style={{ backgroundImage: `url(${DESIFOR})` }}
    >
      <Helmet>
        <title>PiaoAltoVieu - Music.</title>
        <meta name="Music" content="Sergio's Music" />
      </Helmet>
      <div>
        <div className="HeaderWrapper">
          <h1 className="HeaderLogo">PIAO ALTO VIEU</h1>
          <div className="yerr">
            <img
              className="ThreeMenu"
              loading="lazy"
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
      {/* <div className="logo-title-div-formatter"> */}

      <h1 className="designH1">MUSIC</h1>
      {/* <div className="holder"></div> */}
      {/* </div> */}
      {/* <p className="music-instructions">CLICK TO LISTEN ON SPOTIFY</p> */}
      <div className="spot-center">
        <div className="spot-organizer">
          <img className="spot-logo" loading="lazy" src={SPOT}></img>
          <img className="spot-logo" loading="lazy" src={AM}></img>
          <img className="spot-logo" loading="lazy" src={SC}></img>
        </div>
      </div>
      <div className="cover-formatter">
        <div className="tdwtsut-div">
          <img className="tdwtsut-cover" loading="lazy" src={MM}></img>
          <h1 className="tdwtsut-title">"LET ME BE THE SUN TO YOUR MOONSHINE"</h1>
        </div>
        <div className="tdwtsut-div">
          <img className="tdwtsut-cover" loading="lazy" src={FL} />
          <h1 className="tdwtsut-title">
            "SOUL REAPER"
          </h1>
        </div>
        <div className="ss-div">
          <img className="ss-cover" loading="lazy" src={WW} />
          <h1 className="ss-title">"SHE CAME HOME WITH"</h1>
        </div>
      </div>
      <div className="cover-formatter">
        <div className="tdwtsut-div">
          <img className="tdwtsut-cover" loading="lazy" src={LT}></img>
          <h1 className="tdwtsut-title">(ALBUM) "LAS TUYAS"</h1>
        </div>
        <div className="tdwtsut-div">
          <img className="tdwtsut-cover" loading="lazy" src={TDWTSUT} />
          <h1 className="tdwtsut-title">
            "THEY DON'T WANT TO SEE US TOGETHER"
          </h1>
        </div>
        <div className="ss-div">
          <img className="ss-cover" loading="lazy" src={SHORTTSWEETT} />
          <h1 className="ss-title">"SHORTT SWEETT"</h1>
        </div>
      </div>
      <div className="cover-formatter">
        <div className="tdwtsut-div">
          <img className="tdwtsut-cover" loading="lazy" src={IS}></img>
          <h1 className="tdwtsut-title">"I SHOULD LEAVE"</h1>
        </div>
        <div className="tdwtsut-div">
          <img className="tdwtsut-cover" loading="lazy" src={FFF} />
          <h1 className="tdwtsut-title">
            "FIT"
          </h1>
        </div>
        <div className="ss-div">
          <img className="ss-cover" loading="lazy" src={TTT} />
          <h1 className="ss-title">"TEENAGE TAPES"</h1>
        </div>
      </div>
      <div className="cover-formatter">
        <div className="tdwtsut-div">
          <img className="tdwtsut-cover" loading="lazy" src={TTS}></img>
          <h1 className="tdwtsut-title">"THIS THE HOW I SAW IN MY DREAMS"</h1>
        </div>
        <div className="tdwtsut-div">
          <img className="tdwtsut-cover" loading="lazy" src={UTUT} />
          <h1 className="tdwtsut-title">
            "UNFAIR THERAPY"
          </h1>
        </div>
        <div className="ss-div">
          <img className="ss-cover" loading="lazy" src={IMG} />
          <h1 className="ss-title">"TIME KILLS ALL"</h1>
        </div>
      </div>
      <div className="footer">
        <h1 className="cc">© 2021 PiaoAltoVieu.</h1>
      </div>
    </div>

  )
}

export default Design
