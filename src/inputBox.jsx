import { useContext, useState } from "react";
import { taskContext } from "./context";

const InputBox = () => {
    const {task,setTask} = useContext(taskContext);
    const [newTask , setNewTask] = useState("");
    const handleAddTask = ()=>{
        if(newTask !== ""){
            setTask([...task , {id: task.length+1,title: newTask,isDone: false}])
        }else{
            alert("باید برای برنامه جدید خود نامی اضافه کنید!")
        }
        setNewTask("")
    }
    return ( 
        <>
            <section className="inp-box">
                <div className="inp-container">
                    <input onChange={(e)=>setNewTask(e.target.value)} value={newTask} className="add-inp" type="text" placeholder="نام برنامه ، وظیفه و..." />
                </div>
                <div className="btn-container">
                    <button onClick={handleAddTask} className="add-btn">ثبت</button>
                </div>
            </section>
        </>
     );
}
 
export default InputBox;