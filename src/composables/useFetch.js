import { ref, watchEffect, toValue } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(true)

  const fetchData = async () => {
    loading.value = true
    try {
      const response = await fetch(toValue(url))
      if (!response.ok) throw new Error('Error al conectar con el servidor')
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  watchEffect(() => fetchData())

  return { data, error, loading }
}
