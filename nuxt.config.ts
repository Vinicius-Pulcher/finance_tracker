// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/supabase'],

  supabase: {
    redirect: true
  },

  compatibilityDate: '2024-12-11'
})