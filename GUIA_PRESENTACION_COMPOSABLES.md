# 🚀 Guía de Composables en Vue 3 para NotebookLM

Este documento ha sido estructurado para que **NotebookLM** pueda generar una presentación clara, profesional y educativa sobre los **Composables** en Vue 3, orientada a un nivel de programador junior.

---

## 1. ¿Qué es un Composable? 💡

En el ecosistema de Vue 3, un **Composable** es una función que aprovecha la **Composition API** para encapsular y reutilizar lógica de estado. 

Piensa en ellos como "piezas de rompecabezas" lógicas que puedes extraer de un componente y usar en cualquier otro lugar. 

### ¿Por qué los usamos?
*   **Adiós al "Spaghetti Code":** Evitamos componentes gigantes separando la lógica por funcionalidades.
*   **Reutilización real:** No necesitas copiar y pegar el mismo código de un contador o una petición API cinco veces.
*   **Orden mental:** En lugar de organizar el código por "tipo de opción" (data, methods, computed), lo organizamos por **funcionalidad**.

---

## 2. Los 4 Tipos de Composables que utilizamos 🛠️

En nuestro proyecto hemos implementado cuatro patrones fundamentales que cubren casi todas las necesidades de una aplicación moderna:

1.  **Gestión de Estado Simple (`useCounter`):** Encapsula un valor reactivo y las funciones que lo modifican. Es el nivel básico de abstracción.
2.  **Lógica del Navegador (`useMouse`):** Interactúa con las APIs del navegador (eventos de ventana) y maneja el ciclo de vida (montaje/desmontaje).
3.  **Persistencia Automática (`useLocalStorage`):** Sincroniza el estado de la aplicación con la memoria del navegador de forma invisible para el usuario.
4.  **Operaciones Asíncronas (`useFetch`):** Abstrae la complejidad de las llamadas a red, gestionando estados de carga y errores.

---

## 3. El Orden Sagrado: Estructura de un Composable 📏

Para que un código sea legible por otros programadores (especialmente en equipo), seguimos este orden dentro de cada archivo `.js`:

```javascript
// 1. Imports de Vue (ref, computed, watch, hooks...)
import { ref, onMounted, onUnmounted } from 'vue'

// 2. Definición de la función (Siempre empezar con 'use')
export function useMiLogica(parametros) {
  
  // 3. Estado interno (Variables reactivas)
  const miEstado = ref(null)

  // 4. Funciones y Métodos (La lógica de negocio)
  const miFuncion = () => { /* ... */ }

  // 5. Ciclos de Vida (onMounted, onUnmounted, etc.)
  onMounted(() => { /* ... */ })

  // 6. Return (Exponemos SOLO lo necesario para el componente)
  return { miEstado, miFuncion }
}
```

---

## 4. Análisis de nuestros Ejemplos Reales 🧪

### A. El Patrón "Lifecycle" (`useMouse.js`)
Este ejemplo enseña a gestionar la memoria. Si añades un `addEventListener` al montar, **debes** quitarlo al desmontar.

```javascript
export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  const update = (e) => { x.value = e.pageX; y.value = e.pageY }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}
```

### B. El Patrón "Watcher" (`useLocalStorage.js`)
Usa un `watch` profundo para sincronizar datos con el navegador automáticamente.

```javascript
export function useLocalStorage(key, defaultValue) {
  const storedValue = localStorage.getItem(key)
  const data = ref(storedValue ? JSON.parse(storedValue) : defaultValue)

  watch(data, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })

  return data
}
```

### C. El Patrón "Data Fetching" (`useFetch.js`)
Abstrae las peticiones API gestionando estados de carga (`loading`) y errores.

```javascript
export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  watchEffect(async () => {
    loading.value = true
    try {
      const res = await fetch(toValue(url))
      data.value = await res.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  })

  return { data, error, loading }
}
```

---

## 5. Tips Pro para Programadores Junior 🌟

1.  **Convención de nombres:** Usar siempre el prefijo `use`.
2.  **Responsabilidad Única:** Un composable debe hacer una sola cosa.
3.  **Reactividad:** Devolver siempre objetos con `refs` para no perder la reactividad al desestructurar.
4.  **No sobre-complicar:** Si la lógica no se va a reutilizar, a veces es mejor dejarla en el componente.
