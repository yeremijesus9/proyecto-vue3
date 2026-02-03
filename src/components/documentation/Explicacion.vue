<template>
  <div class="documentation">
    <h2>Explicación de conceptos</h2>

    <div class="concept-card">
      <h3>¿Qué es la reactividad?</h3>
      <p>
        La reactividad significa que Vue <strong>automáticamente actualiza la vista</strong> cuando
        cambian los datos.
      </p>
      <div class="example">
        <code>const count = ref(0)</code>
        <p>Si count.value cambia, Vue actualiza el HTML automáticamente.</p>
      </div>
    </div>

    <div class="concept-card">
      <h3>ref() vs reactive()</h3>
      <div class="comparison">
        <div class="ref-example">
          <h4>ref() - Para valores simples</h4>
          <code>const nombre = ref('Juan')</code>
          <code>nombre.value = 'Pedro'</code>
          <small>Usa .value para acceder/modificar</small>
        </div>
        <div class="reactive-example">
          <h4>reactive() - Para objetos</h4>
          <code>const usuario = reactive({nombre: 'Juan'})</code>
          <code>usuario.nombre = 'Pedro'</code>
          <small>Acceso directo a propiedades</small>
        </div>
      </div>
    </div>

    <div class="concept-card">
      <h3>⚡ computed() - Propiedades calculadas</h3>
      <p>Son valores que <strong>se calculan automáticamente</strong> basados en otros valores.</p>
      <div class="example">
        <code>const fullName = computed(() => firstName + ' ' + lastName)</code>
        <small>Se recalcula solo cuando firstName o lastName cambian.</small>
      </div>
    </div>

    <div class="concept-card">
      <h3> watch() - Observar cambios</h3>
      <p>Ejecuta código cuando algo específico cambia.</p>
      <div class="example">
        <code>watch(count, (newValue) => console.log('Cambié:', newValue))</code>
        <small>Perfecto para: guardar en BD, llamar APIs, validaciones.</small>
      </div>
    </div>

    <div class="concept-card">
      <h3>Composables - Lógica reutilizable</h3>
      <p>Funciones que encapsulan lógica reactiva para reutilizarla.</p>
      <div class="example">
        <code>const {counter, increment} = useCounter()</code>
        <small>Como usar un "hook" de React, pero para Vue!</small>
      </div>
    </div>

  </div>
</template>

<script setup>
// No necesitamos lógica aquí, solo documentación visual
</script>

<style scoped>
.documentation {
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  max-width: 900px;
  margin: 0 auto;
}

.concept-card {
  background: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  border-left: 4px solid #42b883;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.concept-card h3 {
  color: #42b883;
  margin-bottom: 10px;
}

.example {
  background: #f1f3f4;
  padding: 15px;
  border-radius: 6px;
  margin: 10px 0;
}

code {
  background: #2c3e50;
  color: #42b883;
  padding: 8px 12px;
  border-radius: 4px;
  display: block;
  font-family: 'Courier New', monospace;
  margin: 5px 0;
}

.comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 15px 0;
}

.ref-example,
.reactive-example {
  background: #e8f5e8;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #42b883;
}

.ref-example h4,
.reactive-example h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.tips {
  background: #fff3cd;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ffc107;
}

.tips ul {
  list-style: none;
  padding: 0;
}

.tips li {
  padding: 8px 0;
  border-bottom: 1px solid #ffeaa7;
}

.tips li:last-child {
  border-bottom: none;
}

small {
  color: #666;
  font-style: italic;
}
</style>
