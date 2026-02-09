<template>
    <div class="contenedor-demo">
        <button @click="visible = true" class="btn-alerta">
            Simular Error Crítico ⚠️
        </button>

        <Teleport to="body">
            <div v-if="visible" class="alerta-flotante">
                <p>🚨 ¡ATENCIÓN! Esto es una alerta teletransportada al BODY.</p>   
                <button @click="visible = false">Entendido</button>
            </div>
        </Teleport>
    </div>
</template>



<script setup>
import { ref } from 'vue';

const visible = ref(false);
</script>


<style scoped>
.contenedor-demo {
  border: 2px dashed #ccc;
  padding: 20px;
  margin: 2rem auto;
  overflow: hidden;
  background-color: #e0faf2; 
  width: 50%;
  border-radius: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button{
font-size: 1.5rem;
border-radius: 1rem;
background-color: aquamarine;
border: 1px solid rgb(121, 244, 203);
cursor: pointer;
}
.alerta-flotante {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ff4444;
  color: white;
  font-size: 2rem;
  padding: 15px;
  text-align: center;
  z-index: 9999; /* Asegura que esté por encima de todo */
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
}
</style>