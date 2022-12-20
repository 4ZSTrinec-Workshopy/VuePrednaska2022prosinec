<script setup>
import { ref } from 'vue';
import TheTodo from './TheTodo.vue';

const todos = ref(["To something", "Hello world"]);

const todoText = ref("");

function addTodo() {
  todos.value.push(todoText.value);
  todoText.value = "";
}
</script>

<template>
  <ul v-for="todo in todos">
    <TheTodo :todo="todo" />
  </ul>

  <button @click="addTodo()">Add Todo</button>
  <input type="text" v-model="todoText" />
</template>