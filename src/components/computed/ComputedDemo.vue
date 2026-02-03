<template>
  <div class="demo">
    <h2>Computed & Watch</h2>

    <div class="section">
      <h3>1. computed() - Valor calculado</h3>
      <input v-model="texto" placeholder="Escribe algo..." />
      <p>
        Texto al revés: <strong>{{ textoReves }}</strong>
      </p>
      <p>
        Longitud: <strong>{{ longitud }} caracteres</strong>
      </p>
    </div>

    <div class="section">
      <h3>2. watch() - Observar cambios</h3>
      <p>
        Contador: <strong>{{ contador }}</strong>
      </p>
      <button @click="contador++">Aumentar (+1)</button>
      <p v-if="ultimoCambio">
        Registro: <em>{{ ultimoCambio }}</em>
      </p>
    </div>

    <div class="section">
      <h3>3. watchEffect() - Reactivo automático</h3>
      <p>
        Cambios detectados en el input: <strong>{{ cuentaCambios }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, watchEffect } from 'vue'


// computed() crea valores que se recalculan automáticamente
const texto = ref('')

const textoReves = computed(() => {
  return texto.value.split('').reverse().join('')
})

const longitud = computed(() => texto.value.length)


// watch() observa cambios específicos y ejecuta código
const contador = ref(0)
const ultimoCambio = ref('')

watch(contador, (nuevoValor, viejoValor) => {
  ultimoCambio.value = `Cambió de ${viejoValor} a ${nuevoValor}`
})


// watchEffect() ejecuta código automáticamente cuando cambia cualquier dependencia
const cuentaCambios = ref(0)

watchEffect(() => {
  // Se ejecuta cada vez que texto.value cambia
  if (texto.value) {
    cuentaCambios.value++
  }
})
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
  width: 100%;
  box-sizing: border-box;
}
</style>
