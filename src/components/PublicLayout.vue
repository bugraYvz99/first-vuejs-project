<template>
  <div class="public">
    <LoginView />
  </div>
</template>

<script lang="ts">
import LoginView from '../views/LoginView.vue'

export default {
  components: {
    LoginView
  },
  setup() {}
}
</script>

<style scoped>
.public {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
