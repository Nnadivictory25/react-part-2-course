import { useQuery } from '@tanstack/react-query';
import { CACHE_TODO_KEY } from '../constants';
import todoService, { Todo } from '../services/todoService'


const useTodos = () => {
    
    return useQuery<Todo[], Error>({
		queryKey: CACHE_TODO_KEY,
        queryFn: todoService.getAll,
        staleTime: 10 * 1000
  });
};

export default useTodos;
