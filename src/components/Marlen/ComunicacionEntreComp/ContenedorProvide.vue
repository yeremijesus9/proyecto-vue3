<script setup>
import NietoInject from './NietoInject.vue'
</script>

<template>
    <div class="contenedor">
        <p class="subtitulo">Comunicación a Larga Distancia: Provide e Inject</p>
        <h2>Padre (lugar físico de encuentro)</h2>
        <NietoInject/>
    </div>
</template>


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
    margin-top: 12rem;
}
.subtitulo{
    width: 100%;
    font-size: 1.5rem;
    background-color: #42b983;
    color: white;
    font-weight: bold;
    border-radius: 1rem;
}
</style>