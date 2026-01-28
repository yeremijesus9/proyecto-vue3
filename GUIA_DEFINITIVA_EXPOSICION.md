# 🚀 GUÍA DEFINITIVA: Exposición Vue 3 - Yeremi

¡Hola a todos! Soy Yeremi y he preparado esta guía completa que mezcla lo mejor de la teoría técnica y un guión para que la charla sea amena y clara. ¡Vamos a por ello!

---

## 0. Rompiendo el hielo (Chiste malo 😅)

¿Sabéis por qué los programadores preferimos Vue?
Porque con tantas directivas y reactividad, ¡por fin algo en nuestra vida nos hace caso a la primera! 😂

---

## 1. El Inicio: Instalación y Configuración

Antes de programar, hay que preparar el terreno:

- **Vite**: Es el motor que usamos. Es el estándar actual porque es increíblemente rápido.
- **Comandos clave**:
  - `npm install`: Instala las piezas del motor.
  - `npm run dev`: Enciende el motor (el servidor de desarrollo).
  - `npm run build`: Prepara el coche para la carrera final (producción).

---

## 2. El Mapa: Estructura del Proyecto

Vue organiza todo en carpetas para que no nos volvamos locos:

- `main.js`: El cerebro que arranca todo.
- `App.vue`: El cuerpo principal de la web.
- `components/`: Las piezas de LEGO que vamos uniendo.
- `router/`: El GPS de la web para movernos entre páginas sin recargar (SPA).
- `services/`: (Novedad) Donde guardamos las llamadas a APIs externas.

---

## 3. La Magia: Reactividad y Directivas

Para que la web esté "viva", usamos:

- **Reactividad (`ref` y `reactive`)**: Si cambio un dato en el código, se cambia en la pantalla al instante. `ref` para datos sueltos y `reactive` para objetos (como formularios).
- **Directivas (Atributos con `v-`)**:
  - `v-model`: Conexión total entre input y variable.
  - `v-for`: Un bucle que crea elementos HTML solo.
  - `v-if / v-show`: Mostrar y ocultar cosas como si fuera un interruptor.
  - `@click` y `:src`: Eventos y atributos dinámicos.

---

## 4. 🌟 EL TEMA ESTRELLA: Los Composables 🌟

Esto es lo que hace que Vue 3 sea profesional.

### ¿Qué es exactamente?

Viene de **"Componer"**. Es sacar la lógica (los cálculos, los contadores, las validaciones) fuera de la pantalla (el componente) a un archivo `.js` aparte (como nuestro `useCounter.js`).


### ¿Para qué sirve? (El problema que soluciona)

- **Antes (Vue 2):** Si tenías un código muy largo en un componente, era un lío. Si querías usar esa misma lógica en otra página, tenías que copiar y pegar.
- **Ahora (Vue 3 con Composables):** Sacamos esa lógica a un archivo aparte (como nuestro `useCounter.js`).


## 5. Automatización: Computed y Watch

- **`computed`**: Variables inteligentes que se recalculan solas (ej: el precio total con IVA). Son super rápidas por el "cacheo".
- **`watch`**: Un detective que vigila una variable y hace algo cuando cambia (ej: mostrar un mensaje cuando el usuario escribe su nombre).

---

## 6. Conclusión

Vue 3 nos permite trabajar de forma modular y ordenada. Gracias a los **Composables**, pasamos de tener archivos gigantes a tener piezas pequeñas, inteligentes y que se pueden compartir por toda la aplicación.

¡Espero que os haya gustado! ¿Alguna pregunta?
