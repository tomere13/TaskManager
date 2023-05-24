import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import App from './App'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAvCSoEiq15cEv6Ivku1LBt8k1aMGSAO7s',
  authDomain: 'task-manager-5fac9.firebaseapp.com',
  projectId: 'task-manager-5fac9',
  storageBucket: 'task-manager-5fac9.appspot.com',
  messagingSenderId: '122599409151',
  appId: '1:122599409151:web:fb16034daa028cea08d3ca',
  measurementId: 'G-77DHHCM9CG',
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'))
