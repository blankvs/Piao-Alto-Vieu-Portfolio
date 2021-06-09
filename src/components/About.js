import React, { Component } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import AboutGrain2 from "../assets/AboutGrain2.png"
import Sergio from "../assets/Sergio.jpg"
import Github from "../assets/Github.png"
import Linkedin from "../assets/Linkedin.png"
import Three from "../assets/Three.png"
import "../css/About.css"
import FAMILY from "../assets/FAMILY.jpg"
import { Helmet } from "react-helmet"
import SVResume from "../assets/SVResume.pdf"

function About() {
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
      className="background-wallpaper-about"
      style={{ backgroundImage: `url(${AboutGrain2})` }}
    >
      <Helmet>
        <title>PiaoAltoVieu - About.</title>
        <meta name="About" content="About, Sergio Vega" />
      </Helmet>
      <div className="HeaderWrapper">
        <h1 className="HeaderLogo">PIAO ALTO VIEU</h1>
        <div className="yerr">
          <img
          loading="lazy"
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
      {menu}

      <h2 className="about-header">ABOUT</h2>
      <div className="about-formatter">
        <img className="family-image" loading="lazy" src={FAMILY} alt={FAMILY}></img>
        <div className="about__formatter">
          <p className="bio-paragraph">
            {" "}
            MY NAME IS SERGIO GARCIA AND I AM 19 YEARS OF AGE. I WAS RAISED
            BY MY TWO LOVELY PARENTS AND AM THE ELDEST OF 3. WHEN IT COMES TO
            LIFE, I PLAN TO GET TO WHERE I WANNA BE, AND WILL DO SO. I ENJOY
            MOVING FORWARD, ADVENTURE, CREATING, COMPETING, LAUGHING AND MUCH
            MORE.
          </p>
          <a className="about__resumeLink" href={SVResume} download>
            RESUME
          </a>
        </div>
      </div>
      <div className="icons-about">
        <div className="icon-formatter">
          <a href="https://github.com/blankvs">
            <img className="GitIcon" loading="lazy" src={Github}></img>
          </a>
          <a href="https://www.linkedin.com/in/sergio-vega-902a151b9/">
            <img className="LinkedinIcon" loading="lazy" src={Linkedin}></img>
          </a>
        </div>
      </div>
      <div className="footer">
        <h1 className="cc">© 2021 PiaoAltoVieu.</h1>
      </div>
    </div>
  )
}

export default About
