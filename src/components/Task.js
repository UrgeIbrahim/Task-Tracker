import { FaTimes } from 'react-icons/fa'




const Task = ({ task, onDelete, onToggle }) => {
    function handleParentClick () { 
        // console.log(e)
        onToggle(task.id);
      }
    
    function handleChildClick (e) {
        e.stopPropagation();
        onDelete(task.id)
    }

    
    return (
        <div
            className={`task ${task.reminder ? 
            'reminder' : ''}`}
            onClick={handleParentClick}
            // ={() => onToggle(task.id)}
        >
            <h3>
                {task.text}
                <FaTimes
                    style={{ color: 'red', pointer: 'cursor' }}
                    onClick={handleChildClick}
                    // onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
