<template>
    <div class="tarjetas">
        <header>
            <slot name="foto">📸 (Sin foto)</slot>
        </header>

        <section>
            <slot>👤 (Sin nombre)</slot>
        </section>

        <footer>
            <slot name="redes">🔗 (Sin enlaces) </slot>

        </footer>
    </div>
</template>


<style scoped>
.tarjetas {
  display: flex;
  flex-direction: column; 
  width: 30%;
  border: 2px dashed #42b983;
  border-radius: 15px;
  background-color: #f0fdf4;
  text-align: center;
  color: #2c3e50;
  margin: 1rem auto;      
}

header {
  border-bottom: 1px solid #d1fae5;
  padding-bottom: 1rem;
}

section {
  font-weight: bold;
  font-size: 1.8rem;
}

footer {
  border-top: 1px solid #d1fae5;
  padding-top: 1rem;
  font-size: 1.1rem;
}
</style>