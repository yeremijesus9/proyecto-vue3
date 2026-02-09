<script setup>
import {ref} from 'vue'
const mostrar = ref(false)

// Props: recibirá la lista de nombres desde el padre
const props = defineProps({
    integrantes: {
        type: Array,
        required: true
    }
})
//Aqui es donde el hijo habla con el padre para avisarle que hicieron clic
const emit = defineEmits(['enviar']) 
</script>

<template>
    <div class="caja">
        <p>Comunicación Directa: Props y Emits</p>
        <h2>Nombres Integrantes</h2>
        <button @click="mostrar = true; emit('enviar')">Enviar</button>
        
    <ul v-if="mostrar">
        <li v-for="(nombre, index) in props.integrantes" :key="index">{{ nombre }}</li>
    </ul>
    </div>
</template>


<style scoped>
.caja{
    margin: 3rem auto;
    width: 60%;
    color: black;
    background-color: #e0faf2;
    text-align: center;
    font-size: 1.2rem;
    border-radius: 1.5rem;
}
button{
    margin-top: 1rem;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: #42b983;
    border: none;
    color: rgb(32, 32, 32);   
}
button:hover{color: white;}

ul {
  padding: 0;
  text-align: center;
  list-style: none;
  font-size: 1.5rem;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

li {
  margin: 0.5rem 0;
}
p{
    font-size: 1.5rem;
    background-color: #42b983;
    color: white;
    font-weight: bold;
    border-radius: 1rem;
}
</style>
