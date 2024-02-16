import { globSync } from 'glob'; // using glob here but any package you are comfortable with works
const routes = globSync('./content/**/*.json').map((path) =>
  path.slice(7, -5).replace(/\d+\./g, '').replace(/\\/g, '/')
);

// import axios from 'axios';
// // create a function to fetch the routes from the API
// const getPostRoutes = async () => {
//   const response = await axios.get(
//     'https://sli1n332.directus.app/items/posts?filter={%22status%22:%22published%22}&sort=-date_created'
//   );
//   // return the array of routes
//   return response?.data?.data.map((post) => `/post/${post.slug}`);
// };

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: ['@nuxt/image', '@nuxt/content'],

  // content: {
  //   experimental: {
  //     clientDB: true,
  //   },
  // },

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

  ssr: true,
  nitro: {
    preset: 'github_pages',
    prerender: {
      crawlLinks: true,
      // routes: ['/sitemap.xml', ...routes],
      routes: [...routes],
      // routes: ['/sitemap.xml'],
    },
  },

  // ssr: true, // this should be set to true for static websites
  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: [...routes],
  //   },
  // },

  // hooks: {
  //   async 'nitro:config'(nitroConfig) {
  //     // fetch the routes from our function above
  //     // const slugs = await getPostRoutes();
  //     // add the routes to the nitro config
  //     nitroConfig.prerender.routes.push(...routes);
  //   },
  // },
});
