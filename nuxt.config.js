import FilterWarningsPlugin from 'webpack-filter-warnings-plugin'
// import ESLintPlugin from 'eslint-webpack-plugin'
import nodeExternals from 'webpack-node-externals'
import { theme } from './config/vuetify.options'
import languages from './static/lang/languages'
import brand from './static/text/brand'

module.exports = {
  target: 'static',
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      dir: 'ltr'
    },
    title: brand.medical.desc,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: brand.medical.desc },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'msapplication-TileImage', content: '/D4U/LOGO-logo.png' },
      // PWA primary color
      { name: 'theme-color', content: theme.primary },
      // Facebook
      { property: 'author', content: 'awrora' },
      { property: 'og:site_name', content: 'awrora.ux-maestro.com' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      // Twitter
      { property: 'twitter:site', content: 'awrora.ux-maestro.com' },
      { property: 'twitter:domain', content: 'awrora.ux-maestro.com' },
      { property: 'twitter:creator', content: 'awrora' },
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:image:src', content: '/images/logo.png' },
      { property: 'og:url', content: brand.medical.url },
      { property: 'og:title', content: brand.medical.projectName },
      { property: 'og:description', content: brand.medical.desc },
      { name: 'twitter:site', content: brand.medical.url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: brand.medical.img },
      { property: 'og:image', content: brand.medical.img },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    ],
    link: [
      // Favicon
      { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon.ico' },
      { rel: 'manifest', href: '/favicons/manifest.json' },
      // Fonts and Icons
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: theme.primary },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/transition.scss',
    '~/assets/vuetify-overide.scss',
    '~/assets/vendors/animate.css',
    '~/assets/vendors/animate-extends.css',
    '~/assets/vendors/hamburger-menu.css',
    '~/assets/vendors/slick-carousel/slick.css',
    '~/assets/vendors/slick-carousel/slick-theme.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-fragment-config',
    '~/plugins/vue-wow-config',
    // {src: '~/plugins/vue-videojs7.js', mode: 'client'},
    { src: '~plugins/i18n-config.js' },
    { src: '~/plugins/vue-youtube-config', ssr: false },
    { src: '~/plugins/vue-lightbox-config', ssr: false },
    { src: '~/plugins/caroussel-config', ssr: false },
    { src: '~/plugins/countup-config', ssr: false },
    { src: '~/plugins/vue-scroll-nav', ssr: false },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/moment'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/pwa', { icon: true }],
    ['@nuxtjs/html-minifier', { log: 'once', logHtml: true }],
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          xsDown: 599,
          xsUp: 600,
          smDown: 959,
          smUp: 960,
          mdDown: 1279,
          mdUp: 1280,
          lgDown: 1919,
          lgUp: 1920,
          xl: Infinity
        }
      }
    ],
    ['nuxt-gmaps', { key: '' }],
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: languages,
    defaultLocale: 'th',
    vueI18n: {
      fallbackLocale: 'th',
    },
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieCrossOrigin: true
    },
    langDir: 'static/lang/'
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/styles.scss'],
    optionsPath: './config/vuetify.options.js'
  },
  /*
  ** Render configuration
  */
  render: {
    bundleRenderer: {
      directives: {
        shouldPreload: (file, type) => {
          return ['script', 'style', 'font'].includes(type)
        },
        scroll: function (el, binding) {
          let f = function (evt) {
            if (binding.value(evt, el)) {
              window.removeEventListener('scroll', f)
            }
          }
          window.addEventListener('scroll', f)
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // cssSourceMap: false,
    loaders: {
      vus: { cacheBusting: true },
      scss: { sourceMap: false }
    },
    extend(config, ctx) {
      config.plugins.push(
        new FilterWarningsPlugin({
          exclude: /Critical dependency: the request of a dependency is an expression/
        })
      );
      //      if (ctx.isDev && ctx.isClient) {
      //        config.plugins.push(
      //          new ESLintPlugin({
      //            extensions: ["js", "vue"],
      //            exclude: ["node_modules", "static"],
      //            fix: false
      //          })
      //        );
      //      }
    }
  },
  /*
  ** Page Layout transition
  */
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
    beforeEnter(el) {
      console.log('Before enter...');
    },
    afterLeave(el) {
      console.log('afterLeave', el)
    }
  },
  /*
  ** Application Port
  */
  server: {
    port: 8007, // default: 3000
  }
}
