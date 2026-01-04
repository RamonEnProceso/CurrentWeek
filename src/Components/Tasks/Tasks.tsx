import style from "./Tasks.module.css"
import { Task } from "../../models/Task"

const Tasks = ({tasks, onSelectTask}:{tasks: Task[], onSelectTask:(task:Task)=>void}) =>{
    return<>
    <h3 className={style.taskTitle}>Tareas</h3>
    <ul>
        {
            tasks.length > 0? tasks.map((task:Task)=>{
            return <li key={task.id} className={style.taskItem}>
                <div onClick={()=>onSelectTask(task)}>
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