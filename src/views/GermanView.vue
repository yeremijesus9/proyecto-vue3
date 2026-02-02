<template>
  <div class="german">
    <h2 class="title">👨‍💻 Sección German</h2>

    <transition-group name="card" tag="div">
      <div class="card" key="1">
        <h3>📌 Ruta dinámica</h3>
        <p>Ruta actual: <code>/german/{{ id }}</code></p>
      </div>

      <div class="card" key="2">
        <h3>🚦 Cambiar ID dinámico</h3>
        <div class="buttons">
          <router-link class="btn" to="/german/1">ID 1</router-link>
          <router-link class="btn" to="/german/2">ID 2</router-link>
          <router-link class="btn" to="/german/3">ID 3</router-link>
        </div>
      </div>

      <div class="card highlight" key="3">
        <h3>💡 Lazy Loading</h3>
        <p>
          Este componente se carga solo cuando se visita la ruta,
          optimizando el rendimiento.
        </p>
      </div>

      <div class="card" key="4">
        <h3>⚙️ Build y dist</h3>
        <ul>
          <li><code>npm run build</code></li>
          <li>Genera la carpeta <strong>dist</strong></li>
          <li>Archivos listos para producción</li>
        </ul>
      </div>
    </transition-group>
  </div>
</template>

<script setup>
defineProps({
  id: String
})
</script>

<style scoped>
.german {
  max-width: 800px;
  margin: auto;
}

.title {
  margin-bottom: 20px;
}

.card {
  color: black;
  background: #f9f9f9;
  border-radius: 12px;
  padding: 18px;
  margin-bottom: 16px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.08);
}

.highlight {
  background: #e6f7f1;
}

.buttons {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 8px 14px;
  background: #42b983;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
}

.card-enter-active {
  transition: all 0.4s ease;
}

.card-enter-from {
  opacity: 0;
  transform: translateY(15px);
}
</style>
