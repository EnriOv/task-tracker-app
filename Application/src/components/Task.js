import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const Task = (props) => {
    const { name, date, time, status } = props

    const [taskStatus, setTaskStatus] = useState(status)

    const updateStatus = () => {
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
