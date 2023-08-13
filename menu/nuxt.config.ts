// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '',
        title: "BIRQSIL",
        theme: {
            dark: true,
            colors: {
                primary: '#ff0000'
            }
        },
    },
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiSecret: "123",
        // Keys within public, will be also exposed to the client-side
        public: {
            apiBaseUrl: process.env.API_BASE_URL || "",
        }
    },
    typescript: {
        strict: true
    },
    css: [
        '@/assets/styles/null.scss',
        '@/assets/styles/main.scss',
        'vuetify/styles/main.sass',
        '@mdi/font/css/materialdesignicons.css'
    ],
    build: {
        transpile: ["vuetify"]
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/var.scss" as *;'
                }
            }
        }
    },
    modules: [
        '@nuxtjs/i18n'
    ],
    // ssr: false,
    i18n: {
        lazy: true,
        langDir: "../../locales",
        strategy: "prefix_except_default",
        defaultLocale: "en-US",
        fallbackLocale: "en-US",
        locales: [
            {
                code: "en-US",
                iso: "en-US",
                name: "English(US)",
                file: "en-US.json",
            },
            {
                code: "ru-RU",
                iso: "ru-RU",
                name: "Russian(RU)",
                file: "ru-RU.json",
            },
        ],
    },
})
