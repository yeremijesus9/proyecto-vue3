<template>
  <div>
    <BaseNav/>
  </div>

  <div>
    <TituloSeccion/>
  </div>

  <div>
    <PropsEmits
    :integrantes="['Yeremi', 'Marlen', 'German', 'Stiwar']" @enviar="mostrarNombres"
    />
  </div>

  <div>
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

</style>