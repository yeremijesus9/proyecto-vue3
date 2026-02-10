<script setup>
import { ref, provide } from 'vue';
import BaseNav from '@/components/Marlen/Bases/BaseNav.vue'
import TituloSeccion from '@/components/Marlen/Bases/TituloSeccion.vue'
import ParentChild from '@/components/Marlen/ComunicacionEntreComp/ParentChild.vue';
import ContenedorProvide from '@/components/Marlen/ComunicacionEntreComp/ContenedorProvide.vue';
import SlotsCajaSimple from '@/components/Marlen/SlotsComponentes/SlotsCajaSimple.vue';
import SlotsConNombre from '@/components/Marlen/SlotsComponentes/SlotsConNombre.vue';
import SlotsConAlcance from '@/components/Marlen/SlotsComponentes/SlotsConAlcance.vue';
import ComponenteTeleport from '@/components/Marlen/ComponenteTeleport.vue';
import BaseFooter from '@/components/Marlen/Bases/BaseFooter.vue';

/* ------------------------------------------------------
FUNCION PARA ACTUAR COMO RECEPTOR DE PARENTCHILD
--------------------------------------------------------*/
 function mostrarNombres() {
  alert("¡El Padre recibió el evento del Hijo!");
 }

 /*---------------------------------------------------------
 EJEMPLO 2: PROVIDE/INJECT (La señal para el Nieto)
 -----------------------------------------------------------*/
  const nombreUsuario = ref('Javascript'); //El dato Original

// El abuelo grita el nombre para quien lo quiera escuchar
  provide('usuarioConectado', nombreUsuario)    


 /*---------------------------------------------------------
  Variable para controlar los botones de slots 
  ---------------------------------------------------------*/
 const mostrarSlots = ref(false);

 //funcion para activar el cambio
 const activarSlots = () => {
  mostrarSlots.value = true;
 }
 </script>


<template>
  <div class="pagina-principal">
    <BaseNav/>
    <main class="container-principal">

      <TituloSeccion titulo="Comunicación entre Componentes"/>
      <ParentChild
      :integrantes="['Yeremi', 'Marlen', 'German', 'Stiwar']" @enviar="mostrarNombres"
      />

      <ContenedorProvide/>
      <div class="contenedor-abuelo">
        <h1>Soy el abuelo</h1>
        <input v-model="nombreUsuario">
      </div>
      
      
      <div class="separador-Slots">
        <TituloSeccion titulo="Slots"/>
        <div class="contenedor-boton">
          <button @click="activarSlots" class="btn-demo">🚀 Cargar Contenido Dinámico</button>
        </div>

        <div class="contenedor-slots">
          <SlotsCajaSimple>
            <div v-if="mostrarSlots">
              <h3>(Default Slot)</h3>
              <h4>Slot por Defecto</h4>
              <p><hr> Hola, yo soy el contenido del padre</p>
            </div>
            <p v-else>📭 Esperando contenido...</p>
          </SlotsCajaSimple>


          <SlotsConNombre>
            <template #foto>
              <h3>(Named Slots)</h3>
              <h4 class="slots-name">Slots con Nombre</h4>
              <img src="../assets/logo.svg" width="100px" alt="logo vue">
            </template>
            <p>Stiwar Developer</p>
            <template #redes>
              <a href="https://github.com/yeremijesus9/proyecto-vue3/branches/active">Git Hub</a>
            </template>
          </SlotsConNombre>

          
          <SlotsConAlcance v-slot="{mensaje}">
            <div v-if="mostrarSlots">
              <h3>(Scoped Slots)</h3>
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


<style scoped>
.contenedor-boton {
  display: flex;      
  justify-content: center; 
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
.contenedor-abuelo{
  margin: auto;
  width: 20%;
  border: 2px solid red;
  background-color: #3b5d4e;
  color: black;
  border-radius: 1rem;
  text-align: center;
}
input{
  text-align: center;
  border-radius: 0.5rem;
}
.separador-Slots{
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
h3{
  color: black;
  font-size: 1.5rem;
}
</style>