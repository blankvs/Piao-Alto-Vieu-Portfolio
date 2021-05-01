import React, { Component } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AboutGrain2 from '../assets/AboutGrain2.png'
import Sergio from '../assets/Sergio.jpg'
import Github from '../assets/Github.png'
import Linkedin from '../assets/Linkedin.png'
import Three from '../assets/Three.png'
import '../css/About.css'

function About() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    let menu

    if (isMenuOpen) {
        menu =
            <div className="fixBox">
                <div className="mobileBox">
                    <p><Link className="LinkWebsitesMob" to="/">HOME</Link></p>
                    <p><Link className="LinkWebsitesMob" to="/About">ABOUT</Link></p>
                    <p><Link className="LinkWebsitesMob" to="/Websites">WEBSITES</Link></p>
                    <p><Link className="LinkWebsitesMob" to="/MUSIC">MUSIC</Link></p>
                    <p><Link className="LinkWebsitesMob" to="/Contact">CONTACT</Link></p>
                </div>
            </div>
    }

    return (
        <div className="Yeah" style={{ backgroundImage: `url(${AboutGrain2})` }} >
            <div className="HeaderWrapper">
                <h1 className="HeaderLogo">PIAO ALTO VIEU</h1>
                <div className="yerr">
                    <img className="ThreeMenu"
                        src={Three}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>
                <ul className="LinkSpread">
                    <li><Link className="LinkWebsites" to="/">HOME</Link></li>
                    <li><Link className="LinkAbout" to="/About">ABOUT</Link></li>
                    <li><Link className="LinkWebsites" to="/Websites">WEBSITES</Link></li>
                    <li><Link className="LinkDesign" to="/MUSIC">MUSIC</Link></li>
                    <li><Link className="LinkContact" to="/Contact">CONTACT</Link></li>
                </ul>
            </div>
            {menu}

            <h2 className="AboutTag">ABOUT</h2>
            <div className="aboutBoxUp">
                <img className="SergioImg" src={Sergio} alt={Sergio}></img>
                <div className="pargraphFlow">
                    <p className="sergioParagraph"> </p>
                </div>
            </div>
            <div className="IconAbout">
                <div className="Icons">
                </div>
                <div className="Icon3">
                    <Link to="/https://github.com/blankvs">
                        <img className="GitIcon2" src={Github}></img>
                    </Link>
                    <Link to="/https://www.linkedin.com/in/sergio-vega-902a151b9/">
                        <img className="LinkedinIcon2" src={Linkedin}></img>
                    </Link>
                </div>
            </div>
            <div className="footer">
                <h1 className="cc">
                    © 2021 PiaoAltoVieu.
                </h1>
            </div>
        </div>


    )
}

export default About;