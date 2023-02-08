<script setup>
// import { computed, getCurrentInstance, onMounted, onUnmounted, ref } from "vue";
import Counter from "./Counter.vue";
const props = defineProps({
  test222: String
})

// const root = ref(null)
// // const cid = computed(() => root.value?.parentNode.dataset.cid)
// onMounted(() => {
//   try {
//     console.log("onMounted dev ", root.value?.parentNode, props.test222, root.value?.parentNode?.dataset?.cid)
//     console.log("onMounted prod", root.value, props.test222)
//     // const cid = root.value?.parentNode.dataset.cid
//   } catch (error) {
//     console.log("onMounted error", error)
//   }
// })
</script>

<template>
  <div id="myWidget1" ref="root">
    <h1 class="title">My Widget 1</h1>
    <!-- <pre>cid: {{ cid }}</pre> -->
    <pre>test222: {{ test222 }}</pre>
    <button class="rounded-full p-2 bg-red-500 border border-red-700 mb-2 color-red-300 font-bold hover:bg-red-600">
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
