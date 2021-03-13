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

    // function toggleMenu() {
    //     setIsMenuOpen(!isMenuOpen)
    // }

    let menu

    if (isMenuOpen) {
        menu =
            <div className="fixBox">
                <div className="mobileBox">
                    <p><Link className="LinkWebsitesMob" to="/">HOME</Link></p>
                    <p><Link className="LinkWebsitesMob" to="/About">ABOUT</Link></p>
                    <p><Link className="LinkWebsitesMob" to="/Websites">WEBSITES</Link></p>
                    <p><Link className="LinkWebsitesMob" to="/Design">DESIGN</Link></p>
                    <p><Link className="LinkWebsitesMob" to="/Contact">CONTACT</Link></p>
                </div>
            </div>
    }

    return (
        <div>
            {menu}
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
                            <li><Link className="LinkAbout" to="/About">ABOUT</Link></li>
                            <li><Link className="LinkWebsites" to="/Websites">WEBSITES</Link></li>
                            <li><Link className="LinkDesign" to="/Design">DESIGN</Link></li>
                            <li><Link className="LinkContact" to="/Contact">CONTACT</Link></li>
                        </ul>
                    </div>

                </div>

                {/* <div className={`mobileNav ${isMenuOpen ? null : "mobileNavHide"}`}>
                    <div className="mobileBox">
                        <p><Link className="LinkWebsitesMob" to="/">HOME</Link></p>
                        <p><Link className="LinkAboutMob" to="/About">ABOUT</Link></p>
                        <p><Link className="LinkWebsitesMob" to="/Websites">WEBSITES</Link></p>
                        <p><Link className="LinkDesignMob" to="/Design">DESIGN</Link></p>
                        <p><Link className="LinkContactMob" to="/Contact">CONTACT</Link></p>
                    </div>
                </div> */}


                <div className="LandingWrapper">
                    <div className="LandingUpperBox">
                        <h1 className="LandingH1Name">SERGIO VEGA</h1>
                        <h1 className="LandingH1Description">FULL STACK WEB DEVELOPER / DIGITAL MEDIA SPECIALIST</h1>
                    </div>
                    {/*  */}
                    <div className="LandingLowerBox"></div>
                </div>
                <div className="IconWrapper">
                    <div className="Icons">
                    </div>
                    <div className="Icon2">
                        <Link to="/https://github.com/blankvs">
                            <img className="GitIcon" src={Github}></img>
                        </Link>
                        <Link to="/https://www.linkedin.com/in/sergio-vega-902a151b9/">
                            <img className="LinkedinIcon" src={Linkedin}></img>
                        </Link>
                    </div>
                </div>
                <div className="LeftLineLanding">
                    <img className="Skills" src={Skills}></img>
                </div>
                <h1 className="cc">
                    © 2021 PiaoAltoVieu.
                </h1>
                {/* // </img> */}
            </div>
        </div>
    )

}

export default Landing;