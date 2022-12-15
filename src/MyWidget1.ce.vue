<script setup>
import Counter from "./Counter.vue";
</script>

<template>
  <div id="myWidget1">
    <h1 class="title">My Widget 1</h1>
    <button
      class="rounded-full p-2 bg-red-500 border border-red-700 mb-2 color-red-300 font-bold hover:bg-red-600"
    >
      TailWind CSS
    </button>
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
