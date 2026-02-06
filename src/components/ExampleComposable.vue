<script setup>
import { useCounter } from '@/composables/useCounter'

const { count, increment, decrement, reset } = useCounter(0)
</script>



<template>
  <div class="composable-example">
    <h3>Ejemplo de Contador</h3>

    <div class="counter-display">
      <span>Valor actual:</span>
      <strong class="count-value">{{ count }}</strong>
    </div>

    <div class="actions">
      <button @click="increment" title="Incrementar">+</button>
      <button @click="decrement" title="Decrementar">-</button>
      <button @click="reset" class="btn-reset">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.composable-example {
  padding: 5px 0;
}

.counter-display {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.count-value {
  font-size: 1.8rem;
  color: #42b983;
}

.actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn-reset {
  background: #2c3e50 !important;
}

.btn-reset:hover {
  background: #1a252f !important;
}
</style>
