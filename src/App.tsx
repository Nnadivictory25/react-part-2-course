import { useReducer } from 'react';
import Counter from './state-management/Counter';
import HomePage from './state-management/HomePage';
import LoginStatus from './state-management/LoginStatus';
import NavBar from './state-management/NavBar';
import TaskList from './state-management/TaskList';
import tasksReducer from './state-management/reducers/tasksReducer';
import TasksContext from './state-management/contexts/tasksContext';

function App() {
	const [tasks, dispatch] = useReducer(tasksReducer, []);

	return (
		<TasksContext.Provider value={{tasks, dispatch}}>
			<NavBar />
			<HomePage />
		</TasksContext.Provider>
	);
}

export default App;
