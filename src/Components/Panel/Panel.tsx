import { Task } from "../../models/Task";
import { useState} from "react";
import style from "./Panel.module.css"

const Panel = ({addTask,updateTask,activeTask,deleteTask,closePanel}:{
    addTask:(task: Task)=>void,
    updateTask:(task: Task)=>void,
    activeTask?:Task | null,
    deleteTask:(id:string)=>void,
    closePanel:()=>void
    }) =>{

    const [taskDraft,setTaskDraft] = useState<Task>(
        activeTask ?? {
            id: crypto.randomUUID(),
            title: "",
            description:"",
            status: "todo",
            finalDate: ""
        }
    )

    return <>
    <div className={style.panel}>
        <form
        onSubmit={(e)=>{
            e.preventDefault()
            if(activeTask){
                updateTask(taskDraft)
            }else{addTask(taskDraft)}
            closePanel()
        } }
        >
            <button type="button" onClick={closePanel}>X</button>
            {
                activeTask && <button onClick={()=>{deleteTask(taskDraft.id);closePanel()}}>Borrar</button>
            }
            
            <label htmlFor="name">Nombre</label>
            <input required id="name" type="text" value={taskDraft.title} onChange={(e)=>setTaskDraft({...taskDraft, title: e.target.value})}></input>
            
            <label htmlFor="description">Descripción</label>
            <input type="text" id="description" value={taskDraft.description} onChange={(e)=>setTaskDraft({...taskDraft, description: e.target.value})}></input>
            
            <label htmlFor="date">Caduca el:</label>
            <input required type="date" id="date" value={taskDraft.finalDate} onChange={(e)=>setTaskDraft({...taskDraft, finalDate: e.target.value})}></input>
            
            <fieldset>
                <legend>Estado:</legend>
                <label>
                    <input required type="radio" name="status" value="todo" checked={taskDraft.status === "todo"}  
                    onChange={(e) => setTaskDraft({ ...taskDraft, status: e.target.value as Task["status"] })}></input>
                    <span>Por Hacer</span>
                </label>
                <label>
                    <input type="radio" name="status" value="doing" checked={taskDraft.status === "doing"}  
                    onChange={(e) => setTaskDraft({ ...taskDraft, status: e.target.value as Task["status"] })}></input>
                    <span>Haciendo</span>
                </label>
                <label>
                    <input type="radio" name="status" value="done" checked={taskDraft.status === "done"}  
                    onChange={(e) => setTaskDraft({ ...taskDraft, status: e.target.value as Task["status"] })}></input>
                    <span>Hecho</span>
                </label>
            </fieldset>
            <button type="submit">{activeTask? "Editar Tarea" : "Añadir Tarea"}</button>
        </form>
    </div>
    </>

}

export default Panel;