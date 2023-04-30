// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '',
        title: "nigga",
        theme: {
            dark: true,
            colors: {
                primary: '#ff0000'
            }
        }
    },
    css: [
        '@/assets/styles/null.scss',
        '@/assets/styles/main.scss',
    ],
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
        '@nuxtjs/i18n',
    ],
    i18n: {
        lazy: true,
        langDir: "locales",
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
