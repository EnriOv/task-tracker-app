import { FaCheck, FaTrash } from 'react-icons/fa'

const Task = (props) => {
    const { task, updateStatus, onDelete } = props

    const onUpdateStatus = () => {
        updateStatus(task.id)
    }

    const checkTimeInputs = () => {
        if(task.date && task.time) {
            return `${task.date} at ${task.time}`
        }
        if(task.date && !task.time) {
            return `${task.date}`
        }
        if(!task.date && task.time) {
            return `At ${task.time}`
        }
    }

    return (
        <div className='task-container'>
            <button className={task.status ? 'btn task-btn-done' : 'btn task-btn'}
                    onClick={onUpdateStatus}>
                <FaCheck className='checkmark-icon'/>
            </button>
            <label className='task-name'>{task.name}</label>
            <label className='task-date'>{checkTimeInputs()} </label>
            <FaTrash className="btn delete-btn" onClick={() => onDelete(task.id)}/>
        </div>
    )
}

export default Task
