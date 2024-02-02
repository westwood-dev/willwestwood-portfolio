export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: ['@nuxt/image'],

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/assets/images/LOGO-white.svg',
        },
      ],
    },
  },
});
