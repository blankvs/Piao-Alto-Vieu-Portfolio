import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Sky from '../assets/Sky.png'
import WebPhotoSlider from './WebPhotoSlider'
import NNLand from '../assets/NNLand.png'
import Three from '../assets/Three.png'
import '../css/Website.css'



function Websites() {

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
        <div>
            <div className="Yeah2" style={{ backgroundImage: `url(${Sky})` }}>
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
                {menu}
                <h1 className="WebH1">WEBSITES</h1>
                <div className="WebDes">
                    <WebPhotoSlider />
                    <div className="paragraphBox">
                        <h2 className="WebTit1">NOTE NETT</h2>
                        <p className="NOTENETTDescription">With NOTE NETT, I Formulated a Note/Todo App, applying full CRUD in where you can check off, edit, delete & pin notes. I utilized bcrypt for Authentication and a secure user experience (UX/UI) and implemented a 3rd party technology, Firebase as a real time customizable user storage/database.</p>
                    </div>
                </div>
            </div>
            <div className="Yeah3" style={{ backgroundImage: `url(${Sky})` }}>

            </div>
            <div className="footer">
                <h1 className="cc">
                    © 2021 PiaoAltoVieu.
                </h1>
            </div>
        </div>
    )
}

export default Websites;