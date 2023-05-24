import React, { useState } from 'react'
import firebase from 'firebase/compat/app'
import { useNavigate } from 'react-router-dom'

import 'firebase/compat/auth'
import './AuthPage.css'

const AuthPage = ({ setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const navigate = useNavigate() // Add this line to access the navigate function

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      setUser(firebase.auth().currentUser) // Update the user state
      navigate('/dashboard') // Navigate to the dashboard page
    } catch (error) {
      setError(error.message)
    }
  }

  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      setUser(firebase.auth().currentUser) // Update the user state
      navigate('/dashboard') // Navigate to the dashboard page
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="auth-container">
      <h2>Login / Sign Up</h2>
      <div className="auth-form">
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
          <button className="signup-button" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
