import React, { useState, useEffect } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import './cssFolder/RestOfAppPage.css'
import logo from './images/Story-Tell.png' // Import the logo image

const RestOfAppPage = ({ setUser }) => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [signOutMessage, setSignOutMessage] = useState('')

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('tasks')
      .where('userId', '==', firebase.auth().currentUser.uid)
      .onSnapshot((snapshot) => {
        const tasksData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setTasks(tasksData)
      })

    return () => unsubscribe()
  }, [])

  const handleAddTask = async () => {
    if (newTask.trim() === '') return

    try {
      await firebase.firestore().collection('tasks').add({
        name: newTask,
        userId: firebase.auth().currentUser.uid,
      })
      setNewTask('')
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  const handleDeleteTask = async (taskId) => {
    try {
      await firebase.firestore().collection('tasks').doc(taskId).delete()
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut()
      setUser('0')
      console.log('User signed out successfully')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <div className="task-manager-container">
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" /> {/* Add the logo */}
        </div>
      </nav>

      <h2>Task Manager</h2>
      <div className="task-form">
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-task-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className="task-name">{task.name}</div>
            <button
              className="delete-task-button"
              onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button className="sign-out-button" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  )
}

export default RestOfAppPage
