import React from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Progress from './components/Progress'
function App() {
  return (
   <>
   <h1>Task-App</h1>
   <p>Your friendly task manager</p>
   <TaskForm/>
   <TaskList/>
   <Progress/>
   <button>Add Task</button>
   </>
  )
}

export default App
