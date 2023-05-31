import { ReactNode, useReducer } from "react";
import tasksReducer from "./reducers/tasksReducer";
import TasksContext from "./contexts/tasksContext";
import useTasks from "./hooks/useTasks";

interface Props {
    children: ReactNode;
}


const TasksProvider = ({children}:Props) => {
    const [tasks, dispatch] = useTasks();

    return (
        <TasksContext.Provider value={{tasks, dispatch}}>
            {children}
        </TasksContext.Provider>
    );
};

export default TasksProvider;