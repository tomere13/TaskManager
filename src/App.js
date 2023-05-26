import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

// Components
import HomePage from './HomePage'
import AuthPage from './AuthPage'
import Register from './Register'
import RestOfAppPage from './RestOfAppPage'
import ContactPage from './ContactPage'
import AboutPage from './AboutPage'

export default function App() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
      setIsLoading(false)
    })

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return firebase.auth().signInAnonymously()
      })
      .catch((error) => {
        console.error('Error setting authentication persistence:', error)
      })

    return () => unsubscribe()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/contact" element={<ContactPage setUser={setUser} />} />
          <Route path="/about" element={<AboutPage setUser={setUser} />} />

          <Route
            path="/dashboard"
            element={
              user ? (
                <RestOfAppPage setUser={setUser} />
              ) : (
                <Navigate to="/login" replace state={{ from: '/dashboard' }} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
