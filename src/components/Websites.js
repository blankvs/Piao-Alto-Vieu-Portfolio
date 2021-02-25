import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Sky from '../assets/Sky.png'
import WebPhotoSlider from './WebPhotoSlider'
import '../css/Website.css'



class Websites extends Component {


    render() {
        return (
            <div>
                <div className="Yeah2" style={{ backgroundImage: `url(${Sky})` }}>
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
                    <h1 className="WebH1">WEBSITES</h1>
                    <div className="WebDes">
                        <WebPhotoSlider />
                        <div className="paragraphBox">
                            <p className="NOTENETTDescription">With NOTE NETT, I Formulated a Note/Todo App, applying full CRUD in where you can check off, edit, delete & pin notes. I utilized bcrypt for Authentication and a secure user experience (UX/UI) and implemented a 3rd party technology, Firebase as a real time customizable user storage/database.</p>
                        </div>
                    </div>
                </div>
                <div className="Yeah3" style={{ backgroundImage: `url(${Sky})` }}>

                </div>
            </div>
        )
    }
}

export default Websites;