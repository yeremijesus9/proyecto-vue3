<script setup>
import { ref, provide } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import ComunicacionConApp from './components/Marlen/ComunicacionEntreComp/ComunicacionConApp.vue';


//--EJEMPLO 1: PROPS/EMITS
const mensajeRecibido = ref('');
const manejarMostrarMensaje = (mensaje) => {mensajeRecibido.value = mensaje}; //Funcion que se activa cuando el hijo lanza el Emit
const manejarOcultarMensaje = () => {mensajeRecibido.value = ''};  //Funcion para limpiar el mensaje

// App.vue - <script setup>
const puertoListo = ref(false);

// Función que llamaremos cuando la ruta cambie o el componente se monte
provide('controlarPuerto', (valor) => {
  puertoListo.value = valor;
});
  </script>


<template>
  <header>
    <h1>Proyecto Vue 3</h1>
    <nav>
      <RouterLink to="/">Yeremi</RouterLink>
      <RouterLink to="/marlen">Marlen</RouterLink>
      <RouterLink to="/german">German</RouterLink>
      <RouterLink to="/stiwar">Stiwar</RouterLink>
      <RouterLink to="/composables">Composables</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />


      <Teleport v-if="puertoListo" to="#puerto-de-llegada">
        <div v-if="$route.path === '/marlen'" class="zona-ejemplo">
          <h3 class="titulo-ejemplo">Comunicación Directa: Props y Emits</h3>
          
          <ComunicacionConApp
            nombre="Marlen"
            @mostrar-mensaje="manejarMostrarMensaje"
            @ocultar-mensaje="manejarOcultarMensaje"
          />

          <div v-if="mensajeRecibido" class="pantalla-mensaje"> 
            {{ mensajeRecibido }} 
          </div>
        </div>
      </Teleport>


  </main>
</template>

<style scoped>
.zona-ejemplo{
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  background: #e0faf2;
  border-radius: 1.5rem;
  margin: 1.2rem auto;
  color: black;
  border: 1px solid #b2ebda;
  margin-top: 1.5rem;
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
