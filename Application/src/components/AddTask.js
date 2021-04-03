import { useState } from 'react'
import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

const AddTask = (props) => {
    const {onAdd, onDone} = props

    const [name, setName] = useState('')
    const [date, setDate] = useState(null)
    const [time, setTime] = useState(null)

    const onSubmit = (e) => {
      var hours, minutes = 0
      var newDate = ''
      var newTime = ''

      e.preventDefault()

      if(!name) {
          alert('Please add a task name to create new task.')
          return
      }
      if(date) {
        newDate = date.toString().split(" ")
        newDate = `${newDate[1]} ${newDate[2]}, ${newDate[3]}`
      }
      if(time) {
        hours   = time.getHours()
        minutes = time.getMinutes()

        if(hours > 12) {
          newTime = `${hours-12}:${minutes} pm`
        } else {
          newTime = `${hours}:${minutes} am`
        }
      }

      onAdd({name:name, date:newDate, time:newTime})

      setName('')
      setDate(null)
      setTime(null)
    }

    return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control name-section'>
        <input
          type='text'
          placeholder='Task name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Add task name</label>
      </div>
      <div className='form-control date-section'>
        <DatePicker
          placeholderText='Select date'
          selected={date}
          onChange={date => setDate(date)}
          dateFormat="MMMM d, yyyy"
        />
        <label>Date</label>
      </div>
      <div className='form-control time-section'>
        <DatePicker
          placeholderText='Select time'
          selected={time}
          onChange={date => setTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Time"
          dateFormat="h:mm aa"
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