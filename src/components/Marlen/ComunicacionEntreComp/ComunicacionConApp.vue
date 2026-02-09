<template>
    <div class="controles-hijo">
        <p>Usuario: <strong>{{ nombre }}</strong></p>

        <div class="botones">
            <button @click="enviarSaludo" class="btn-verde">Enviar</button>  
            <button @click="quitarSaludo" class="btn-rojo">Borrar</button>  
        </div>
    </div>
</template>



<script setup>
// Definimos qué esperamos recibir (Props)
const props = defineProps({
    nombre: String
});

// Definimos qué eventos vamos a emitir (Emits)
const emit = defineEmits(['mostrar-mensaje', 'ocultar-mensaje']);

const enviarSaludo = () => {
    emit('mostrar-mensaje', `¡Hola App.vue! Soy ${props.nombre}!`)};

const quitarSaludo = () => {
    emit('ocultar-mensaje')};    
</script>


<style scoped>
.controles-hijo { 
    text-align: center;
    font-size: 1.3rem;
    color: #084b2d;
 }
.botones{
    width: 100%;
    display: flex;

}
.btn-verde { 
    background: #42b883; 
    color: white; 
    border: none; 
    padding: 1rem 2rem; 
    cursor: pointer; 
    border-radius: 5px; 
    margin-right: 1rem;
    margin-top: 0.5rem;

}
.btn-rojo { 
    background: #ff5f5f; 
    color: white; 
    border: none; 
    padding: 1rem 2rem; 
    cursor: pointer; 
    border-radius: 5px;
    margin-top: 0.5rem;
 }
</style>