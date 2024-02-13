export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: ['@nuxt/image', '@nuxt/content', '@nuxtjs/seo'],

  content: {
    liveEdit: false,
  },

  site: {
    url: 'https://willwestwood.me/',
    name: 'Will Westwood',
    description:
      'Portfolio site for Web and 3D designer/developer William Westwood.',
    defaultLocale: 'en',
  },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/ww-favicon.svg',
        },
      ],
    },
  },
  nitro: { prerender: { failOnError: false } },
});
