<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);
</script>

<template>
  <main>
    <h1>Reaktivita</h1>

    <h2>Count: {{ count }}</h2>
    <h2>Double Count: {{ doubleCount }}</h2>

    <button @click="count++">Increment</button>
  </main>
</template>
