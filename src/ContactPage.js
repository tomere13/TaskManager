import React from 'react'
import storyBg from './images/Story-Bg-4.jpg'
import logo from './images/Story-Tell.png' // Import the logo image
import './cssFolder/ContactPage.css'
import { useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'

const ContactPage = ({ setUser }) => {
  const user = firebase.auth().currentUser

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
  const handleCreateBook = () => {
    navigate('/create')
  }
  const handleContact = () => {
    navigate('/contact')
  }
  const handleMainPage = () => {
    navigate('/main')
  }
  const handleLoginOut = async () => {
    try {
      await firebase.auth().signOut()
      setUser(null)
      console.log('User signed out successfully')
    } catch (error) {
      console.error('Error signing out:', error)
    }
    alert('Logged out succsesfuly')
    navigate('/')
  }
  return (
    <div className="auth-container">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Add the logo */}
        </div>
      </nav>
      <div className="navC">
        <div className="menuC">
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
          {!user && (
            <>
              <li>
                <button className="menuBtn" onClick={handleLoginPage}>
                  log in
                </button>
              </li>
              <li>
                <button className="menuBtn" onClick={handleRegister}>
                  register
                </button>
              </li>
            </>
          )}
          {user && (
            <>
              <li>
                <button className="menuBtn" onClick={handleMainPage}>
                  Books Page
                </button>
              </li>
              <li>
                <button className="menuBtn" onClick={handleCreateBook}>
                  Create Book
                </button>
              </li>
              <li>
                <button className="menuBtn" onClick={handleLoginOut}>
                  log out
                </button>
              </li>
            </>
          )}
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
      <div className="credits">
        <p>
          Website designed and developed by: Tomer Elimelech Thank you for
          visiting!
        </p>
      </div>
    </div>
  )
}

export default ContactPage
