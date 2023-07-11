<template>
  <div class="login">
    <h2>Admin Login</h2>

    <input v-model="username" placeholder="Username" type="text" />
    <input v-model="password" placeholder="Password" type="password" />
    <button @click="login">Giriş Yap</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isLoggedIn = ref(false)

const login = () => {
  isLoggedIn.value = true

  localStorage.setItem('isLoggedIn', 'true')
}
const username = ref('')
const password = ref('')
console.log(username)
</script>
<style scoped>
.login {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
