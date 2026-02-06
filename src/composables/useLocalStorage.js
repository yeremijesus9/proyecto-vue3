import { ref, watch } from 'vue'

export function useLocalStorage(key, defaultValue) {
  // Intentar cargar valor inicial de localStorage
  const storedValue = localStorage.getItem(key)
  const data = ref(storedValue ? JSON.parse(storedValue) : defaultValue)

  // Sincronizar con localStorage cuando cambie el valor
  watch(data, (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue))
  }, { deep: true })

  return data
}
