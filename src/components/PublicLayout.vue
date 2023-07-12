<template>
  <div class="public">

  <slot name="public"></slot>
  </div>
</template>

<script setup lang="ts">
import LoginView from '../views/LoginView.vue'


</script>

<style scoped>
.public {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
