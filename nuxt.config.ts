// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    '@nuxt/image',
    '@nuxtjs/sanity',
    '@nuxt/icon',
  ],
  image: {
    sanity: {
      projectId: "1buu5y7u",
      dataset: "production",
    }
  },
  sanity: {
    projectId: "1buu5y7u",
    dataset: "production",
  },
  icon: {
    provider: 'server',
    customCollections: [
      {
        prefix: "agora-svg",
        dir: './assets/svgs'
      },
      {
        prefix: "agora-svg-link",
        dir: './assets/svgs/linkbutton'
      },
    ],
  },
})