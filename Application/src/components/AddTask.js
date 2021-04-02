import { useState } from 'react'

const AddTask = (props) => {
    const {onAdd, onDone} = props

    const [task, setTask] = useState({name:'', date:'', time:''})

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setTask({...task, [name]:value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(!task.name) {
            alert('Please add a task name to create new task.')
            return
        }

        onAdd(task)
        setTask({name:'', date:'', time:''})
    }

    return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control name-section'>
        <input
          type='text'
          name='name'
          placeholder='Task name'
          value={task.name}
          onChange={handleChange}
        />
        <label>Add task name</label>
      </div>
      <div className='form-control date-section'>
        <input
          type='date'
          name='date'
          value={task.date}
          onChange={handleChange}
        />
        <label>Date</label>
      </div>
      <div className='form-control time-section'>
        <input
          type='time'
          name='time'
          value={task.time}
          onChange={handleChange}
        />
        <label>Time</label>
      </div>

      <input type='submit' value='Add Task' className='btn btn-add' />
      <input 
        type='button' 
        value='Cancel' 
        className='btn btn-cancel' 
        onClick={onDone}
      />
    </form>)
}

export default AddTask