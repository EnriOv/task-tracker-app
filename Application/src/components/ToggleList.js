import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

import Task from './Task'

const ToggleList = (props) => {
    const { listName, listTitle, noTasksTitle, tasks, updateStatus, onDelete } = props

    const [showList, setShowList] = useState(false)

    return (
        <div className={listName}>
            <section className={`list-section`}>
                <h2 className='list-titles'> { listTitle } </h2>
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
                    }) : <h3 className='done-title'>{noTasksTitle}</h3>}
                </div>}
            </section>
        </div>
    )
}

export default ToggleList
