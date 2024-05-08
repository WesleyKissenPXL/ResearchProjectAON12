<script setup>
import { ref } from 'vue';

const newTask = ref('');
const tasks = ref(["Sprint 2 Deadline", "Code review"]);

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
}

import { defineExpose } from 'vue';
defineExpose({ newTask, tasks, addTask });
</script>

<template>
  <div id="app">
    <h1>Tasks</h1>
    <input type="text" v-model="newTask" @keyup.enter="addTask">
    <ul>
      <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
    </ul>
  </div>
  <input type="file" accept="image/*">
</template>