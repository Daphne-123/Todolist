<template>
  <main>
    <div class="container">
      <h1>Meng Todo</h1>
      <todo-add :tid="todos.length" @add-todo="addTodo" />
      <todo-filter :selected="filter" @change-filter="filter = $event" />
      <todo-list :todos="filteredTodos" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoAdd from './components/TodoAdd.vue';
import TodoFilter from './components/TodoFilter.vue';
import TodoList from './components/TodoList.vue';
import useTodos from '@/composables/useTodos';
import useFilteredTodos from '@/composables/useFilteredTodos';

export default defineComponent({
  name: 'App',
  components: {
    TodoAdd,
    TodoFilter,
    TodoList,
  },
  setup() {
    const { todos, addTodo } = useTodos();
    const { filter, filteredTodos } = useFilteredTodos(todos);

    return {
      todos,
      addTodo,
      filter,
      filteredTodos,
    };
  },
});
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, 'PingFang SC', 'Microsoft Yahei', sans-serif;
}
/* 整个页面 */
main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  background: rgb(203, 210, 240);
}
.container {
  min-width: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}
/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
