<script setup>
import { useLocalStorage } from '@/composables/useLocalStorage'

const name = useLocalStorage('user-name', 'Estudiante')
const theme = useLocalStorage('user-theme', 'light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <div class="example-box" :class="theme">
    <h4>Persistencia con LocalStorage</h4>
    <p>Este nombre se guardará en tu navegador aunque recargues la página:</p>

    <div class="input-group">
      <input v-model="name" placeholder="Escribe tu nombre..." />
      <button @click="toggleTheme">
        Cambiar a modo {{ theme === 'light' ? 'Noche 🌙' : 'Día ☀️' }}
      </button>
    </div>

    <p class="greeting">Hola, <strong>{{ name }}</strong>. Estás en modo <strong>{{ theme }}</strong>.</p>
  </div>
</template>

<style scoped>
.example-box {
  padding: 20px;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;
}
.light {
  background: #f8fafc;
  color: #1a1a1a;
}
.dark {
  background: #1e293b;
  color: #f8fafc;
  border-color: #334155;
}
.input-group {
  display: flex;
  gap: 12px;
  margin: 15px 0;
  flex-wrap: wrap;
}
/* Los estilos de input y button se heredan del padre via :deep */

.greeting {
  margin-top: 20px;
  font-size: 1.1rem;
  padding: 15px;
  background: rgba(66, 185, 131, 0.15); /* Verde semi-transparente */
  border-radius: 10px;
  color: inherit;
  border: 1px solid rgba(66, 185, 131, 0.2);
}
h4 {
  margin-top: 0;
  font-weight: 700;
  color: inherit;
}
</style>
