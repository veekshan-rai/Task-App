import React, { useState } from 'react'

 function TaskForm({addTask}) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('General');
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({text: task, priority, category, completed: false},
    )

    //reset
    setTask('');
    setPriority('Medium');
    setCategory('General');
  }
  return (
    
     <form onSubmit={handleSubmit}>
      <div>
        <input  type="text" value={task} placeholder='Enter the text' onChange={(e) => setTask(e.target.value)}/>
        <button>Add task</button>
       <select value={priority} onChange={(e)=> setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
       </select>

       <select  value={category} onChange={(e)=> setCategory(e.target.value)}>
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
       </select>
      </div>
       
     </form>
  
  )
}

export default TaskForm
