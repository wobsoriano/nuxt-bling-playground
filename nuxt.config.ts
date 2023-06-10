import { bling } from '@tanstack/bling/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  vite: {
    plugins: [bling()]
  },
})
