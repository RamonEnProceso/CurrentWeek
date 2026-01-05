import style from "./Tasks.module.css"

const TaskStatus = ({status}:{status:"todo"|"doing"|"done"}) =>{
    switch(status){
        case "todo":
            return <span className={style.taskStatus}>Por hacer</span>
        case "doing":                       
            return <span className={style.taskStatus}>Haciendo</span>
        case "done":
            return <span className={style.taskStatus}>Hecho</span>
    }
}

export default TaskStatus