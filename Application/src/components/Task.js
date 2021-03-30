import { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const Task = (props) => {
    const { task, updateData } = props

    const [taskStatus, setTaskStatus] = useState(task.status)

    const updateStatus = () => {
        updateData(task.id)
        setTaskStatus(!taskStatus)
    }

    return (
        <div className='task-container'>
            <button className={taskStatus ? 'btn task-btn-done' : 'btn task-btn'}
                    onClick={updateStatus}>
                <FaCheck className='checkmark-icon'/>
            </button>
            <label className='task-name'>{task.name}</label>
            <label className='task-date'>{task.date} at {task.time} </label>
        </div>
    )
}

export default Task
