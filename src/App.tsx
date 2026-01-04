import './styles/App.css'
import { Task } from './models/Task'
import Tasks from "./Components/Tasks/Tasks"
import CurrentWeek from './Components/CurrentWeek/CurrentWeek'
import AddTaskButton from './Components/Buttons/AddTask'
import Panel from './Components/Panel/Panel'
import { useState } from "react"

function App() {
  
  const [tasks,setTasks] = useState<Task[]>([]);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const handleSelectTask = (task: Task) => {
    setActiveTask(task);
    setIsPanelOpen(true)
  }

  const addTask = (task: Task) =>{
    setTasks(prev => [...prev,task])
  }

  const updateTask = (updated:Task) =>{
    setTasks(prev=>
      prev.map(task =>
      task.id === updated.id? updated : task
    )
    )
  }

  const deleteTask = (id:string) =>{
    setTasks(taskList => taskList.filter(task=>task.id !== id))
  }

  const closePanel = ()=>{
    setIsPanelOpen(false)
  }
  

  return (
    <>
      <CurrentWeek></CurrentWeek>
      <Tasks tasks={tasks} onSelectTask={handleSelectTask}/>
      <AddTaskButton setActiveTask={()=> {setActiveTask(null); setIsPanelOpen(true)}}></AddTaskButton>
      {
        isPanelOpen && <Panel addTask={addTask} activeTask={activeTask} updateTask={updateTask} deleteTask={deleteTask} closePanel={closePanel}></Panel>
      }
    </>
  )
}

export default App
