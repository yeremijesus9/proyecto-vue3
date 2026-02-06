<script setup>
import { ref, computed } from 'vue'
import { useFetch } from '@/composables/useFetch'

const currentId = ref(1)
const url = computed(() => `http://localhost:3000/ejemplos/${currentId.value}`)

const { data, error, loading } = useFetch(url)

const toggleData = () => {
  currentId.value = currentId.value === 1 ? 2 : 1
}
</script>

<template>
  <div class="example-box">
    <h4>Petición Dinámica (ID Actual: {{ currentId }})</h4>
    <p class="server-hint">Intercambia entre el ejemplo 1 y el 2 dinámicamente.</p>

    <div v-if="loading" class="loading">
      <div class="spinner"></div> Cargando datos...
    </div>

    <div v-else-if="error" class="error">
      ❌ Error al cargar ID: {{ currentId }}
      <br>
      <button @click="toggleData">Cambiar de ID / Reintentar</button>
    </div>

    <div v-else-if="data" class="data-card">
      <p><strong>ID:</strong> {{ data.id }}</p>
      <p><strong>Título:</strong> {{ data.titulo }}</p>
      <p><strong>Descripción:</strong> {{ data.descripcion }}</p>
      <p><strong>Completado:</strong> {{ data.completado ? '✅ Sí' : '❌ No' }}</p>
      <button @click="toggleData" class="btn-refresh">
        Ver Ejemplo {{ currentId === 1 ? '2' : '1' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.example-box {
  padding: 20px;
  background: #fffdfa;
  border-radius: 12px;
  border: 1px solid #fed7aa;
}
.data-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  color: #1a1a1a;
  border: 1px solid #ffedd5;
}

.data-card p {
  margin-bottom: 8px;
}

.loading {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #d97706;
  font-weight: 600;
}
.error {
  color: #dc2626;
  font-weight: 600;
  padding: 15px;
  background: #fef2f2;
  border-radius: 8px;
}
.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #d97706;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.btn-refresh {
  background: #ea580c !important; /* Un naranja más fuerte y legible */
  margin-top: 15px;
}

.btn-refresh:hover {
  background: #c2410c !important;
}

h4 {
  margin-top: 0;
  color: #9a3412;
  font-weight: 700;
}
.server-hint {
  font-size: 0.9rem;
  color: #4b5563;
  margin-bottom: 1.2rem;
}
</style>
