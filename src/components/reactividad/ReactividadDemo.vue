<template>
  <div class="demo">
    <h2>Reactividad</h2>

    <div class="section">
      <h3>1. ref() - Para valores <span class="badge">Números, Strings</span></h3>
      <p>
        Contador: <strong>{{ contador }}</strong>
      </p>
      <button @click="contador++">Sumar 1</button>
      <small class="tip">ref() crea una referencia reactiva. Usa .value internamente.</small>
    </div>

    <div class="section">
      <h3>2. reactive() - Para objetos <span class="badge">Objects, Arrays</span></h3>
      <p>
        Usuario: <strong>{{ usuario.nombre }} ({{ usuario.edad }})</strong>
      </p>
      <input v-model="usuario.nombre" placeholder="Cambia nombre" />
      <button @click="usuario.edad++">+1 año</button>
      <small class="tip">reactive() convierte objetos en reactivos sin .value</small>
    </div>

    <div class="section">
      <h3>3. Estado Global <span class="badge">Props</span></h3>
      <p>
        Contador Global desde aquí: <strong>{{ props.globalState.contador }}</strong>
      </p>
      <small class="tip">Los datos fluyen de padre a hijo a través de props</small>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, defineProps } from 'vue'

// Recibir el estado global del componente padre
const props = defineProps(['globalState'])

// ref() se usa para valores primitivos: números, strings, booleanos
const contador = ref(0) //contador.value = 0 internamente

// reactive() se usa para objetos y arreglos complejos
const usuario = reactive({
  nombre: 'Juan',
  edad: 25,
})
</script>

<style scoped>
.demo {
  background: #e3f2fd; /* Light blue */
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  color: #333; /* Dark text */
}
.section {
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
h2,
h3 {
  color: #1976d2;
}
button {
  margin: 5px;
  padding: 8px 12px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.badge {
  background: #42b883;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: normal;
}

.tip {
  display: block;
  color: #666;
  font-style: italic;
  margin-top: 8px;
  background: #f0f8ff;
  padding: 8px;
  border-radius: 4px;
  border-left: 3px solid #42b883;
}
</style>
