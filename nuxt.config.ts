// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/main.less', 'vuetify/styles', '@mdi/font/css/materialdesignicons.css'],
    modules: [
        // '@pinia/nuxt'
        '@nuxtjs/axios',
    ],
    extends: [
        'nuxt-seo-kit'
    ],
    build: {
        transpile: ['vuetify'],
    },
    runtimeConfig: {
        public: {
            siteUrl: 'https://blog.aoe.top',
            siteName: '小莫的博客园',
            siteDescription: '欢迎来到小莫的博客园，时不时的分享一些可能用得到的东西，偶尔也会放一些有用的资源，或者一些实用的教程，没事了记得来逛逛呀.',
            language: 'zh-cn',
            titleSeparator: '·',
        }
    },
    elementPlus: {
        themes: ['dark']
    },
    axios: {
        // 是否可以跨域
        proxy: true,
        // baseUr: 'https://blog.aoe.top',
    }
})
