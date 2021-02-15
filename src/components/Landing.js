import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import Github from '../assets/Github.png'
import Linkedin from '../assets/Linkedin.png'
import Dunes from '../assets/Dunes.jpg'
import '../css/Landing.css'


function Landing() {


    
        return (
            <div className="Yeah" style={{ backgroundImage: `url(${Dunes})`}}>
                {/* <img className="LandingImageDunes" src={ Dunes }> */}
                <div className="HeaderWrapper">
                    <h1 className="HeaderLogo">PIAO ALTO VIEU</h1>
                    <ul className="LinkSpread">
                        <li><Link className="LinkAbout" to="/About">ABOUT</Link></li>
                        <li><Link className="LinkWebsites" to="/Websites">WEBSITES</Link></li>
                        <li><Link className="LinkDesign" to="/Design">DESIGN</Link></li>
                        <li><Link className="LinkContact" to="/Contact">CONTACT</Link></li>
                    </ul>
                </div>
                <div className="LandingWrapper">
                    <div className="LandingUpperBox">
                        <h1 className="LandingH1Name">SERGIO VEGA</h1>
                        <h1 className="LandingH1Description">FULL STACK WEB DEVELOPER</h1>
                    </div>
                    {/*  */}
                    <div className="LandingLowerBox"></div>
                </div>
                {/* // </img> */}
            </div>
        )
    
}

export default Landing;