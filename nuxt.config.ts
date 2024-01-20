import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    target: 'static',
    meta: {
        title: 'Antonio Dev',
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@nuxt-hero-icons/outline/nuxt',
        '@nuxt-hero-icons/solid/nuxt',
    ],
    app: {
        baseURL: '/portfolio/',
        buildAssetsDir: 'assets',
      }
})
