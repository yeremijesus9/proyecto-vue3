<template>
    <div class="class mensaje">
        <h2>Bienvenido, {{ nombre }}</h2>
        <button @click="manejarMostrarMensaje">Mostrar Mensaje</button>  
        <button @click="manejarOcultarMensaje">Ocultar Mensaje</button>  
    </div>
</template>



<script setup>
//Declaramos los eventos que este componente puede emitir
const emit = defineEmits(['mostrar-mensaje', 'ocultar-mensaje']);

//Prop para recibir el nombre del usuario desde el padre
const props = defineProps({
    nombre: {
        type: String,
        required: true
    }
})

// Funciones para manejar clics en los botones
const manejarMostrarMensaje = () => {
    emit('mostrar-mensaje', `¡Hola, ${props.nombre}!`)};

const manejarOcultarMensaje = () => {
    emit('ocultar-mensaje')};
</script>


<style scoped>
.mensaje{
    padding: 1rem;
    border: 1px solid #ccc;
    margin: 1rem 0;}

button{margin-right: 0.5rem;}
</style>