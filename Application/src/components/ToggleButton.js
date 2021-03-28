import {FaPlus} from 'react-icons/fa'

const ToggleButton = (props) => {
    const {onToggle} = props

    return (
        <section className="toggle-section" onClick={onToggle}>
            <button 
            type='button' 
            className="btn btn-toggle" 
            onClick={onToggle} 
            >
                <FaPlus style={{
                    textAlign: 'center',
                    color: ' #212529',
                    fontSize: '0.9rem',
                }}/>
            </button>
            <label className="description">Add a task</label>
        </section>
    )
}

export default ToggleButton
