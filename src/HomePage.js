import React from 'react'
import { useNavigate } from 'react-router-dom'
import storyBg from './images/Story-Bg-4.jpg'
import logo from './images/Story-Tell.png' // Import the logo image
import './cssFolder/HomePage.css'

const HomePage = () => {
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
    <div
      className="auth-container"
      // style={{
      //   backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${storyBg})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Add the logo */}
        </div>
      </nav>
      <div class="nav">
        {/* <input type="checkbox"></input> */}

        <div class="menu">
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
          <h2 style={{ textAlign: 'center' }}>Welcome to Story Tell</h2>
          <p>
            The revolutionary online platform that brings the joy of
            collaborative storytelling to life. Have you ever dreamed of writing
            a book with others, combining your imaginations to create
            captivating tales? Look no further! Story Tell is here to make that
            dream a reality. Our platform allows you to embark on incredible
            literary journeys with fellow authors from around the world. Whether
            you're a novice writer or a seasoned wordsmith, you can start a
            story and invite others to finish or continue it, adding their
            unique twists and turns. Together, we will unlock a world of endless
            possibilities, weaving narratives that will captivate readers and
            leave them eagerly awaiting the next chapter. Join Story Tell today
            and embark on a collaborative adventure that will ignite your
            creativity and connect you with like-minded storytellers. Let your
            imagination run wild and let the magic of shared storytelling
            unfold.
          </p>
          <div className="auth-buttons">
            <button className="login-button" onClick={handleLoginPage}>
              Log In
            </button>
            <button className="signup-button" onClick={handleRegister}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
