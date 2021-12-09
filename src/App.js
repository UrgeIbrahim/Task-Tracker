import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointmen',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School',
        day: 'Feb 5th at 10:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'shopping',
        day: 'Feb 5th at 11:30pm',
        reminder: false,
    },
  ])

  // Delet Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder}: task))
    console.log(id)
  }

  
  return (
      <div className="container">
        <Header />
        {/* if tasks has nothing display 'no tasks' */}
        {tasks.length > 0 ? (
        <Tasks tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}/>
        ): ( 'No Tasks') }
      </div>
  )
}

export default App

