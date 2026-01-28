<script setup>
import { useCounter } from '@/composables/useCounter'

const { count, increment, decrement, reset } = useCounter(0)
</script>

<template>
  <div>
    <h3>Ejemplo de composable</h3>

    <p>Contador: {{ count }}</p>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
  </div>
</template>
