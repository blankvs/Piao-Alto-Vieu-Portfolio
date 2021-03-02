import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import WATER from '../assets/WATER.png'
import '../css/Contact.css'

function Contact() {


    return (
        <div className="Yeah" style={{ backgroundImage: `url(${WATER})` }} >

            <div>
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
            </div>
            <h1 className="contactH1">CONTACT</h1>
            <h1 className="emailH1">SERGIOVEGAP12@GMAIL.COM</h1>
            
        </div>
    )
}

export default Contact;