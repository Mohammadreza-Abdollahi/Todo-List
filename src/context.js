import { createContext } from "react";

export const taskContext = createContext({
    task : [],
    setTask : ()=>{}
})