import { Todo } from '@/types';
import { onMounted, Ref, ref } from 'vue';

export default function useTodos() {
  const todos: Ref<Todo[]> = ref([]);
  const addTodo = (todo: Todo) => todos.value.push(todo);

  const fetchTodos = async () => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    );
    const rawTodos = await response.json();
    todos.value = rawTodos.map(
      (todo: { id: string; title: string; completed: boolean }) => ({
        id: todo.id,
        content: todo.title,
        completed: todo.completed,
      })
    );
  };

  onMounted(() => {
    fetchTodos();
  });

  return {
    todos,
    addTodo,
  };
}
