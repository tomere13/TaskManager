import React, { useState } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { useNavigate } from 'react-router-dom'
import './cssFolder/CreateBook.css'
import logo from './images/Story-Tell.png' // Import the logo image

const CreateBook = ({ setUser }) => {
  const [bookName, setBookName] = useState('')
  const [author, setAuthor] = useState('')
  const [chapters, setChapters] = useState([''])

  const navigate = useNavigate()

  const handleLoginOut = async () => {
    try {
      await firebase.auth().signOut()
      setUser(null)
      console.log('User signed out successfully')
    } catch (error) {
      console.error('Error signing out:', error)
    }
    alert('Logged out successfully')
    navigate('/')
  }

  const handleHome = () => {
    navigate('/')
  }

  const handleCreateBookPage = () => {
    navigate('/create')
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

  const handleChapterChange = (index, value) => {
    const updatedChapters = [...chapters]
    updatedChapters[index] = value
    setChapters(updatedChapters)
  }

  const handleAddChapter = () => {
    setChapters([...chapters, ''])
  }

  const handleRemoveChapter = (index) => {
    const updatedChapters = [...chapters]
    updatedChapters.splice(index, 1)
    setChapters(updatedChapters)
  }

  const handleCreateBook = async () => {
    try {
      const bookData = {
        bookName,
        author,
        chapters,
      }

      const docRef = await firebase
        .firestore()
        .collection('books')
        .add(bookData)
      console.log('Book created with ID:', docRef.id)

      // Reset form fields
      setBookName('')
      setAuthor('')
      setChapters([''])

      // Navigate to the books page or any other desired route
      alert('Book added!')
      navigate('/main')
    } catch (error) {
      console.error('Error creating book:', error)
    }
  }

  return (
    <div className="white-box">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </nav>
      <div className="navCreate">
        <div className="menuCreate">
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
            <button className="menuBtn" onClick={handleMainPage}>
              Books Page
            </button>
          </li>
          <li>
            <button className="menuBtn" onClick={handleCreateBookPage}>
              Create Book
            </button>
          </li>
          <li>
            <button className="menuBtn" onClick={handleLoginOut}>
              log out
            </button>
          </li>
        </div>
      </div>
      <div className="input-container">
        <h2>Create a New Book</h2>
        <label>Book Name:</label>
        <input
          type="text"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />

        <label>Author:</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="chapter-container">
        <label>Chapters:</label>
        {chapters.map((chapter, index) => (
          <div className="chapter-input" key={index}>
            <input
              type="text"
              value={chapter}
              onChange={(e) => handleChapterChange(index, e.target.value)}
            />
            {index > 0 && (
              <button
                className="remove-chapter-btn"
                onClick={() => handleRemoveChapter(index)}>
                Remove Chapter
              </button>
            )}
          </div>
        ))}
        <button className="add-chapter-btn" onClick={handleAddChapter}>
          Add Chapter
        </button>
      </div>
      <button className="create-book-btn" onClick={handleCreateBook}>
        Create Book
      </button>
    </div>
  )
}

export default CreateBook
