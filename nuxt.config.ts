// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  css: ['~/assets/main.css'],

  typescript: {
    strict: false,
    typeCheck: false
  },

  app: {
    head: {
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M9RX32HS');`,
          type: 'text/javascript',
          tagPosition: 'head'
        }
      ],
      title: 'A.H Entrümpelung & Umzüge',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professionelle Entrümpelung und Entsorgung' },
        { name: 'google-site-verification', content: 'fMr-EiJqRKqn_3efq2SkUysamwGE1hrCpJzVDlo2sX4' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicon-48px.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96px.png' },
        { rel: 'icon', type: 'image/png', sizes: '144x144', href: '/favicon-144px.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192px.png' },
        { rel: 'apple-touch-icon', sizes: '192x192', href: '/favicon-192px.png' }
      ]
    }
  },

  // Sitemap and Robots configuration
  runtimeConfig: {
    public: {
      siteUrl: 'https://ah-umzuege.de'
    }
  }
})
