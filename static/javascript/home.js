/* global tailwind */
/**
 * LÓGICA DE LA PÁGINA PRINCIPAL
 * Este archivo maneja la configuración de Tailwind y la funcionalidad del modo oscuro.
 */

// 1. CONFIGURACIÓN DE TAILWIND CSS
// Aquí personalizamos los colores, fuentes y bordes que usaremos con Tailwind.
tailwind.config = {
  darkMode: 'class', // Permite activar el modo oscuro añadiendo la clase 'dark' al <html>
  theme: {
    extend: {
      colors: {
        primary: '#42b883', // Verde característico de Vue
        'background-light': '#f8fafc',
        'background-dark': '#0f172a',
        'slate-custom': '#35495e', // Azul oscuro de Vue
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
      },
    },
  },
}

// 2. FUNCIONALIDAD DEL MODO OSCURO (THEME TOGGLE)
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle')
  const html = document.documentElement

  /**
   * Función para actualizar el icono del botón según el tema
   * @param {boolean} isDark - Si el modo oscuro está activo
   */
  const updateIcon = (isDark) => {
    themeToggle.innerHTML = isDark
      ? '<span class="material-icons-round text-yellow-400">light_mode</span>'
      : '<span class="material-icons-round text-slate-500">dark_mode</span>'
  }

  // Inicializar el tema basado en la preferencia guardada o en el sistema operativo
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    html.classList.add('dark')
    updateIcon(true)
  } else {
    html.classList.remove('dark')
    updateIcon(false)
  }

  // Evento de clic para cambiar el tema
  themeToggle.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark')

    // Guardar la preferencia en localStorage para futuras visitas
    localStorage.setItem('theme', isDark ? 'dark' : 'light')

    // Actualizar el icono visualmente
    updateIcon(isDark)
  })
})
