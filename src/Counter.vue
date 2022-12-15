<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<template>
  <button class="btnCounter" type="button" @click="count++">
    count is {{ count }}
  </button>
</template>

<style lang="scss" scoped>
$btnColor: hsl(215 100% 50%);
$btnColorBorder: hsl(215 100% 25%);
$btnColorBg: hsl(215 100% 90%);
$btnColorBgHover: hsl(215 100% 80%);

.btnCounter {
  border: solid 2px $btnColorBorder;
  background-color: $btnColorBg;
  padding: 0.5rem;
  border-radius: 9999px;
  color: $btnColor;
  font-weight: bold;
}
.btnCounter:hover {
  background-color: $btnColorBgHover;
}
</style>
