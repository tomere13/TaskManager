import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import storyBg from './images/Story-Bg-2.jpg'
import logo from './images/Story-Tell.png' // Import the logo image
import './cssFolder/AuthPage.css'

const AuthPage = ({ setUser }) => {
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

  const handleHome = async () => {
    try {
      const user = firebase.auth().currentUser

      if (user) {
        navigate('/home')
      } else {
        navigate('/login')
      }
    } catch (error) {
      setError(error.message)
    }
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

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      setUser(firebase.auth().currentUser)
      navigate('/main')
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
      <div className="navAuth">
        <div className="menuAuth">
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
        <h2>Login</h2>
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
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <button className="register-button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
