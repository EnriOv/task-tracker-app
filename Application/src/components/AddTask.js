import { useState } from 'react'

const AddTask = (props) => {
    const {onAdd, onDone} = props

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task name to create new task.')
            return
        }

        onAdd({text, day, time})

        setText('')
        setDay('')
        setTime('')
    }

    return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control name-section'>
        <input
          type='text'
          placeholder='Task name'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label>Add task name</label>
      </div>
      <div className='form-control date-section'>
        <input
          type='text'
          placeholder='DD/MM/YY'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <label>Date</label>
      </div>
      <div className='form-control time-section'>
        <input
          type='text'
          placeholder='HH:MM'
          value={time}
          onChange={(e) => setTime(e.target.value)}
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
    </form>
    )
}

export default AddTask