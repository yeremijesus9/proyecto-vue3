<template>
  <div class="caja-especial">
    <slot></slot>
  </div>
</template>


<style scoped>
.caja-especial {
  border: 2px dashed #42b983;
  padding: 20px;
  border-radius: 10px;
  background-color: #f0fdf4;
  text-align: center;
  color: #2c3e50;
  font-size: 1.5rem;
}
</style>