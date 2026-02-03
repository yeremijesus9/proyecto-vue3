<template>
  <div class="pagina-principal">
    <BaseNav/>
    <main class="container-principal">
      <TituloSeccion/>
      <PropsEmits
      :integrantes="['Yeremi', 'Marlen', 'German', 'Stiwar']" @enviar="mostrarNombres"
      />
    </main>
    <BaseFooter/>
  </div>
</template>




<script setup>
import BaseNav from '@/components/Marlen/BaseNav.vue'
import TituloSeccion from '@/components/Marlen/TituloSeccion.vue'
import PropsEmits from '@/components/Marlen/PropsEmits.vue';
import BaseFooter from '@/components/Marlen/BaseFooter.vue';

function mostrarNombres() {alert('Se presionó el botòn enviar!');}

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
</style>