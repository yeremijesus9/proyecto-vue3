<script setup>
import ExampleComposable from '@/components/ExampleComposable.vue'
import ExampleMouse from '@/components/composables/ExampleMouse.vue'
import ExampleLocalStorage from '@/components/composables/ExampleLocalStorage.vue'
import ExampleFetch from '@/components/composables/ExampleFetch.vue'
</script>

<template>
  <div class="container">
    <h1>Galería de Composables</h1>
    <p class="intro">Los <strong>Composables</strong> son funciones que aprovechan la Composition API de Vue para encapsular y reutilizar lógica de estado.</p>

    <div class="grid">
      <section>
        <h2>1. Contador Básico</h2>
        <ExampleComposable />
      </section>

      <section>
        <h2>2. Seguimiento del Mouse</h2>
        <ExampleMouse />
      </section>

      <section>
        <h2>3. Persistencia (LocalStorage)</h2>
        <ExampleLocalStorage />
      </section>

      <section>
        <h2>4. Peticiones Asíncronas (Fetch)</h2>
        <ExampleFetch />
      </section>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.intro {
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-text); /* Se adapta al modo claro/oscuro automáticamente */
  margin-bottom: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 35px;
}

section {
  background: white;
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); /* Sombra un poco más fuerte */
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  color: #1a1a1a; /* Texto principal casi negro */
  border: 1px solid rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #42b983, #35495e);
  opacity: 0.15; /* Siempre un poco visible */
  transition: opacity 0.3s ease;
}

section:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(66, 185, 131, 0.15);
  border-color: rgba(66, 185, 131, 0.3);
}

section:hover::before {
  opacity: 1;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: var(--color-heading); /* Usa la variable del tema */
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -1px;
}

h2 {
  color: #42b983; /* El verde de Vue resalta bien en ambos temas */
  margin-bottom: 30px;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Estilos para los componentes dentro de las cards */
section :deep(h3), section :deep(h4) {
  color: inherit; /* Permite que el componente controle su propio color (importante para modo oscuro) */
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  margin-top: 0;
}

section :deep(p) {
  margin-bottom: 1.2rem;
  font-size: 1.05rem;
  color: inherit; /* Permite que el componente controle su propio color */
  line-height: 1.6;
  opacity: 0.9;
}

section :deep(button) {
  height: 48px; /* Altura fija para alineación perfecta */
  padding: 0 24px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 12px;
  margin-bottom: 12px;
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.2);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

section :deep(button:hover) {
  background: #369870;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(66, 185, 131, 0.3);
}

section :deep(button:active) {
  transform: translateY(-1px);
}

section :deep(input) {
  height: 48px; /* Misma altura que el botón */
  padding: 0 18px;
  border: 2px solid #cbd5e1; /* Borde más visible */
  border-radius: 10px;
  font-size: 1rem;
  background: #f8fafc;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 320px;
  color: #1a1a1a;
  box-sizing: border-box; /* Asegura que el padding no afecte la altura */
}

section :deep(input:focus) {
  outline: none;
  border-color: #42b983;
  background: white;
  box-shadow: 0 0 0 4px rgba(66, 185, 131, 0.1);
}

/* Ajuste para grupos de input + botón */
section :deep(.input-group) {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  h1 {
    font-size: 2.4rem;
  }

  section {
    padding: 25px;
  }
}
</style>
