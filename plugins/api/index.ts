export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            hello: (msg: string): string => {
                console.log("FUCK");
                return `Hello ${msg}!`
            }
        }
    }
});


