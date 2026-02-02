<template>
  <div class="pagina">
    <h1>Mi Explicación Sencilla</h1>

    <p>1. Este es un componente que no cambia:</p>
    <ComponentesSimple />

    <p>2. Estos son componentes que cambian según lo que yo les diga (Props):</p>
    <div class="fila">
      <ComponentesPropsemits titulo="Regalo de Cumpleaños" @saludo="avisar" />
      <ComponentesPropsemits titulo="Caja de Herramientas" @saludo="avisar" />
    </div>

    <h4 v-if="notificacion" class="aviso">{{ notificacion }}</h4>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ComponentesSimple from '@/components/Marlen/ComponentesSimple.vue';
import ComponentesPropsemits from '@/components/Marlen/ComponentesPropsemits.vue';

const notificacion = ref('');

const avisar = (mensaje) => {
  notificacion.value = mensaje;
};
</script>

<style scoped>
.pagina { padding: 20px; font-family: sans-serif; }
.fila { display: flex; gap: 10px; margin-top: 10px; }
.aviso { color: #2c3e50; background: #ffeb3b; padding: 10px; margin-top: 20px; }
</style>