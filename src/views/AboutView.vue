<template>
  <MainLayout>
    <template #content>
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    </template>
  </MainLayout>
  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import MainLayout from '@/components/MainLayout.vue';


</script>
