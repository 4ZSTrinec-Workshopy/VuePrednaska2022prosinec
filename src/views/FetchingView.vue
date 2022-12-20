<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const todos = ref([]);

onMounted(async () => {
  const data = await axios.get(`https://jsonplaceholder.typicode.com/todos/`).then((res) => res.data);

  if(data !== undefined) {
    todos.value = data;
  }
})
</script>

<template>
  <main>
    <h1>Fetching from backend</h1>

    <div>
      <div v-for="todo in todos">
        <h2>{{ todo.title }}</h2>
      </div>
    </div>
  </main>
</template>