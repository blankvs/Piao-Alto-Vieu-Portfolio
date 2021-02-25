import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AboutGrain2 from '../assets/AboutGrain2.png'
import Sergio from '../assets/Sergio.jpg'
import Github from '../assets/Github.png'
import Linkedin from '../assets/Linkedin.png'
import '../css/About.css'

function About() {

    return (
        <div className="Yeah" style={{ backgroundImage: `url(${AboutGrain2})` }} >
            <div className="HeaderWrapper">
                <h1 className="HeaderLogo">PIAO ALTO VIEU</h1>
                <ul className="LinkSpread">
                     <li><Link className="LinkWebsites" to="/">HOME</Link></li>
                    <li><Link className="LinkAbout" to="/About">ABOUT</Link></li>
                    <li><Link className="LinkWebsites" to="/Websites">WEBSITES</Link></li>
                    <li><Link className="LinkDesign" to="/Design">DESIGN</Link></li>
                    <li><Link className="LinkContact" to="/Contact">CONTACT</Link></li>
                </ul>
            </div>

            <h2 className="AboutTag">ABOUT</h2>
            <div className="aboutBoxUp">
                <img className="SergioImg" src={Sergio} alt={Sergio}></img>
                <div className="pargraphFlow">
                    <p className="sergioParagraph">18 With the desire and passion at using technology to leave a lasting impact on this world. Fashionista, musical artist, boxer, cruiser, thrill seeker. Nothing like lasting memories.</p>
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
        </div>

    )
}

export default About;