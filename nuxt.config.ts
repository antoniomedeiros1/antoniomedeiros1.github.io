import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    target: 'static',
    meta: {
        title: 'Antonio Medeiros',
        description: 'Antonio Medeiros portfolio',
    },
    
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxt-hero-icons/outline/nuxt',
        '@nuxt-hero-icons/solid/nuxt',
    ],
    app: {
        baseURL: '/',
        buildAssetsDir: 'assets',
        head: {
            link: [{ rel: 'icon', type: 'image/ico', href: '/favicon.ico' }]
        }
      }
})
