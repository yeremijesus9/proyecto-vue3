<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import ComunicacionConApp from './components/Marlen/ComunicacionConApp.vue';


//--EJEMPLO 1: PROPS/EMITS
const mensajeRecibido = ref('');
const manejarMostrarMensaje = (mensaje) => {mensajeRecibido.value = mensaje}; //Funcion que se activa cuando el hijo lanza el Emit
const manejarOcultarMensaje = () => {mensajeRecibido.value = ''};  //Funcion para limpiar el mensaje
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
    <RouterView />

    <div v-if="$route.path === '/marlen'" class="zona-ejemplo">
      <h2 class="titulo-ejemplo">Comunicación entre Componentes y App.vue</h2>
      <h3 class="titulo-ejemplo">Comunicación Directa: Props y Emits</h3>

      <ComunicacionConApp   
        nombre="Marlen"
        @mostrar-mensaje="manejarMostrarMensaje"
        @ocultar-mensaje="manejarOcultarMensaje"
      />

      <div v-if="mensajeRecibido" class="pantalla-mensaje"> {{ mensajeRecibido }} </div>
    </div>
  </main>
  
</template>

<style scoped>
.zona-ejemplo{
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  margin: 1.2rem auto;
  color: black;
}
h2{
  width: 100%;
  background: #00cf82;
  font-size: 2rem;
}
h3{
  font-size: 1.5rem;
}
.titulo-ejemplo{
  color: black;
  margin-bottom: 1rem;
}
.pantalla-mensaje{
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: #42b883;
  color: white;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 1.3rem;
}

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
