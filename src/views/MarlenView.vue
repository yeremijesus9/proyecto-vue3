<template>
  <div class="pagina-principal">
    <BaseNav/>
    <main class="container-principal">

      <TituloSeccion titulo="Componentes"/>
      <ParentChild
      :integrantes="['Yeremi', 'Marlen', 'German', 'Stiwar']" @enviar="mostrarNombres"
      />

      
      <div class="separador-titulo">
        <TituloSeccion titulo="Comunicación entre Componentes y App.vue"/>
        <div id="puerto-de-llegada"></div>   <!-- AQUI QUIERO QUE APAREZCA PROPS/EMIT QUE ESTA EN APP.VUE CON TELEPORT -->
      </div>
      <ContenedorProvide/>
      <div class="contenedor-boton">
        <button @click="dispararSeñal" class="btn-demo">Activar Inyección</button>
      </div>
      
      
      <div class="separador-Slots">
        <TituloSeccion titulo="Slots"/>
        <div class="contenedor-boton">
          <button @click="activarSlots" class="btn-demo">🚀 Cargar Contenido Dinámico</button>
        </div>
        <div class="contenedor-slots">
          <SlotsCajaSimple>
            <div v-if="mostrarSlots">
              <h4>Slot por Defecto</h4>
              <p><hr> Hola, yo soy el contenido del padre</p>
            </div>
            <p v-else>📭 Esperando contenido...</p>
          </SlotsCajaSimple>

          <SlotsConNombre>
            <template #foto>
              <h4 class="slots-name">Slots con Nombre</h4>
              <img src="../assets/logo.svg" width="100px" alt="">
            </template>
            <p>Stiwar Developer</p>
            <template #redes>
              <a href="https://github.com/yeremijesus9/proyecto-vue3/branches/active">Git Hub</a>
            </template>
          </SlotsConNombre>

          <SlotsConAlcance v-slot="{mensaje}">
            <div v-if="mostrarSlots">
              <h4>Slots con Alcance</h4>
              <p><hr><strong>{{ mensaje }}</strong></p>
            </div>
            <p v-else>🔄 Procesando datos del hijo...</p>
          </SlotsConAlcance>
        </div>    
      </div>
      <TituloSeccion titulo="Teleport"/>
      <ComponenteTeleport />
    </main>
    <BaseFooter/>
  </div>
</template>




<script setup>
import { ref, provide, inject, onMounted, onUnmounted } from 'vue';
import BaseNav from '@/components/Marlen/BaseNav.vue'
import TituloSeccion from '@/components/Marlen/TituloSeccion.vue'
import ParentChild from '@/components/Marlen/ParentChild.vue';
import ContenedorProvide from '@/components/Marlen/ComunicacionEntreComp/ContenedorProvide.vue';
import SlotsCajaSimple from '@/components/Marlen/SlotsComponentes/SlotsCajaSimple.vue';
import SlotsConNombre from '@/components/Marlen/SlotsComponentes/SlotsConNombre.vue';
import SlotsConAlcance from '@/components/Marlen/SlotsComponentes/SlotsConAlcance.vue';
import ComponenteTeleport from '@/components/Marlen/ComponenteTeleport.vue';
import BaseFooter from '@/components/Marlen/BaseFooter.vue';



/* ------------------------------------------------------
FUNCION PARA ACTUAR COMO RECEPTOR DE LA LINEA 8
--------------------------------------------------------*/
 function mostrarNombres() {
 }
/* ----------------------------------------------------------
PARA PODER MOVER EL PROPS/EMITS DE FOOTER AL LUGAR QUE ESTA
------------------------------------------------------------*/
// Recogemos la función que nos envió App.vue
const avisarAlPadre = inject('controlarPuerto');

onMounted(() => {
  // Cuando el componente aparece en pantalla, avisamos que el puerto existe
  avisarAlPadre(true);
});

onUnmounted(() => {
  // Cuando nos vamos a otra ruta, avisamos que el puerto ya no está
  avisarAlPadre(false);
});

 /*---------------------------------------------------------
 EJEMPLO 2: PROVIDE/INJECT (La señal para el Nieto)
 -----------------------------------------------------------*/
  const mensajeParaElNieto = ref('🔴 Esperando señal ...');
  provide('mensajeGlobal', mensajeParaElNieto)   //Se lanza la señal con la clave 'mensajeGlobal' que es la que busca el Nieto
 
  const dispararSeñal = () => {
    mensajeParaElNieto.value = '🟢 ¡Señal recibida desde MarlenViews!';
 };

 /*---------------------------------------------------------
  Variable para controlar los botones de slots 
  ---------------------------------------------------------*/
 const mostrarSlots = ref(false);
 //funcion para activar el cambio
 const activarSlots = () => {
  mostrarSlots.value = true;
 }
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
  font-size: 1rem;
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
.separador-titulo, .separador-Slots{
  padding-top: 5rem;
}
.contenedor-slots {
  display: flex;         
  flex-wrap: wrap;       
  justify-content: center;
  align-items: flex-start; 
  gap: 20px;             
  margin-top: 30px;
  margin-bottom: 6rem;
}
.contenedor-slots > * {
  flex: 1;              
  min-width: 150px;      
  max-width: 350px;   
}  
h4{
  color: #42b883;
  font-weight: bold;
}
.slots-name{
  font-size: 1.5rem;
}
</style>