import React from 'react'
import storyBg from './images/Story-Bg-4.jpg'
import logo from './images/Story-Tell.png' // Import the logo image
import './cssFolder/AboutPage.css'

const AboutPage = () => {
  return (
    <div
      className="auth-container"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${storyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Add the logo */}
        </div>
      </nav>
      <div class="navA">
        <input type="checkbox"></input>
        <span></span>
        <span></span>
        <div class="menuA">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/contact">contact</a>
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
          <h2>About Page</h2>
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

export default AboutPage
