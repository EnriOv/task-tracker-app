import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import Task from './Task'

const ToggleList = (props) => {
    const { listTitle, tasks, updateStatus, onDelete } = props

    const [showList, setShowList] = useState(false)

    return (
        <section className='list-section'>
            <label className='list-titles'> { listTitle } </label>
            <button 
            className='btn toggle-button' 
            onClick={() => setShowList(!showList)}>
                {showList ? 
                <FaAngleUp className='icon-list'/> : 
                <FaAngleDown className='icon-list'/>}
            </button>
            {showList &&
            <div className='items-section'>
                {tasks.length > 0 ?
                tasks.map((task) => {
                    return <Task key={task.id} task={task} updateStatus={updateStatus} onDelete={onDelete}/>
                }) : <h3 className='done-title'>You are done for today</h3>}
            </div>}
        </section>
    )
}

export default ToggleList
