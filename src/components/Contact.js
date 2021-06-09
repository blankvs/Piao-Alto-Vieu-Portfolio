import React, { Component, useState } from "react"
import { Link } from "react-router-dom"
import WATER from "../assets/WATER.png"
import Three from "../assets/Three.png"
import { Helmet } from "react-helmet"

// import { useForm } from "react-hook-form"

import "../css/Contact.css"

function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [message, setMessage] = useState("")

  // const { register, handleSubmit, errors, reset } = useForm()

  // function onSubmitForm(values) {
  //   console.log(values)
  // }

  let menu

  if (isMenuOpen) {
    menu = (
      <div className="fixBox">
        <div className="mobileBox">
          <p>
            <Link className="LinkWebsitesMob" to="/">
              HOME
            </Link>
          </p>
          <p>
            <Link className="LinkWebsitesMob" to="/About">
              ABOUT
            </Link>
          </p>
          <p>
            <Link className="LinkWebsitesMob" to="/Websites">
              WEBSITES
            </Link>
          </p>
          <p>
            <Link className="LinkWebsitesMob" to="/Music">
              MUSIC
            </Link>
          </p>
          <p>
            <Link className="LinkWebsitesMob" to="/Contact">
              CONTACT
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="Yeah" loading="lazy" style={{ backgroundImage: `url(${WATER})` }}>
      <Helmet>
        <title>PiaoAltoVieu - Contact.</title>
        <meta name="Contact" content="Contact information" />
      </Helmet>
      <div>
        <div className="HeaderWrapper">
          <h1 className="HeaderLogo">PIAO ALTO VIEU</h1>
          <div className="yerr">
            <img
              className="ThreeMenu"
              src={Three}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <ul className="LinkSpread">
            <li>
              <Link className="LinkWebsites" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="LinkAbout" to="/About">
                ABOUT
              </Link>
            </li>
            <li>
              <Link className="LinkWebsites" to="/Websites">
                WEBSITES
              </Link>
            </li>
            <li>
              <Link className="LinkDesign" to="/Music">
                MUSIC
              </Link>
            </li>
            <li>
              <Link className="LinkContact" to="/Contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {menu}
      <h1 className="contactH1">CONTACT</h1>
      {/* <h1 className="emailH1">SERGIOVEGAP12@GMAIL.COM</h1> */}

      {/* <form className="contact__form" onSubmit={handleSubmit(onSubmitForm)}>
        <label for="name">NAME</label>
        <input type="text" name="name" ref={register} placeholder="NAME" />

        <label for="email">EMAIL</label>
        <input type="email" name="email" ref={register} placeholder="EMAIL" />

        <label for="phone">PHONE</label>
        <input type="text" name="phone" ref={register} placeholder="EMAIL" />

        <textarea
          type="text"
          name="name"
          placeholder="MESSAGE"
          ref={register}
        />

        <button type="submit">SUBMIT</button>
      </form> */}

      <div className="footer">
        <h1 className="cc">© 2021 PiaoAltoVieu.</h1>
      </div>
    </div>
  )
}

export default Contact
