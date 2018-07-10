const en = require('./locales/en.json')
const ru = require('./locales/ru.json')
const et = require('./locales/et.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-farfor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    ['nuxt-sass-resources-loader', '~assets/scss/_global.scss'],
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        seo: false,
        locales: [
          { code: 'en', iso: 'en-US', file: en },
          { code: 'ru', iso: 'ru-RU', file: ru },
          { code: 'et', iso: 'et-ET', file: et }
        ],
        defaultLocale: 'ru',
        routesNameSeparator: '__',
        vueI18n: {
          fallbackLocale: 'ru',
          messages: {
            en,
            ru,
            et
          }
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        }
      }
    ]
  ],
  plugins: ['~/plugins/global.js'],
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
