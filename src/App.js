import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import './App.css'

// Components
import AuthPage from './AuthPage'
import RestOfAppPage from './RestOfAppPage'

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
        {user == '0' && (
          <p className="sign-out-message">'User signed out successfully'</p>
        )}
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate
                  to="/login"
                  replace
                  state={{ from: window.location.pathname }}
                />
              )
            }
          />
          <Route path="/login" element={<AuthPage setUser={setUser} />} />
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
