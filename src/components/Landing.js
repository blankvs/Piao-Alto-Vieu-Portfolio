import React, { Component } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Github from '../assets/Github.png'
import Linkedin from '../assets/Linkedin.png'
import Dunes from '../assets/Dunes.jpg'
import Grain from '../assets/Grain.png'
import Landing2 from '../assets/Landing2.png'
import Skills from '../assets/Skills.png'
import Three from '../assets/Three.png'
import '../css/Landing.css'


function Landing() {

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
        <div>
            <div className="Yeah" style={{ backgroundImage: `url(${Landing2})` }} >
                <div className="HeaderWrapper">
                    <h1 className="HeaderLogo">PIAO ALTO VIEU</h1>
                    <div className="move">
                        <div className="yerr">
                            <img className="ThreeMenu"
                                src={Three}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            />
                        </div>
                        <ul className="LinkSpread">
                            <li><Link className="LinkWebsites" to="/">HOME</Link></li>
                            <li><Link className="LinkAbout" to="/ABOUT">ABOUT</Link></li>
                            <li><Link className="LinkWebsites" to="/WEBSITES">WEBSITES</Link></li>
                            <li><Link className="LinkDesign" to="/MUSIC">MUSIC</Link></li>
                            <li><Link className="LinkContact" to="/CONTACT">CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
                {menu}
                <div id="stepTwo">
                    <div className="LandingWrapper">
                        <div className="LandingUpperBox">
                            <h1 className="LandingH1Name">SERGIO VEGA</h1>
                            <h1 className="LandingH1Description">FULL STACK WEB DEVELOPER || DIGITAL MEDIA SPECIALIST</h1>
                        </div>

                        <div className="LandingLowerBox"></div>
                    </div>
                    <div className="IconWrapper">
                        <div className="Icons">
                        </div>
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
                    </div>
                </div>

                <div className="footer">
                    <h1 className="cc">
                        © 2021 PiaoAltoVieu.
                </h1>
                </div>
            </div>
        </div>
    )

}

export default Landing;