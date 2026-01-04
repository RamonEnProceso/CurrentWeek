import style from "./AddTask.module.css"

const AddTaskButton = ({setActiveTask}:{setActiveTask:()=>void}) =>{
    return<>
    <button className={style.addTaskButton} onClick={setActiveTask}>+ Añadir</button>
    </>
}

export default AddTaskButton;