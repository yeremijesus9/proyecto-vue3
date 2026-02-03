<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h1>Proyecto Vue 3</h1>
    <nav>
      <RouterLink to="/">Yeremi</RouterLink> |
      <RouterLink to="/marlen">Marlen</RouterLink> |
      <RouterLink to="/german">German</RouterLink> |
      <RouterLink to="/stiwar">Stiwar</RouterLink> |
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 1rem;
  border-bottom: 1px solid #ffffff;
  margin-bottom: 2rem;
}

nav {
  margin-top: 1rem;
}

nav a {
  margin-right: 1rem;
  text-decoration: none;
  color: #42b883;
  font-weight: bold;
}

nav a.router-link-active {
  color: #35495e;
  text-decoration: underline;
}
</style>
