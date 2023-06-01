import Counter from './state-management/counter/Counter';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import TasksProvider from './state-management/tasks/TasksProvider';

function App() {
	return (
			<TasksProvider>
				<Counter />
				<NavBar />
				<HomePage />
			</TasksProvider>
	);
}

export default App;
