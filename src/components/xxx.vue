<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view/>
      <todo-input v-on:todo:add="addTodo"></todo-input>
      <todo-item  v-for="todo in todos" v-bind:todo="todo" v-on:todo:remove="removeTodo" :key="todo.id"></todo-item>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';

export default {
  name: 'app',
  data() {
    return {
      todos: [
      ],
      nextId: 0
    };
  },
  components: {
    Header,
    TodoInput,
    TodoItem
  },
  methods: {
    addTodo(text) {
      this.todos.push({id: this.nextId, text: text});
      this.nextId++;
    },
    removeTodo(id) {
      let todos = this.todos;
      this.todos = todos.filter((todo) => todo.id != id)
      }
    }
  }
</script>

<style>
nav {
  margin-bottom: 10px;
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todo-wrapper {
  margin: 20px auto 20px auto;
  width: 500px;
  min-height: 600px;
  border: 5px solid rgba(73, 204, 249, 1.0);
  padding: 20px;
}

</style>
