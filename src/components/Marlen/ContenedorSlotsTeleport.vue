<template>
  <div class="tarjeta-personalizada">
    <header class="tarjeta-personalizada__header">
      <slot name="cabecera">Título por defecto</slot>
    </header>

    <section class="tarjeta-personalizada__cuerpo">
      <slot>Este es el contenido si el padre no envía nada</slot>
    </section>

    <footer class="tarjeta-personalizada__footer">
      <slot name="pie" :mensaje="datosDelHijo"></slot>
    </footer>

    <Teleport to="body">
      <div v-if="mostrarAlerta" class="alerta-emergente">
        <p>¡Hola! Soy un Teleport y estoy encima de todo.</p>
        <button @click="mostrarAlerta = false">Cerrar</button>
      </div>
    </Teleport>
    
    <button @click="mostrarAlerta = true">Ver Teleport</button>
  </div>
</template>


<script setup>
import { ref } from 'vue';

const datosDelHijo = "Dato del hijo"; // Esto se lo "prestamos" al padre
const mostrarAlerta = ref(false);    // Controla el Teleport
</script>



<style scoped>
.tarjeta-personalizada {
  width: 60%;
  border: 2px solid #42b983;
  border-radius: 8px;
  background: white;
  margin: 2rem auto;
  color: black;
  text-align: center;
  font-size: 1.2rem;
}


.tarjeta-personalizada__header { 
  background: #00cf82;  padding: 10px; 
}
.tarjeta-personalizada__cuerpo { 
  padding: 20px; 
}
.tarjeta-personalizada__footer { 
  border-top: 1px solid #eee; padding: 10px; font-style: italic; 
}

/* Estilo para el Teleport */
.alerta-emergente {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ff7675;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  z-index: 9999;
}
</style>