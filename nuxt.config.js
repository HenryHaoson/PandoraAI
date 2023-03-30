// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.API_BASE_URL,
        },
    },
    router:{
        base:'/chat'
    },
    head: {
        link: [
          // static 目录中的 js 文件也需要加上前缀
          { rel: 'stylesheet', href: '/chat' + '/js/swiper-min.css' },
        ],
        script: [
          // static 目录中的 js 文件也需要加上前缀
          { src: '/chat' + '/js/swiper-min.js', async: false, defer: true },
        ],
      },
    imports: {
        dirs: ['stores'],
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@kevinmarrec/nuxt-pwa',
        'nuxt-icon',
        '@pinia/nuxt',
        '@vueuse/nuxt',
    ],
    css: [
        {
            src: '~/node_modules/highlight.js/styles/base16/dracula.css',
            lang: 'css',
        },
    ],
    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
    pwa: {
        icon: {
            source: './public/icon.png',
            maskablePadding: 0,
        },
        meta: {
            name: 'PandoraAI',
            description: 'Multiple AI Web Chat Client',
            theme_color: '#7733ff',
            mobileAppIOS: true,
            nativeUI: true,
        },
        manifest: {
            name: 'PandoraAI',
            description: 'Multiple AI Web Chat Client',
            background_color: '#7733ff',
            lang: 'en',
            useWebmanifestExtension: false,
        },
    },
});
