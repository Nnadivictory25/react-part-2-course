import { useReducer } from 'react';
import AuthProvider from './state-management/AuthProvider';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import TasksContext from './state-management/contexts/tasksContext';
import tasksReducer from './state-management/reducers/tasksReducer';

function App() {
	const [tasks, taskDispatch] = useReducer(tasksReducer, []);
	

	return (
		<AuthProvider>
			<TasksContext.Provider value={{ tasks, dispatch: taskDispatch }}>
				<NavBar />
				<HomePage />
			</TasksContext.Provider>
		</AuthProvider>
	);
}

export default App;
