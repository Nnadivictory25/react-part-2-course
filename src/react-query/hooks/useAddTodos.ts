import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CACHE_TODO_KEY } from '../constants';
import todoService, { Todo } from '../services/todoService'


interface AddTodoContext {
	previousTodos: Todo[];
}

const useAddTodos = (AddTodo: () => void) => {
    const queryClient = useQueryClient();
    
	return useMutation<Todo, Error, Todo, AddTodoContext>({
		mutationFn: todoService.post,

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
