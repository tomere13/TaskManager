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
      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
    }
  }

  const handleRegister = () => {
    navigate('/register')
  }

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
      <div class="navAuth">
        <input type="checkbox"></input>
        <span></span>
        <span></span>
        <div class="menuAuth">
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
