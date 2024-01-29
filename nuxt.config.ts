// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Startown | Police",
      meta: [
        { charset: "utf-8" },
        { hid: "description", name: "description", content: "Star town" },
        { hid:'author', name:'author', content:'Star town by: nongjj'},
        { hid:'keywords', name:'keywords', content:'startown'},
        { hid:'og:title', name:'og:title', content:'Star town by: nongjj'},
      ],
      link: [
        {
          rel: 'icon', type: 'image/x-icon', href: 'https://media.discordapp.net/attachments/1093057084976808028/1093567927506194452/star-town.png'
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        },
        {
          rel: "stylesheet",
          href: "https://pro.fontawesome.com/releases/v5.15.0/css/all.css",
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: ""
    }
  }
})
