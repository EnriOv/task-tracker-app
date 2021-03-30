import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const Task = (props) => {
    const { id, name, date, time, status, updateData } = props

    const [taskStatus, setTaskStatus] = useState(status)

    const updateStatus = () => {
        updateData(id)
        setTaskStatus(!taskStatus)
    }

    return (
        <div className='task-container'>
            <button className={taskStatus ? 'btn task-btn-done' : 'btn task-btn'}
                    onClick={updateStatus}>
                <FaCheck className='checkmark-icon'/>
            </button>
            <label className='task-name'>{name}</label>
            <label className='task-date'>{date} at {time} </label>
        </div>
    )
}

export default Task
