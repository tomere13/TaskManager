import React, { useState } from 'react'
import firebase from 'firebase/compat/app'
import { useNavigate } from 'react-router-dom'

import 'firebase/compat/auth'
import './cssFolder/register.css'
import storyBg from './images/Story-Bg-4.jpg'
import logo from './images/Story-Tell.png' // Import the logo image

const Register = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

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
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      setUser(firebase.auth().currentUser)
      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="auth-container">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Add the logo */}
        </div>
      </nav>
      <div class="navR">
        <div class="menuR">
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
      <div className="auth-form">
        <h2>Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        {error && <p className="error-message">{error}</p>}
        <div className="auth-buttons">
          <button className="signup-button" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
