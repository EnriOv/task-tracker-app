import { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const ToggleList = (props) => {
    const { listTitle } = props

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
            <div className='items-section'>
                {showList && 
                <h3 className='done-title'>You are done for today</h3>}
            </div>
        </section>
    )
}

export default ToggleList
