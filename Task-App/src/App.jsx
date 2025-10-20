import React, { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Progress from './components/Progress'



function App() {
  const [tasks, setTask] = useState([]);
  useEffect(()=> {
localStorage.setItem("tasks", JSON.stringify(tasks));
  })
  const addTask= (task) => {
setTask([...tasks,task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTask(newtask);
  }
  const deleteTask = (index) => {
    setTask(tasks.filter((_,i) => i != index));
  }
  return (
   <>
   <h1>Task-App</h1>
   <p>Your friendly task manager</p>
   <TaskForm addTask = {addTask}/>
   <TaskList tasks = {tasks} updateTask = {updateTask} deleteTask = {deleteTask }/>
   <Progress/>
   <button>Add Task</button>
   </>
  )
}

export default App
