import React, { useState } from 'react'

 function TaskForm() {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('General');
  return (
    
     <form action="">
      <div>
        <input type="text" onChange={(e) => setTask(e.target.value)}/>
        <button>Add task</button>
       <select onChange={(e)=> setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
       </select>

       <select onChange={(e)=> setCategory(e.target.value)}>
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
       </select>
      </div>
        <p>{task} {priority} {category}</p>
     </form>
  
  )
}

export default TaskForm
