<template >
  <PublicLayout>
    <template #public>
      <div>
        <div v-if="showAdminLogin">
          <AdminLogin />
        </div>
        <div v-else>
          <UserLogin />
        </div>
        <button @click="toggleLoginMode">
          <span v-if="showAdminLogin">Show admin login</span>
          <span v-else>Show user login</span>
        </button>
      </div>
    </template>
  </PublicLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AdminLogin from '../components/AdminLogin.vue'
import UserLogin from '../components/UserLogin.vue'
import PublicLayout from '@/components/PublicLayout.vue'

const showAdminLogin = ref(true)

const toggleLoginMode = () => {
  showAdminLogin.value = !showAdminLogin.value
}
</script>

<style>
</style>
