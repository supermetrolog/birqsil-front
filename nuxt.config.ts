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
    }
})

// export default defineAppConfig({
//     title: 'Hello Nuxt',
//     theme: {
//         dark: true,
//         colors: {
//             primary: '#ff0000'
//         }
//     }
// })
