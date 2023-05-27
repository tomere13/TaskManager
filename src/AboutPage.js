import React from 'react'
import { useNavigate } from 'react-router-dom'

import storyBg from './images/Story-Bg-4.jpg'
import logo from './images/Story-Tell.png' // Import the logo image
import './cssFolder/AboutPage.css'

const AboutPage = () => {
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
      <div class="navA">
        <div class="menuA">
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
          <h2 style={{ textAlign: 'center' }}>About</h2>
          <p>
            Welcome to our Story Tell about page! We are a passionate team of
            storytellers dedicated to providing a unique and immersive writing
            experience. At Story Tell, we believe that the power of storytelling
            lies not only in the hands of one author but in the collective
            imagination of many. Our platform is designed to foster
            collaboration and community, enabling writers from all walks of life
            to come together and create extraordinary tales. Whether you are an
            aspiring author looking to hone your skills or a seasoned writer
            seeking fresh perspectives, Story Tell is the perfect place for you.
            With our user-friendly interface, you can start a story and invite
            others to join in, adding their own creative flair to your
            narrative. The collaborative process ensures that each story becomes
            a harmonious blend of diverse voices and ideas, resulting in truly
            remarkable works of art. Join our vibrant community and unlock a
            world of endless storytelling possibilities. Let's embark on this
            journey together, where every page is an opportunity to inspire,
            connect, and ignite the imagination of readers worldwide. Discover
            the magic of shared storytelling at Story Tell today!
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
