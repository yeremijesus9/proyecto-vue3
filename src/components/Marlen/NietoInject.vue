<template>
    <p>{{  mensaje  }}</p>

</template>

<script setup>
import { inject } from 'vue';

const mensaje = inject('mensajeGlobal')
</script>

<style scoped>
p{
    margin-top: 5rem;
    border-radius: 2rem;
    background-color: #42b983;
}
</style>