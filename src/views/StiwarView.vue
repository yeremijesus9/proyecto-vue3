<template>
  <div id="demo-page">
    <h1>Ejemplos</h1>

    <!-- Menú simple -->
    <div class="menu">
      <button @click="pagina = 'reactividad'" :class="{ active: pagina === 'reactividad' }">
        Reactividad
      </button>
      <button @click="pagina = 'composition'" :class="{ active: pagina === 'composition' }">
        Composition
      </button>
      <button @click="pagina = 'computed'" :class="{ active: pagina === 'computed' }">
        Computed
      </button>
      <button @click="pagina = 'guia'" :class="{ active: pagina === 'guia' }">
        Explicación de conceptos
      </button>
    </div>

    <!-- Muestra la página actual pasando el estado global como prop -->
    <div class="content-area">
      <component :is="currentComponent" :globalState="global" />
    </div>

    <!-- Estado Global (Tú lo manejas) -->
    <div class="global">
      <h3>🌍 Estado Global</h3>
      <p>
        Contador compartido: <strong>{{ global.contador }}</strong>
      </p>
      <div class="controls">
        <button @click="global.contador++" class="btn-plus">➕ Aumentar</button>
        <button @click="global.contador--" class="btn-minus">➖ Disminuir</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, defineAsyncComponent } from 'vue'

// Controla qué página está activa (reactividad, composition, computed)
const pagina = ref('reactividad')

// Estado global que se compartirá entre todos los componentes
const global = reactive({
  contador: 0,
  usuario: 'Invitado',
})

const ReactividadDemo = defineAsyncComponent(
  () => import('../components/reactividad/ReactividadDemo.vue'),
)
const CompositionDemo = defineAsyncComponent(
  () => import('../components/composition/CompositionDemo.vue'),
)
const ComputedDemo = defineAsyncComponent(() => import('../components/computed/ComputedDemo.vue'))
const Explicacion = defineAsyncComponent(
  () => import('../components/documentation/Explicacion.vue'),
)

const currentComponent = computed(() => {
  if (pagina.value === 'reactividad') return ReactividadDemo
  if (pagina.value === 'composition') return CompositionDemo
  if (pagina.value === 'computed') return ComputedDemo
  if (pagina.value === 'guia') return Explicacion
  return null
})
</script>

<style scoped>
#demo-page {
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  color: #2c3e50; /* Dark blue-grey text */
}

h1 {
  text-align: center;
  color: #42b883;
}

.menu {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 30px 0;
}

.menu button {
  padding: 12px 20px;
  cursor: pointer;
  border: 2px solid #42b883;
  background: white;
  color: #42b883;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.3s;
}

.menu button.active {
  background: #42b883;
  color: white;
}

.content-area {
  min-height: 300px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.global {
  background: #f8f9fa;
  padding: 20px;
  margin-top: 40px;
  border-radius: 12px;
  border: 2px dashed #42b883;
  text-align: center;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.controls button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.btn-plus {
  background: #42b883;
  color: white;
}
.btn-minus {
  background: #e74c3c;
  color: white;
}

/* Ensure all p tags have dark color inside this component */
p {
  color: #2c3e50;
}
</style>
