import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,

  target: 'static',

  head: {
    title: 'ECommerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '@/assets/css/base.css',
    '@sweetalert2/theme-material-ui',
    'boxicons/css/boxicons.min.css',
  ],

  plugins: ['@/plugins/cart.js'],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    'vue-sweetalert2/nuxt/no-css',
    'nuxt-webfontloader',
  ],

  webfontloader: {
    google: {
      families: ['DM+Sans:wght@400;500;700&display=swap'],
    },
  },

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content'],

  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  content: {},

  vuetify: {
    customVariables: ['~/assets/css/variables.scss'],
    defaultAssets: {
      font: {
        family: 'DM Sans',
        size: 15,
      },
    },
    treeShake: true,
    theme: {
      light: false,
      themes: {
        light: {
          primary: colors.deepPurple.darken1,
          bg: '#ffffff',
          surface: '#ffffff',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        dark: {
          primary: colors.deepPurple.darken1,
          bg: '#0a0514',
          surface: '#130a24',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  build: {},
}
