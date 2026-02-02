<script setup>
import ExampleDirectives from '@/components/ExampleDirectives.vue'
import ExampleComputed from '@/components/ExampleComputed.vue'
import ExampleWatch from '@/components/ExampleWatch.vue'
import ExampleComposable from '@/components/ExampleComposable.vue'
</script>

<template>
  <div class="home">
    <h2 class="title">Ejemplos en Vue 3</h2>

    <transition-group name="card" tag="div">
      <div class="card" key="1">
        <ExampleDirectives />
      </div>

      <div class="card" key="2">
        <ExampleComputed />
      </div>

      <div class="card highlight" key="3">
        <ExampleWatch />
      </div>

      <div class="card" key="4">
        <ExampleComposable />
      </div>
    </transition-group>
  </div>
</template>

<style scoped>
.home {
  max-width: 800px;
  margin: auto;
}

.title {
  margin-bottom: 20px;
}

.card {
  color: black;
  background: #e6f7f1;
  border-radius: 12px;
  padding: 18px;
  margin-bottom: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
}

.highlight {
  background: #e6f7f1;
}

.card-enter-active {
  transition: all 0.4s ease;
}

.card-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

/* Estilos para los componentes dentro de las cards */
.card :deep(.directives-container) {
  background: transparent;
  border: none;
  padding: 0;
  border-radius: 0;
}

.card :deep(h3) {
  color: #000000;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ddd;
}

.card :deep(h4) {
  color: #2c3e50;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
}

.card :deep(section) {
  margin-bottom: 1.2rem;
}

.card :deep(hr) {
  border: none;
  height: 1px;
  background: #ddd;
  margin: 1.2rem 0;
}

.card :deep(input) {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.9rem;
  margin-right: 8px;
  background: white;
  transition: border-color 0.3s ease;
}

.card :deep(input:focus) {
  outline: none;
  border-color: #42b983;
}

.card :deep(button) {
  padding: 8px 14px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 8px;
  margin-bottom: 8px;
}

.card :deep(button:hover) {
  background: #369870;
  transform: translateY(-1px);
}

.card :deep(ul) {
  list-style: none;
  padding: 0;
  margin-top: 0.8rem;
}

.card :deep(li) {
  padding: 8px 12px;
  background: white;
  border-radius: 4px;
  margin-bottom: 6px;
  border-left: 3px solid #42b983;
}

.card :deep(.verde) {
  color: #42b983;
  font-weight: bold;
}

.card :deep(.azul) {
  color: #3b8ddf;
  font-weight: bold;
}

.card :deep(img) {
  margin: 10px 0;
}
</style>
