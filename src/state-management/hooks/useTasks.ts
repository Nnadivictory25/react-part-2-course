import { useReducer } from "react";
import tasksReducer from "../reducers/tasksReducer";

const useTasks = () => useReducer(tasksReducer, [])

export default useTasks;