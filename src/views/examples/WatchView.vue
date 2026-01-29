<script setup>
import ExampleWatch from '@/components/ExampleWatch.vue'
</script>

<template>
  <div class="example-container">
    <router-link to="/" class="boton-accion boton-secundario max-w-max mb-6">
      <span class="material-icons-round text-sm">arrow_back</span> Volver al Dashboard
    </router-link>
    <ExampleWatch />
  </div>
</template>

<style scoped>
.example-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
