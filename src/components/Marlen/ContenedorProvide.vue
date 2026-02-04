<template>
    <div class="contenedor">
        <p>Componente Intermedio</p>
        <NietoInject/>
    </div>
</template>

<script setup>
import NietoInject from './NietoInject.vue'
</script>

<style scoped>
.contenedor {
    margin: 2rem auto;
    width: 50%;
    color: black;
    background-color: #e0faf2;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 1.5rem;
}
</style>