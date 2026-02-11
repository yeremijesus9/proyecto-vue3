<script setup>
import { ref, computed, reactive } from 'vue'

// Ejemplo con ref
const precio = ref(10)
const cantidad = ref(1)

// Ejemplo con reactive (para objetos complejos)
const formulario = reactive({
  usuario: '',
  email: '',
})

const total = computed(() => {
  return precio.value * cantidad.value
})
</script>

<template>
  <div>
    <h3>Ejemplo de computed y reactive</h3>

    <div class="reactive-example">
      <h4>Uso de reactive:</h4>
      <input v-model="formulario.usuario" placeholder="Usuario" />
      <p>Valor en reactive: {{ formulario.usuario }}</p>
    </div>

    <hr />

    <div class="computed-example">
      <h4>Uso de ref y computed:</h4>
      <label>
        Precio:
        <input type="number" v-model.number="precio" />
      </label>

      <br />

      <label>
        Cantidad:
        <input type="number" v-model.number="cantidad" />
      </label>

      <p>Total: {{ total }} €</p>
    </div>
  </div>
</template>
