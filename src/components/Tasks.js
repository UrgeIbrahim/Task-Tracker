import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    // this state is with in our componenet
    
    return (
        <>
            {tasks.map((task) => (
                <Task 
                key={task.id} 
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Tasks
