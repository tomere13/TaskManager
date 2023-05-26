import React from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import './cssFolder/MainPage.css'
import logo from './images/Story-Tell.png' // Import the logo image

const mainPage = ({ setUser }) => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </nav>
      <div className="books-container">
        <div class="book">
          <div class="back"></div>
          <div class="page6"></div>
          <div class="page5"></div>
          <div class="page4"></div>
          <div class="page3"></div>
          <div class="page2"></div>
          <div class="page1"></div>
          <div class="front"></div>
        </div>
        <div class="book">
          <div class="back"></div>
          <div class="page6"></div>
          <div class="page5"></div>
          <div class="page4"></div>
          <div class="page3"></div>
          <div class="page2"></div>
          <div class="page1"></div>
          <div class="front"></div>
        </div>
        <div class="book">
          <div class="back"></div>
          <div class="page6"></div>
          <div class="page5"></div>
          <div class="page4"></div>
          <div class="page3"></div>
          <div class="page2"></div>
          <div class="page1"></div>
          <div class="front"></div>
        </div>
        <div class="book">
          <div class="back"></div>
          <div class="page6"></div>
          <div class="page5"></div>
          <div class="page4"></div>
          <div class="page3"></div>
          <div class="page2"></div>
          <div class="page1"></div>
          <div class="front"></div>
        </div>
      </div>
    </div>
  )
}

export default mainPage
