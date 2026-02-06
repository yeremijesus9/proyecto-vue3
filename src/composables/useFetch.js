import { ref, watchEffect, toValue } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)

  const fetchData = async () => {
    loading.value = true
    error.value = null
    try {
      // toValue permite manejar tanto strings normales como refs
      const response = await fetch(toValue(url))
      if (!response.ok) throw new Error('Error al obtener los datos')
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  // watchEffect rastrea automáticamente si 'url' (si es ref) cambia
  watchEffect(() => {
    fetchData()
  })

  return { data, error, loading, retry: fetchData }
}
