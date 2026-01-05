import style from "./Tasks.module.css"
import { Task } from "../../models/Task"
import DisplayDifference from "./TasksDifference"
import TaskStatus from "./TaskStatus"

const Tasks = ({tasks, onSelectTask}:{tasks: Task[], onSelectTask:(task:Task)=>void}) =>{
    return<>
    <h3 className={style.taskSectionTitle}>Tareas</h3>
    <ul className={style.taskList}>
        {
            tasks.length > 0? tasks.map((task:Task)=>{
            return <li key={task.id} className={`${style.taskItem} ${style[task.status]}`}>
                <div className={style.taskContainer} onClick={()=>onSelectTask(task)}>

                    <div className={style.taskLeftSide}>
                        <span className={style.taskTitle}>{task.title}</span>
                        <TaskStatus status={task.status}></TaskStatus>
                    </div>
                    
                    <div className={style.taskRightSide}>
                        <DisplayDifference date={task.finalDate}></DisplayDifference>
                    </div>

                </div>
            </li>
        }): <p style={{color:"black"}}>-- No hay tareas disponibles --</p>
        }
    </ul>
    </>
}

export default Tasks