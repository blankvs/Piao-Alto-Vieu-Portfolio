import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DESIFOR from '../assets/DESIFOR.png'
import '../css/Design.css'

function Design() {


    return (
        <div className="Yeah" style={{ backgroundImage: `url(${DESIFOR})` }} >

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
            <h1 className="designH1">DESIGN</h1>
            
        </div>
    )
}

export default Design;