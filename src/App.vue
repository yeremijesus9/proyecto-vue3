<script setup>
import { RouterView, RouterLink } from 'vue-router'
import MensajeComponente from './components/Marlen/MensajeComponente.vue';

//Funciones para manejar los eventos del componente hijo
const manejarMostrarMensaje = (mensaje) => {
  console.log(mensaje)};

const manejarOcultarMensaje = () =>   {
  console.log('Mensaje ocultado')};
</script>

<template>
  <header>
    <h1>Proyecto Vue 3</h1>
    <nav>
      <RouterLink to="/">Yeremi</RouterLink>
      <RouterLink to="/marlen">Marlen</RouterLink>
      <RouterLink to="/german">German</RouterLink>
      <RouterLink to="/stiwar">Stiwar</RouterLink>
    </nav>
  </header>

  <main>
    <MensajeComponente
    v-if="$route.path === '/marlen'"
    nombre="Marlen"
    @mostrar-mensaje="manejarMostrarMensaje"
    @ocultar-mensaje="manejarOcultarMensaje"
    />
    
    <RouterView />
  </main>
</template>

<style scoped>
header {
  max-height: none;
  padding: 0;
  border: none;
  margin-bottom: 0;
}

h1 {
  margin: 0;
}

nav {
  margin-top: 0;
}

nav a {
  margin-right: 0;
}
</style>
