import React from 'react'
import { useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'

import storyBg from './images/Story-Bg-4.jpg'
import logo from './images/Story-Tell.png'
import './cssFolder/AboutPage.css'

const AboutPage = ({ setUser }) => {
  const navigate = useNavigate()
  const handleRegister = () => {
    navigate('/register')
  }
  const handleLoginPage = () => {
    navigate('/login')
  }
  const handleCreateBook = () => {
    navigate('/create')
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
  const user = firebase.auth().currentUser

  return (
    <div className="auth-container">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" onClick={handleHome} />
        </div>
      </nav>
      <div className="navA">
        <div className="menuA">
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

export default AboutPage
