<script setup>
import { ref, onMounted } from 'vue'

const ejemplos = ref([])

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:4000/ejemplos')
        ejemplos.value = await response.json()
    } catch (error) {
        console.error('Error:', error)
    }
})
</script>

<template>
  <div class="fetch-container">
    <h4>Datos desde JSON Server</h4>

    <div v-for="item in ejemplos" :key="item.id" class="card">
      <h5>{{ item.titulo }}</h5>
      <p>{{ item.descripcion }}</p>
      <span>{{ item.completado ? 'Completado' : 'Pendiente' }}</span>
    </div>
  </div>
</template>

<style scoped>
.fetch-container {
  padding: 10px;
}
.card {
  background: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  border-left: 5px solid #42b983;
}
h5 { margin: 0; color: #333; }
p { font-size: 0.9rem; color: #666; margin: 5px 0; }
</style>
