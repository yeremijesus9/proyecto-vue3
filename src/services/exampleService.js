/**
 * Los servicios son archivos donde centralizamos la lógica de peticiones a APIs
 * o manejo de datos persistentes. Esto mantiene los componentes limpios.
 */

export const exampleService = {
  async obtenerDatos() {
    // Ejemplo de cómo sería una petición real:
    // const response = await fetch('https://api.example.com/data')
    // return await response.json()

    return [
      { id: 1, nombre: 'Dato desde el servicio A' },
      { id: 2, nombre: 'Dato desde el servicio B' },
    ]
  },
}
