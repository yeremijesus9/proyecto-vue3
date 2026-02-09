<script setup>
import { RouterView, RouterLink } from 'vue-router'

  </script>


<template>
  <header>
    <h1>Proyecto Vue 3</h1>
    <nav>
      <RouterLink to="/">Yeremi</RouterLink>
      <RouterLink to="/marlen">Marlen</RouterLink>
      <RouterLink to="/german">German</RouterLink>
      <RouterLink to="/stiwar">Stiwar</RouterLink>
      <RouterLink to="/composables">Composables</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />

  </main>
</template>

<style scoped>
header {
  max-height: none;
  padding: 0;
  border: none;
  margin-bottom: 0;
}

h1 {
  margin: 0;
}

nav {
  margin-top: 0;
}

nav a {
  margin-right: 0;
}
</style>
