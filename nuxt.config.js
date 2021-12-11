export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '2022年度の年賀状',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '2022年，尾川史典から新年のご挨拶です。' },
      { hid: 'og:site_name', property: 'og:site_name', content: '年賀状Online 2021>>2022' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://2022nenga.fumi.one' },
      { hid: 'og:title', property: 'og:title', content: '2022年，尾川史典から新年のご挨拶' },
      { hid: 'og:description', property: 'og:description', content: '2022年，尾川史典から新年のご挨拶です。' },
      { hid: 'og:image', property: 'og:image', content: 'https://imgur.com/CSX3iYK' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: 'mizphses' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crosssign: true },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crosssign: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=New+Tegomin&family=Yuji+Syuku&family=Zen+Maru+Gothic:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },

    ]
  },

  // Global CSS: httpsc://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/day.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
