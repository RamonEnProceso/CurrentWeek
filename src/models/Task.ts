interface TaskInterface{
    id: number,
    title: string,
    description: string,
    finalDate: Date,
    todoList?:Record<string,boolean>
}

class Task {
    id:number
    title: string
    description:string
    finalDate: Date
    status:string
    constructor(obj : TaskInterface){
        this.id = obj.id;
        this.title = obj.title;
        this.description = obj.description;
        this.finalDate = obj.finalDate;
        this.status = "Todo";
    }

    changeStatus(val:string){
        this.status = val;
    }
}

export default Task