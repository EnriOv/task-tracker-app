import { useState } from 'react'

const AddTask = () => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    return (
    <form className='add-form'>
      <div className='form-control name-section'>
        <input
          type='text'
          placeholder='Task name'
          value={text}
        //   onChange={(e) => setText(e.target.value)}
        />
        <label>Add task name</label>
      </div>
      <div className='form-control date-section'>
        <input
          type='text'
          placeholder='DD/MM/YY'
          value={day}
        //   onChange={(e) => setDay(e.target.value)}
        />
        <label>Date</label>
      </div>
      <div className='form-control time-section'>
        <input
          type='text'
          placeholder='HH:MM'
          value={day}
        //   onChange={(e) => setDay(e.target.value)}
        />
        <label>Time</label>
      </div>

      <input type='submit' value='Add Task' className='btn btn-add' />
      <input type='submit' value='Cancel' className='btn btn-cancel' />
    </form>
    )
}

export default AddTask