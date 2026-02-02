<template>
  <div class="caja-verde">
    <h3>🏷️ Etiqueta: {{ titulo }}</h3>
    
    <button @click="$emit('saludo', '¡Alguien tocó el botón de ' + titulo + '!')">
      Tócame
    </button>
  </div>
</template>

<script setup>
defineProps(['titulo']); // Aquí recibimos el nombre
defineEmits(['saludo']); // Aquí preparamos el "grito"
</script>

<style scoped>
.caja-verde {
  border: 2px solid #42b883;
  padding: 15px;
  border-radius: 10px;
  background-color: #e6fffa;
}
button {
  cursor: pointer;
  background: #42b883;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 5px;
}
</style>