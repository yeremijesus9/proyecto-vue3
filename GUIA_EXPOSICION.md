# Guía de Exposición - Parte de Yeremi

Esta guía resume los puntos clave que debes explicar en tu presentación sobre Vue 3.

## 1. Instalación y Configuración

- **Vite**: El proyecto utiliza Vite como herramienta de construcción. Es mucho más rápido que el antiguo Vue CLI.
- **Comandos habituales**:
  - `npm install`: Instala todas las dependencias necesarias.
  - `npm run dev`: Inicia el servidor de desarrollo (hace que la web se vea en localhost).
  - `npm run build`: Prepara la aplicación para despliegue (producción).
- **Plantilla inicial**: Al usar `npm create vue@latest`, Vue nos da una estructura base limpia.

## 2. Estructura del Proyecto

Explica para qué sirve cada carpeta principal:

- `src/main.js`: El punto de entrada donde se crea la aplicación y se configura el Router.
- `src/App.vue`: El componente raíz donde reside la estructura principal (el "marco" de la web).
- `src/router/`: Controla la navegación entre páginas sin recargar el navegador.
- `src/components/`: Piezas pequeñas y reutilizables de la web.
- `src/composables/`: (Avanzado pero fácil) Lógica compartida. Ejemplo: `useCounter.js`.
- `src/services/`: Centraliza las peticiones a APIs externas.

## 3. Directivas Principales (Sintaxis)

En el archivo `ExampleDirectives.vue` puedes mostrar:

- `v-model`: Enlaza un input con una variable (lo que escribes se guarda al instante).
- `v-for`: Crea una lista automáticamente recorriendo un array.
- `v-if` / `v-show`: Muestra u oculta elementos.
- `@click`: Escucha clics del usuario.
- `:class` o `:src`: Cambia atributos HTML dinámicamente.

## 4. Importación y Funcionalidades

Explica la diferencia entre las formas de guardar datos:

- `ref()`: Para datos simples (números, texto). Usa `.value` en el script.
- `reactive()`: Para objetos complejos (formularios). No necesita `.value`.
- `computed()`: Valores que se calculan automáticamente cuando otros cambian.
- `watch()`: Ejecuta una función cuando una variable específica cambia.

---

### ¡Mucha suerte con la exposición! 🚀
