import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import './cssFolder/MainPage.css'
import logo from './images/Story-Tell.png' // Import the logo image

const BookComponent = ({ object }) => {
  return (
    <div className="book">
      <div className="back"></div>
      <div className="page6"></div>
      <div className="page5"></div>
      <div className="page4"></div>
      <div className="page3"></div>
      <div className="page2"></div>
      <div className="page1"></div>
      <div className="front">
        {console.log(object)}
        {console.log(object.bookName)}

        <h2 className="book-headline"> {object?.bookName}</h2>
        <h4 className="book-author">{object?.author}</h4>
      </div>
    </div>
  )
}

const MainPage = ({ setUser }) => {
  const [books, setBooks] = useState([])
  const [displayedBooks, setDisplayedBooks] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

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
  const handleCreateBook = () => {
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

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const snapshot = await firebase.firestore().collection('books').get()
        const booksData = snapshot.docs.map((doc) => doc.data())
        setBooks(booksData)
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    }

    fetchBooks()
  }, [])

  useEffect(() => {
    const totalBooks = books.length
    const totalPagesCount = Math.ceil(totalBooks / 6)
    setTotalPages(totalPagesCount)

    const startIndex = (currentPage - 1) * 6
    const endIndex = startIndex + 6
    const displayedBooksSlice = books.slice(startIndex, endIndex)
    setDisplayedBooks(displayedBooksSlice)
    setIsLoading(false)
  }, [books, currentPage])

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }
  if (isLoading) {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    )
  }
  console.log(books)

  return (
    <div className="auth-container">
      {console.log(books)}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" onClick={handleHome} />
        </div>
      </nav>
      <div className="navM">
        <div className="menuM">
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
            <button className="menuBtn" onClick={handleCreateBook}>
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
      <div className="white-box">
        <div className="books-container">
          {console.log(displayedBooks[0]?.bookName)}
          {displayedBooks.map((book) => (
            <BookComponent key={book.id} object={book} />
          ))}
        </div>
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}>
            Previous
          </button>
          <button
            className="pagination-btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}>
            Next
          </button>
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

export default MainPage
