import { useContext } from "react";
import { taskContext } from "./context";

const Tasks = () => {
    const {task} = useContext(taskContext);
    return ( 
        <>
            <section className="tasks-container">
                {task.map((item,index)=>{
                    return(
                        <section key={index} className={`task-item ${item.isDone ? "task-checked" : ""}`}>
                        <div className="task-name">
                            <span className="task-title">{item.title}</span>
                        </div>
                        <div className="task-icons">
                            {
                                item.isDone ? 
                                <button><i class={`fa-solid fa-xmark xmark`}></i></button>
                                :
                                <button><i class={`fa-solid fa-check tik`}></i></button>

                            }
                            <button><i class="fa-solid fa-trash trash"></i></button>
                        </div>
                    </section>
                    )
                })}
            </section>
        </>
     );
}
 
export default Tasks;