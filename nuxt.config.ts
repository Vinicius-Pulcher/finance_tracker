// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxthq/ui', '@nuxtjs/supabase'],

  supabase: {
    redirect: false
  },

  compatibilityDate: '2024-11-05'
})