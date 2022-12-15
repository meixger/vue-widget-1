<script setup>
import Counter from "./Counter.vue";
</script>

<template>
  <div id="myWidget1">
    <h1 class="title">My Widget 1</h1>
    <Counter />
  </div>
</template>

<style>
#myWidget1 {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<style scoped>
.title {
  color: darkblue;
}
</style>
