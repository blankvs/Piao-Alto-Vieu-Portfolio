import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import DESIFOR from '../assets/DESIFOR.png'
import Three from '../assets/Three.png'
import '../css/Design.css'

function Design() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

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
        <div className="Yeah" style={{ backgroundImage: `url(${DESIFOR})` }} >

            <div>
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
                        <li><Link className="LinkDesign" to="/Design">DESIGN</Link></li>
                        <li><Link className="LinkContact" to="/Contact">CONTACT</Link></li>
                    </ul>
                </div>
            </div>
            {menu}
            <h1 className="designH1">DESIGN</h1>

            <div className="footer">
                <h1 className="cc">
                    © 2021 PiaoAltoVieu.
                </h1>
            </div>

        </div>
    )
}

export default Design;