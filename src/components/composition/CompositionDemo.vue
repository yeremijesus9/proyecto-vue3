<template>
  <div class="demo">
    <h2>🔧 Composition API</h2>

    <div class="section">
      <h3>1. setup() y ref()</h3>
      <p>
        Mensaje: <strong>{{ mensaje }}</strong>
      </p>
      <button @click="cambiarMensaje">Cambiar Mensaje</button>
    </div>

    <div class="section">
      <h3>2. reactive()</h3>
      <p>
        Objeto reactivo: <strong>{{ objeto.nombre }}</strong>
      </p>
      <input v-model="objeto.nombre" placeholder="Nombre" />
    </div>

    <div class="section">
      <h3>3. Composable personalizado</h3>
      <p>
        Estado del Toggle: <strong>{{ toggle.estado.value ? 'ENCENDIDO' : 'APAGADO' }}</strong>
      </p>
      <button @click="toggle.cambiar">Alternar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// ==================== COMPOSABLE PERSONALIZADO ====================
// Un composable es una función que encapsula lógica reutilizable
function useToggle() {
  const estado = ref(false) // estado: false | true
  const cambiar = () => (estado.value = !estado.value) // alterna el valor
  return { estado, cambiar }
}

// ==================== REF() - Ejemplo básico ====================
const mensaje = ref('Hola Vue 3')
const cambiarMensaje = () => {
  mensaje.value = '¡Mensaje actualizado con éxito!'
}

// ==================== REACTIVE() - Para objetos ====================
const objeto = reactive({
  nombre: 'Ana',
  edad: 30,
})

// ==================== USAR EL COMPOSABLE ====================
const toggle = useToggle()
</script>

<style scoped>
.demo {
  background: #e3f2fd;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  color: #333;
}
.section {
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
h2,
h3 {
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
