import React from 'react'
import storyBg from './images/Story-Bg-4.jpg'
import logo from './images/Story-Tell.png' // Import the logo image
import './cssFolder/ContactPage.css'

const ContactPage = () => {
  return (
    <div className="auth-container">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Add the logo */}
        </div>
      </nav>
      <div class="navC">
        <div class="menuC">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/contact">contactos</a>
          </li>
          <li>
            <a href="/login">sign in</a>
          </li>
          <li>
            <a href="/register">sign up</a>
          </li>
        </div>
      </div>
      <div className="white-box">
        <div className="home-content">
          <h2>Contact Page</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            malesuada est sed neque porta, a interdum felis efficitur.
          </p>
          {/* <div className="auth-buttons">
            <button className="login-button" onClick={handleLogin}>
              Log In
            </button>
            <button className="signup-button" onClick={handleSignUp}>
              Sign Up
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ContactPage
