<template>
        <h1>{{ titulo }}</h1>
</template>

<script setup>
// Definimos la prop para que acepte un texto personalizado
defineProps({
    titulo: {
        type: String,
        default:'Componentes'
    }
})
</script>

<style scoped>
h1{
    color: white;
    text-align: center;
    margin-top: 2rem;
    font-size: 3rem;
}
</style>