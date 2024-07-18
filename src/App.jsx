import { useState } from "react";
import InputBox from "./inputBox";
import Tasks from "./tasks";
import { taskContext } from "./context";

const App = ()=>{
  const [task , setTask] = useState([
    {
      id : 1,
      title : "ایتم شماره یک",
      isDone : false
    },
    {
      id : 2,
      title : "ایتم شماره دو",
      isDone : true
    },
    {
      id : 3,
      title : "ایتم شماره سه",
      isDone : false
    }
  ])
  return (
    <>
      <section className="main-sec">
        <h1>برنامه روزانه</h1>
        <taskContext.Provider value={{task,setTask}}>
          <InputBox/>
          <Tasks/>
        </taskContext.Provider>
      </section>
    </>
  );
}

export default App;
