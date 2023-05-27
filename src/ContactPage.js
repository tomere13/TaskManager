import React from 'react'
import storyBg from './images/Story-Bg-4.jpg'
import logo from './images/Story-Tell.png' // Import the logo image
import './cssFolder/ContactPage.css'
import { useNavigate } from 'react-router-dom'

const ContactPage = () => {
  const navigate = useNavigate()
  const handleRegister = () => {
    navigate('/register')
  }
  const handleLoginPage = () => {
    navigate('/login')
  }
  const handleHome = () => {
    navigate('/')
  }
  const handleAbout = () => {
    navigate('/about')
  }
  const handleContact = () => {
    navigate('/contact')
  }
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
            <button className="menuBtn" onClick={handleHome}>
              home
            </button>
          </li>
          <li>
            <button className="menuBtn" onClick={handleAbout}>
              about
            </button>
          </li>
          <li>
            <button className="menuBtn" onClick={handleContact}>
              contact
            </button>
          </li>
          <li>
            <button className="menuBtn" onClick={handleLoginPage}>
              sign in
            </button>
          </li>
          <li>
            <button className="menuBtn" onClick={handleRegister}>
              sign up
            </button>
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
