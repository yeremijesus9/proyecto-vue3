<template>
    <div class="tarjeta-datos">
        <slot :mensaje="datosDelHijo"></slot>
    </div>
</template>

<script setup>
const datosDelHijo = "¡Hola desde el interior del hijo! 🤖";
</script>

<style scoped>
.tarjeta-datos {
  color: #2c3e50;
  font-size: 1.5rem;
  text-align: center;
  border: 2px solid #42b983;
  padding: 15px;
  border-radius: 8px;
  background-color: #ebf8ff;
  color: red;
}
</style>