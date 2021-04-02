import {useState} from 'react'

import Header from './components/Header'
import AddTask from './components/AddTask'
import ToggleButton from './components/ToggleButton'
import ToggleList from './components/ToggleList'

function App() {
  const data = [
    {id: 1, status:false, name: 'Clean dishes', date:'29/03/2021', time:'10:30'},
    {id: 2, status:false, name: 'Send email', date:'29/03/2021', time:'12:30'}
  ]

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(data)

  // Add task
  const addTask = (task) => {
    console.log(task)
  }

  // Update status from data
  const onUpdateStatus = (id) => {
    setTasks(tasks.map((task) => {
      if(task.id === id) {
        task.status = !task.status
      }
      return task
    }))
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  // Toggle to opposite state
  const changeFormDisplay = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="App">
      <Header />

      {showAddTask ? 
      (<AddTask onAdd={addTask} onDone={changeFormDisplay}/>) : 
      (<ToggleButton onToggle={changeFormDisplay} />)}

      <ToggleList listTitle={'My tasks'} tasks={tasks} updateStatus={onUpdateStatus} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
