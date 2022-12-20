<script setup>
const props = defineProps({
  todo: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <li>{{ props.todo }}</li>
</template>