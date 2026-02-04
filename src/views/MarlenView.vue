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
import { provide } from 'vue';
import BaseNav from '@/components/Marlen/BaseNav.vue'
import TituloSeccion from '@/components/Marlen/TituloSeccion.vue'
import PropsEmits from '@/components/Marlen/PropsEmits.vue';
import BaseFooter from '@/components/Marlen/BaseFooter.vue';
import ContenedorProvide from '@/components/Marlen/ContenedorProvide.vue';
import ContenedorSlotsTeleport from '@/components/Marlen/ContenedorSlotsTeleport.vue';

function mostrarNombres() {alert('Se presionó el botòn enviar!');}

//Dato compartido a larga distancia
provide('mensajeGlobal', 'Este mensaje viene desde MarlenView')
</script>



<style scoped>
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