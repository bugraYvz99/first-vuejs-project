<template>
  <div class="layout">
    <MainNavbar />

    <div class="sidebar" :style="{ gridArea: 'sidebar' }">
      <h1>Side Menu</h1>
    </div>

    <div class="content" :style="{ gridArea: 'content' }">
      <slot name="content"></slot>
    </div>
    <div class="footer" :style="{ gridArea: 'footer', backgroundColor: 'aqua' }">
      <div>footer</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainNavbar from './MainNavbar.vue'

</script>

<style>
.layout {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-template-areas:
    'header header header header header header'
    'sidebar sidebar content content content content '
    'sidebar sidebar content content content content '
    'sidebar sidebar content content content content'
    'sidebar sidebar content content content content'
    'footer footer footer footer footer footer';
  min-height: max-content;
}

.content {
  grid-area: content;
  /* Content stilini burada özelleştirin */
}
.sidebar {
  background-color: grey;
}
header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: aqua;
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 1rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
