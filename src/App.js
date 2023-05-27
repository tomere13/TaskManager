import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import './cssFolder/App.css'
// Components
import HomePage from './HomePage'
import MainPage from './MainPage'
import CreateBook from './CreateBook'
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
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch((error) => {
        console.error('Error setting authentication persistence:', error)
      })

    return () => unsubscribe()
  }, [])

  if (isLoading) {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    )
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage setUser={setUser} />} />
          <Route
            path="/login"
            element={
              !user ? (
                <AuthPage setUser={setUser} />
              ) : (
                <HomePage setUser={setUser} />
              )
            }
          />
          <Route
            path="/register"
            element={
              !user ? (
                <Register setUser={setUser} />
              ) : (
                <HomePage setUser={setUser} />
              )
            }
          />
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
          <Route
            path="/create"
            element={
              user ? (
                <CreateBook setUser={setUser} />
              ) : (
                <Navigate to="/login" replace state={{ from: '/create' }} />
              )
            }
          />
          <Route
            path="/main"
            element={
              user ? (
                <MainPage setUser={setUser} />
              ) : (
                <Navigate to="/login" replace state={{ from: '/main' }} />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
