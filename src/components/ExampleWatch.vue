<script setup>
import { ref, watch } from 'vue'

const nombre = ref('')
const mensaje = ref('')

watch(nombre, (nuevoValor) => {
  if (nuevoValor.trim() === '') {
    mensaje.value = 'El nombre está vacío'
  } else {
    mensaje.value = `Hola, ${nuevoValor}`
  }
})
</script>

<template>
  <div>
    <h3>Ejemplo de watch</h3>

    <input type="text" v-model="nombre" placeholder="Escribe tu nombre" />

    <p>{{ mensaje }}</p>
  </div>
</template>
