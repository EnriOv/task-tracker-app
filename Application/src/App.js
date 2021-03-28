import {useState} from 'react'

import Header from './components/Header'
import AddTask from './components/AddTask'
import ToggleButton from './components/ToggleButton'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  // Add task
  const addTask = (task) => {
    console.log(task)
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
    </div>
  );
}

export default App;
