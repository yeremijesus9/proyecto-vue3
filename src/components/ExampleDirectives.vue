<script setup>
import { ref } from 'vue'

// v-model and v-for state
const nuevaTarea = ref('')
const tareas = ref([])

function añadirTarea() {
  if (nuevaTarea.value.trim() === '') return
  tareas.value.push(nuevaTarea.value)
  nuevaTarea.value = ''
}

// v-if and v-show state
const mostrar = ref(true)

// v-bind state
const colorClase = ref('verde')
const imagenUrl = ref('https://vuejs.org/images/logo.png')

function cambiarColor() {
  colorClase.value = colorClase.value === 'verde' ? 'azul' : 'verde'
}
</script>

<template>
  <div class="directives-container">
    <h3>Directivas Principales</h3>

    <!-- v-model y v-on (@click) -->
    <section>
      <h4>v-model y v-for</h4>
      <input v-model="nuevaTarea" placeholder="Escribe una tarea" />
      <button v-on:click="añadirTarea">Añadir con v-on</button>
      <button @click="añadirTarea">Añadir con @ (abreviatura)</button>

      <ul>
        <li v-for="(tarea, index) in tareas" :key="index">
          {{ tarea }}
        </li>
      </ul>
    </section>

    <hr />

    <!-- v-if y v-show -->
    <section>
      <h4>v-if y v-show</h4>
      <button @click="mostrar = !mostrar">Toggle Mostrar</button>

      <p v-if="mostrar">Este párrafo se elimina del DOM si es falso (v-if)</p>
      <p v-else>Este es el contenido alternativo de v-if (v-else)</p>

      <p v-show="mostrar">Este párrafo solo se oculta con CSS (v-show)</p>
    </section>

    <hr />

    <!-- v-bind (:) -->
    <section>
      <h4>v-bind</h4>
      <p :class="colorClase">Este párrafo cambia de clase con v-bind</p>
      <img v-bind:src="imagenUrl" alt="Vue Logo" width="50" />
      <br />
      <button @click="cambiarColor">Cambiar clase</button>
    </section>
  </div>
</template>

<style scoped>
.directives-container {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.verde {
  color: green;
  font-weight: bold;
}

.azul {
  color: blue;
  font-weight: bold;
}

section {
  margin-bottom: 20px;
}
</style>
