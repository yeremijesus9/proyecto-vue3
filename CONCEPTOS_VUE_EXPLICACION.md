# Explicación de Conceptos Clave - Vue 3

Esta guía está diseñada para ayudarte a explicar los conceptos técnicos de forma sencilla durante tu exposición.

## 1. Reactividad: ¿Cómo piensa Vue?

La reactividad es lo que hace que la web se actualice sola cuando cambian los datos.

- **`ref()`**: Es la forma básica de guardar un dato reactivo (un número, un texto).
  - _En el script:_ Debes usar `.value` (ej: `contador.value++`).
  - _En el HTML:_ Lo usas directamente (ej: `{{ contador }}`).
- **`reactive()`**: Ideal para objetos o formularios. No usa `.value`, lo que lo hace más cómodo para estructuras con muchos campos.
  - _Consejo:_ Úsalo cuando tengas un conjunto de datos relacionados (como un perfil de usuario).

## 2. Directivas (Atributos Inteligentes)

Las directivas son "órdenes" que le damos al HTML. Todas empiezan por `v-`.

- **`v-model`**: La "magia" de los formularios. Conecta un input con una variable de forma bidireccional.
- **`v-for`**: Sirve para repetir un elemento muchas veces (como una lista de tareas). Siempre necesita una `:key` única.
- **`v-if` vs `v-show`**:
  - `v-if`: Elimina el elemento del mapa de la web (DOM) si la condición es falsa.
  - `v-show`: Solo lo oculta con CSS (`display: none`). Úsalo si el elemento va a cambiar de estado muy rápido y seguido.
- **`v-on` (abreviado como `@`)**: Para capturar eventos. El más común es `@click`.
- **`v-bind` (abreviado como `:`)**: Para que un atributo HTML (como una imagen `src` o una clase) sea dinámico.

## 3. Automatización: `computed` y `watch`

- **`computed` (Propiedades Computadas)**: Son variables que se calculan solas a partir de otras. Si cambia el precio, el IVA se recalcula automáticamente. Son muy rápidas porque Vue guarda el resultado en memoria.
- **`watch` (Observadores)**: Es un detective. Se queda mirando una variable y, cuando cambia, ejecuta una acción (como guardar en una base de datos o mostrar una alerta).

## 4. Composables: El superpoder de Vue 3

Un **Composable** (como tu archivo `useCounter.js`) es una función que encapsula lógica.

- **¿Por qué es bueno?**: Porque puedes sacar la lógica complicada fuera del componente. Así, el componente solo se encarga de la parte visual y es mucho más fácil de leer.
- **Reutilización**: Puedes usar el mismo `useCounter` en diez sitios distintos sin copiar y pegar código.

## 5. Vue Router (Navegación Fluida)

Vue permite crear **Single Page Applications (SPA)**.

- Esto significa que la web nunca se "recarga" por completo.
- El Router simplemente intercambia las "vistas" (archivos en la carpeta `views/`) dentro del componente principal `App.vue`. Esto da una sensación de velocidad increíble.

---

### Tips de Oro para Yeremi:

1.  **Composition API**: Si te preguntan el estilo de código, di que usas "Composition API con `<script setup>`". Es la forma más actual y recomendada.
2.  **SFC**: Explica que los archivos `.vue` se llaman _Single File Components_ porque tienen el HTML, el JS y el CSS en un solo lugar.
3.  **Vite**: Menciona que usas Vite porque es el estándar de la industria hoy en día por su velocidad.

¡Mucha suerte! Tienes un proyecto muy sólido. 🚀
