<script setup>
import { inject } from 'vue';

const nombre = inject('usuarioConectado')
</script>

<template>
    <h3>Soy el Nieto</h3>
    <p>Bienvenido de nuevo a: <b>{{ nombre }}</b></p>

</template>



<style scoped>
p{
    width: 100%;
    margin-top: 5rem;
    border-radius: 2rem;
    background-color: #42b983;
}
h3{
    background-color: rgb(189, 211, 65);
    border-radius: 0.8rem;
    width: 30%;
}
</style>