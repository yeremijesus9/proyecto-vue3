<template>
  <div class="demo">
    <h2>⚡ Reactividad Simple</h2>
    
    <div class="section">
      <h3>1. ref() - Para valores</h3>
      <p>Contador: <strong>{{ contador }}</strong></p>
      <button @click="contador++">Sumar 1</button>
    </div>
    
    <div class="section">
      <h3>2. reactive() - Para objetos</h3>
      <p>Usuario: <strong>{{ usuario.nombre }} ({{ usuario.edad }})</strong></p>
      <input v-model="usuario.nombre" placeholder="Cambia nombre">
      <button @click="usuario.edad++">+1 año</button>
    </div>
    
    <div class="section">
      <h3>3. Estado Global</h3>
      <p>Contador Global desde aquí: <strong>{{ props.globalState.contador }}</strong></p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps } from 'vue'

const props = defineProps(['globalState'])

// ref para números/strings
const contador = ref(0)

// reactive para objetos
const usuario = reactive({
  nombre: 'Juan',
  edad: 25
})
</script>

<style scoped>
.demo {
  background: #e3f2fd; /* Light blue */
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  color: #333; /* Dark text */
}
.section {
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
h2, h3 {
  color: #1976d2;
}
button {
  margin: 5px;
  padding: 8px 12px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
