import { useState } from "react"
import Task from "../models/Task"
import "./Tasks.css"

const Tasks = () =>{

    const [tasks,setTasks] = useState<Task[]>([])

    return<>
    <h3 className="taskTitle">Tareas</h3>
    <ul>
        {
            tasks.length > 0? tasks.map((task)=>{
            return <li key={task.id} className="taskItem">
                <div>
                    <div>{task.title}</div>
                    <div><span>{task.status}</span></div>
                </div>
                <div>
                    <div>{String(task.finalDate)}</div>
                </div>
            </li>
        }): <p style={{color:"black"}}>-- No hay tareas disponibles --</p>
        }
    </ul>
    </>
}

export default Tasks