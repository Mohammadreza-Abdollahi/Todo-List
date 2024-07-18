import { useContext } from "react";
import { taskContext } from "./context";

const Tasks = () => {
    const {task,setTask} = useContext(taskContext);
    const handleToggleBtns = (index)=>{
        let updatedTasks = [...task];
        updatedTasks[index].isDone = !updatedTasks[index].isDone;
        setTask(updatedTasks);
    }
    const deleteItem = (index)=>{
        let taskList = [...task];
        let newTaskList = taskList.filter((task)=>task !== taskList[index])
        setTask(newTaskList);
    }
    return ( 
        <>
            <section className="tasks-container">
                {
                task.length !== 0 ?
                task.map((item,index)=>{
                    return(
                        <section key={index} className={`task-item ${item.isDone ? "task-checked" : ""}`}>
                        <div className="task-name">
                            <span className={`${item.isDone ? "task-title-success" : "task-title"}`}>{item.title}</span>
                        </div>
                        <div className="task-icons">
                            {
                                item.isDone ? 
                                <button onClick={()=>{handleToggleBtns(index)}}><i class={`fa-solid fa-xmark xmark`}></i></button>
                                :
                                <button onClick={()=>{handleToggleBtns(index)}}><i class={`fa-solid fa-check tik`}></i></button>

                            }
                            <button onClick={()=>{deleteItem(index)}}><i class="fa-solid fa-trash trash"></i></button>
                        </div>
                    </section>
                    )
                }) : 
                <div className="list-empty">
                    <i class="fa-solid fa-triangle-exclamation"></i><span className="empty-mes">لیست خالی است</span><i class="fa-solid fa-triangle-exclamation"></i>
                </div>
            }
            </section>
        </>
     );
}
 
export default Tasks;