const TaskItem = () => {
    return ( 
        <>
            <section className="task-item">
                <div className="task-name">
                    <span className="task-title">بیدار شدن</span>
                </div>
                <div className="task-icons">
                    <button><i class="fa-solid fa-check tik"></i></button>
                    <button><i class="fa-solid fa-xmark xmark"></i></button>
                    <button><i class="fa-solid fa-trash trash"></i></button>
                </div>
            </section>
            <section className="task-item task-checked">
                <div className="task-name">
                    <span className="task-title">بیدار شدن</span>
                </div>
                <div className="task-icons">
                    <button><i class="fa-solid fa-check tik"></i></button>
                    <button><i class="fa-solid fa-xmark xmark"></i></button>
                    <button><i class="fa-solid fa-trash trash"></i></button>
                </div>
            </section>
            <section className="task-item">
                <div className="task-name">
                    <span className="task-title">بیدار شدن</span>
                </div>
                <div className="task-icons">
                    <button><i class="fa-solid fa-check tik"></i></button>
                    <button><i class="fa-solid fa-xmark xmark"></i></button>
                    <button><i class="fa-solid fa-trash trash"></i></button>
                </div>
            </section>
        </>
     );
}
 
export default TaskItem;