import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Todo } from './useTodos';
import axios from 'axios';
import { CACHE_TODO_KEY } from '../constants';

interface AddTodoContext {
	previousTodos: Todo[];
}

const useAddTodos = (AddTodo: () => void) => {
    const queryClient = useQueryClient();
    
	return useMutation<Todo, Error, Todo, AddTodoContext>({
		mutationFn: (todo: Todo) =>
			axios
				.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
				.then((res) => res.data),

		onMutate: (newTodo) => {
			const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_TODO_KEY) || [];

			queryClient.setQueryData<Todo[]>(CACHE_TODO_KEY, (todos) => [
				newTodo,
				...(todos || []),
			]);

			AddTodo();

			return { previousTodos };
		},

		onSuccess: (savedTodo, newTodo) => {
			queryClient.setQueryData<Todo[]>(CACHE_TODO_KEY, (todos) =>
				todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
			);
		},

		onError: (error, newTodo, context) => {
			if (!context) return;

			queryClient.setQueryData<Todo[]>(CACHE_TODO_KEY, context.previousTodos);
		},
	});
};

export default useAddTodos;
