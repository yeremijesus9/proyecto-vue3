<script setup>const mostrarLazy = ref(false)
const intervalId = ref(null)
const colorFiesta = ref('#ffffff')
import { useRouter, useRoute } from 'vue-router'
import { ref, defineAsyncComponent, onUnmounted } from 'vue'
const toggleFiesta = () => {
  // Usamos .value para acceder y modificar la referencia
  if (intervalId.value) {
    clearInterval(intervalId.value)
    intervalId.value = null
    colorFiesta.value = '#ffffff' // Reset al color original
  } else {
    // Guardamos el ID del intervalo en .value
    intervalId.value = setInterval(() => {
      // Genera un color aleatorio hexadecimal
      colorFiesta.value = `#${Math.floor(Math.random()*16777215).toString(16)}`
    }, 500)
  }
}

// 1. Obtenemos la instancia del router (para realizar acciones)
const router = useRouter()

// 2. Obtenemos la ruta actual (para leer información)
const route = useRoute()

const irAlInicio = () => {
  // Ejemplo de navegación programática: ideal para usar dentro de funciones
  router.push('/')
}

const volverAtras = () => {
  // Navegación en el historial
  router.go(-1)
}



// Limpiamos el intervalo si el usuario cambia de página para no consumir memoria
onUnmounted(() => {
  if (intervalId.value) clearInterval(intervalId.value)
})

// --- EJEMPLO BUILD Y ESTÁTICOS ---
const buildLogs = ref([])
const isBuilding = ref(false)
const progress = ref(0)

const simularBuild = () => {
  if (isBuilding.value) return
  isBuilding.value = true
  buildLogs.value = ['> npm run build']
  progress.value = 5
  
  const steps = [
    { msg: 'vite v5.0.0 building for production...', delay: 800 },
    { msg: 'transforming...', delay: 1500 },
    { msg: '✓ 42 modules transformed.', delay: 2200 },
    { msg: 'rendering chunks...', delay: 3000 },
    { msg: 'dist/index.html                  0.45 kB', delay: 3800 },
    { msg: 'dist/assets/index-XyZ12.js     145.23 kB', delay: 4000 },
    { msg: '✓ Built in 4.2s', delay: 4500 }
  ]

  steps.forEach(({ msg, delay }) => {
    setTimeout(() => {
      buildLogs.value.push(msg)
      progress.value = Math.min(progress.value + 15, 100)
      if (msg.includes('Built')) {
        isBuilding.value = false
        progress.value = 100
      }
    }, delay)
  })
}
</script>

<template>
  <div class="about">
    <h1>Ejemplo de Router</h1>
    <p>Estás en la ruta: <strong>{{ route.path }}</strong></p>

    <div class="botones">
      <button @click="irAlInicio">Ir al Inicio (router.push)</button>
      <button @click="volverAtras">Volver Atrás (router.go)</button>
    </div>

    <hr class="separador" />

    <h2>Ejemplo de Lazy Loading</h2>
    <p>Abre la pestaña "Network" de tu navegador para ver la magia.</p>
    
    <button @click="mostrarLazy = !mostrarLazy" class="btn-lazy">
      {{ mostrarLazy ? 'Ocultar Componente' : 'Cargar Componente (Lazy)' }}
    </button>

    <!-- El componente solo se descarga si v-if es true -->
    <LazyComponent v-if="mostrarLazy" />

    <hr class="separador" />

    <h2>Efecto Visual: Modo Fiesta</h2>
    <div class="fiesta-box" :style="{ backgroundColor: colorFiesta }">
      <p>¡La reactividad también sirve para estilos CSS!</p>
      <button @click="toggleFiesta" class="btn-fiesta">
        {{ intervalId ? 'Apagar Fiesta 🛑' : 'Encender Fiesta 🎉' }}
      </button>
      
    </div>

    <hr class="separador" />

    <!-- SECCIÓN BUILD Y ESTÁTICOS -->
    <h2>Build y Archivos Estáticos</h2>

    <div class="static-info">
      <h3>📂 ¿Dónde guardo mis imágenes?</h3>
      <div class="folder-compare">
        <div class="folder">
          <strong>/public</strong>
          <p>Se sirven tal cual. Usar para favicon, robots.txt o imágenes fijas.</p>
          <code>&lt;img src="/logo.png" /&gt;</code>
        </div>
        <div class="folder">
          <strong>/src/assets</strong>
          <p>Vite las procesa, optimiza y les pone hash.</p>
          <code>import logo from '@/assets/logo.png'</code>
        </div>
      </div>
    </div>

    <div class="build-simulator">
      <h3>🔨 Simulador de Build</h3>
      <button @click="simularBuild" :disabled="isBuilding" class="btn-build">
        {{ isBuilding ? 'Construyendo...' : 'Simular npm run build' }}
      </button>
      <div class="progress-bar"><div class="fill" :style="{ width: progress + '%' }"></div></div>
      <div class="terminal" v-if="buildLogs.length > 0">
        <div v-for="(log, i) in buildLogs" :key="i" class="log-line">{{ log }}</div>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}

.botones {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.separador {
  width: 100%;
  margin: 30px 0;
  border: 1px solid #ccc;
}

.btn-lazy {
  background-color: #42b883; /* Verde Vue */
  color: white;
}

.fiesta-box {
  margin-top: 20px;
  padding: 30px;
  border-radius: 15px;
  border: 2px dashed #ccc;
  transition: background-color 0.5s ease;
  text-align: center;
  width: 200%;
  max-width: 400px;
}

.btn-fiesta {
  margin-top: 10px;
  font-size: 1.1em;
}

/* Estilos para la sección de Build y Estáticos */
.static-info {
  width: 100%;
  margin-bottom: 20px;
}
.folder-compare {
  display: flex;
  gap: 10px;
  font-size: 0.9em;
}
.folder {
  flex: 1;
  background: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #eee;
}
.folder code {
  display: block;
  background: #333;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  font-size: 0.8em;
  margin-top: 5px;
}

.build-simulator {
  width: 100%;
  background: #2c3e50;
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: left;
}
.btn-build {
  background: #42b883;
  color: white;
  width: 100%;
  margin-bottom: 10px;
}
.progress-bar {
  height: 5px;
  background: #555;
  margin-bottom: 10px;
  border-radius: 2px;
}
.fill { height: 100%; background: #42b883; transition: width 0.3s; }
.terminal { font-family: monospace; font-size: 0.85em; color: #42b883; }
.log-line { margin-bottom: 2px; }
</style>
