import {useState, useEffect} from 'react'

import Header from './components/Header'
import AddTask from './components/AddTask'
import ToggleButton from './components/ToggleButton'
import ToggleList from './components/ToggleList'

function App() {
  const [showAddTask, setShowAddTask] = useState(window.innerWidth > 992)
  const [taskCounter, setTaskCounter] = useState(1)
  const[completedTasks, setCompletedTasks] = useState([])
  const[pendingTasks, setPendingTasks] = useState([])

  useEffect(() => {
    const data = [
    {id: 1, status:false, name: 'Clean dishes', date:'Apr 5, 2021', time:'10:30 am'},
    {id: 2, status:false, name: 'Send email', date:'Apr 5, 2021', time:'12:30 pm'},
    {id: 3, status:true, name: 'Clean room', date:'Apr 2, 2021', time:'9:30 am'},
    ]

    var completed = []
    var pending = []

    data.forEach((task) => {
      task.status ? completed.push(task) : pending.push(task)
    })

    setTaskCounter(data.length)
    setCompletedTasks(completed)
    setPendingTasks(pending)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', checkWindowSize)

    return () => {
      window.removeEventListener('resize', checkWindowSize)
    }
  })

  const checkWindowSize = () => {
    window.innerWidth > 992 ? setShowAddTask(true) : setShowAddTask(false);
  }

  // Add new task
  const addTask = (task) => {
    var id = taskCounter + 1
    const status = false

    setTaskCounter(id)

    setPendingTasks([...pendingTasks, {id, status, ...task}])
  }

  // Update status from data
  const onUpdateStatusPending = (id) => {
    setPendingTasks(pendingTasks.filter((task) => {
      if(task.id === id) {
        task.status = !task.status
        setCompletedTasks([...completedTasks, task])
        return null
      }
      return task
    }))
  }

  // Update status from data
  const onUpdateStatusCompleted = (id) => {
    setCompletedTasks(completedTasks.filter((task) => {
      if(task.id === id) {
        task.status = !task.status
        setPendingTasks([...pendingTasks, task])
        return null
      }
      return task
    }))
  }

  // Delete pending tasks
  const deletePendingTask = (id) => {
    setPendingTasks(pendingTasks.filter((task) => task.id !== id ))
  }

  // Delete completed task
  const deleteCompletedTask = (id) => {
    setCompletedTasks(completedTasks.filter((task) => task.id !== id ))
  }

  // Toggle to opposite state
  const changeFormDisplay = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="App">
      <Header />

      {showAddTask ? 
      (<AddTask showAddTask={showAddTask} onAdd={addTask} onDone={changeFormDisplay}/>) : 
      (<ToggleButton onToggle={changeFormDisplay} />)}

      <ToggleList
        listName={'pending-list'}
        listTitle={'My tasks'}
        noTasksTitle={'You are done for today'}
        tasks={pendingTasks}
        updateStatus={onUpdateStatusPending}
        onDelete={deletePendingTask}/>
      <ToggleList 
        listName={'completed-list'}
        listTitle={'Completed'}
        noTasksTitle={'There are no completed tasks'}
        tasks={completedTasks}
        updateStatus={onUpdateStatusCompleted}
        onDelete={deleteCompletedTask}/>
    </div>
  );
}

export default App;
