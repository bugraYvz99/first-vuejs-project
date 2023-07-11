<template>
  <div class="login">
    <h2>Kullanıcı Girişi</h2>
    <input placeholder="Username" type="text" />
    <input placeholder="Password" type="password" />
    <button @click="login">Giriş Yap</button>
    <!-- Kullanıcı girişi için gerekli form alanları ve butonlar burada yer alır -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isLoggedIn = ref(false)
const login = () => {
  isLoggedIn.value = true
  window.location.href = '/'
}
</script>
<style scoped>
.login {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
