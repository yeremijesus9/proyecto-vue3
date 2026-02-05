<template>
    <div class="contenedor">
        <p>Comunicación a Larga Distancia: Provide e Inject</p>
        <NietoInject/>
    </div>
</template>

<script setup>
import NietoInject from './NietoInject.vue'
</script>

<style scoped>
.contenedor {
    margin: 2rem auto;
    width: 60%;
    color: black;
    background-color: #e0faf2;
    text-align: center;
    font-size: 1.5rem;
    border-radius: 1.5rem;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border: 1px solid #b2ebda;
}
</style>