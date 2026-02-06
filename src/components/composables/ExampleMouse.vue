<script setup>
import { useMouse } from '@/composables/useMouse'

const { x, y } = useMouse()
</script>

<template>
  <div class="example-box">
    <h4>Seguimiento del Ratón</h4>
    <p>Mueve el ratón por la pantalla para ver las coordenadas en tiempo real:</p>
    <div class="coordinates">
      <span>X: <strong>{{ x }}</strong></span>
      <span>Y: <strong>{{ y }}</strong></span>
    </div>
    <div class="mouse-preview" :style="{ transform: `translate(${x/20}px, ${y/20}px)` }">
      📍
    </div>
  </div>
</template>

<style scoped>
.example-box {
  color: black;
  padding: 1rem;
  background: #f0f7ff;
  border-radius: 8px;
  border: 1px solid #cce3ff;
  position: relative;
  overflow: hidden;
}
.coordinates {
  display: flex;
  gap: 20px;
  font-size: 1.2rem;
  margin-top: 10px;
}
.mouse-preview {
  font-size: 2rem;
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0.3;
}
h4 {
  margin-top: 0;
  color: #0056b3;
}
</style>
