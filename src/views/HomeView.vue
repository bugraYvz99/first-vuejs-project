<script setup lang="ts">
import MainLayout from '@/components/MainLayout.vue';
import TheWelcome from '../components/TheWelcome.vue'

</script>

<template>
  <MainLayout>
    <template #content>
      <div>
        <TheWelcome />
     </div>
    </template>
  </MainLayout>
</template>
