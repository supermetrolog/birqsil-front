export default defineI18nConfig(nuxt => ({
    legacy: false,
    locale: 'en',
    defaultLocale: 'en',
    fallbackLocale: 'en',
    messages: {
        en: {
            message: {
                welcome: 'Welcome',
            },
            Email: 'Email',
        },
        ru: {
            welcome: 'Добро пожаловать',
            Email: "Почта"
        }
    }
}))