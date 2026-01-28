# Hola compañeros! Soy Yeremi y esta es mi investigación sobre Vue 3 🚀

He preparado este guión para explicaros los fundamentales de Vue 3 de forma que todos lo entendamos a la primera.

Antes de empezar, ¿sabéis por qué los programadores preferimos Vue?
Porque con tantas directivas y reactividad, ¡por fin algo en nuestra vida nos hace caso a la primera! 😂 (Vale, chiste malo, ¡seguimos!).

---

## 1. El Corazón de Vue: Reactividad (`ref` y `reactive`)

Para que una web sea moderna, tiene que reaccionar a lo que hacemos.

- **Imagineu-vos:** Si cambio el nombre de un usuario en el código, quiero que se cambie en la pantalla sin recargar. Eso es la reactividad.
- En Vue 3 usamos `ref` para cosas sueltas (como un contador o un nombre) y `reactive` para objetos más grandes (como un formulario entero).

## 2. Directivas: Mandando en el HTML

Las directivas son como "superpoderes" que le añadimos a las etiquetas de siempre:

- `v-model`: Para que lo que escribas en una caja de texto se guarde solo.
- `v-for`: Para recorrer una lista y crear elementos automáticamente (ahorra mucho copiar y pegar).
- `v-if`: Para mostrar o quitar cosas según si algo es verdad o mentira.
- `@click`: Para que pase algo cuando el usuario hace clic.

## 3. 🌟 EL TEMA ESTRELLA: ¿Qué es un Composable? 🌟

Esto es lo más importante de Vue 3 y lo que lo hace tan bueno profesionalmente.

### ¿Qué significa exactamente?

La palabra viene de "Componer". En programación, un **Composable** es una función que guarda una lógica específica (como un contador, un cronómetro o una validación de email) fuera de los componentes.

### ¿Para qué sirve? (El problema que soluciona)

- **Antes (Vue 2):** Si tenías un código muy largo en un componente, era un lío. Si querías usar esa misma lógica en otra página, tenías que copiar y pegar.
- **Ahora (Vue 3 con Composables):** Sacamos esa lógica a un archivo aparte (como nuestro `useCounter.js`).

### Las 3 ventajas clave para explicar:

1.  **Reutilización:** Si tengo un buscador de productos, lo programo una vez como Composable y lo puedo usar en la página de inicio, en el carrito y en el perfil sin repetir ni una línea de código.
2.  **Limpieza:** El archivo `.vue` se queda súper corto y limpio. Solo dice "úsame este contador" y ya está. No hay 200 líneas de código liando la vista.
3.  **Organización:** Puedes tener un equipo trabajando en la lógica (el Composable) y otro en el diseño (el componente) sin que se molesten.

### Ejemplo real que tenemos en el proyecto:

Hemos creado `useCounter.js`. No es un componente, no tiene HTML. Es solo **lógica pura**: sumar, restar y guardar el número. Luego, cualquier botón de nuestra web puede "llamar" a ese Composable para empezar a contar.

---

## 4. Estructura y Router

Finalmente, recordad que Vue organiza todo en carpetas:

- `components/`: Las piezas pequeñas (el Lego).
- `views/`: Las páginas enteras.
- `router/`: El mapa de navegación (para que parezca una aplicación de móvil que no recarga nunca).

---

### Conclusión para cerrar:

Vue 3 nos permite trabajar de forma modular. Gracias a los **Composables**, pasamos de tener archivos gigantes a tener piezas pequeñas, inteligentes y que se pueden compartir por toda la aplicación.

¡Espero que os haya gustado! ¿Alguna pregunta?
