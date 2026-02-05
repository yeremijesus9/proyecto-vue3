<template>
  <div class="pagina-principal">
    <BaseNav/>
    <main class="container-principal">

      <TituloSeccion titulo="Componentes"/>
      <PropsEmits
      :integrantes="['Yeremi', 'Marlen', 'German', 'Stiwar']" @enviar="mostrarNombres"
      />

      <div class="separador-titulo">
        <TituloSeccion titulo="Comunicación entre Componentes y App.vue"/>
      </div>
      <ContenedorProvide/>

      <div class="contenedor-boton">
        <button @click="dispararSeñal" class="btn-demo">Activar Inyección</button>
      </div>


      <div class="separador-SlotsTeleport">
       <TituloSeccion titulo="Slots y Teleport"/>
       <ContenedorSlotsTeleport>
        <template #cabecera>
          <h3>Ejemplo de Contenedor flexible</h3>
        </template>
        <p>Este texto se inyecta desde la Vista (Padre) usando Slots.</p>
        <template #pie="{mensaje}">
          <small>Info del hijo: {{ mensaje }}</small>
        </template>
       </ContenedorSlotsTeleport>       
      </div>

    </main>
    <BaseFooter/>
  </div>
</template>




<script setup>
import { ref, provide } from 'vue';
import BaseNav from '@/components/Marlen/BaseNav.vue'
import TituloSeccion from '@/components/Marlen/TituloSeccion.vue'
import PropsEmits from '@/components/Marlen/PropsEmits.vue';
import ContenedorProvide from '@/components/Marlen/ContenedorProvide.vue';
import ContenedorSlotsTeleport from '@/components/Marlen/ContenedorSlotsTeleport.vue';
import BaseFooter from '@/components/Marlen/BaseFooter.vue';

  // --- EJEMPLO 2: PROVIDE/INJECT (La señal para el Nieto) ---
  const mensajeParaElNieto = ref('🔴 Esperando señal ...');
  provide('mensajeGlobal', mensajeParaElNieto)   //Se lanza la señal con la clave 'mensajeGlobal' que es la que busca el Nieto
 
  const dispararSeñal = () => {
    mensajeParaElNieto.value = '🟢 ¡Señal recibida desde MarlenViews!';
 };
 
function mostrarNombres() {alert('Se presionó el botòn enviar!');}
</script>



<style scoped>
.contenedor-boton {
  display: flex;      
  justify-content: center; 
  margin: 20px 0;      
}
.btn-demo{
  background-color: #2c3e50;
  color: #42b883;
  border: 2px solid #42b883;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}
.btn-demo:hover {
  background-color: #42b883;
  color: white;
}

.pagina-principal{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.container-principal{
  flex-grow: 1;
  padding: 2rem;
}
.separador-titulo, .separador-SlotsTeleport{
  padding-top: 5rem;
}
</style>