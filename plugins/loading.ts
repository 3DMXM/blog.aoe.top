import NProgress from 'nprogress';


export default defineNuxtPlugin(nuxtApp => {
    let bar = ref<any>(null)
    nuxtApp.hook("app:beforeMount", (app) => {
        if (!bar.value) {
            bar.value = NProgress.configure({
                easing: 'ease',
                speed: 500,
                showSpinner: false,
                trickleSpeed: 200,
                minimum: 0.3
            })
        }
    })

    nuxtApp.hook("page:start", (app) => {
        bar.value?.start()

    })
    nuxtApp.hook("page:finish", (app) => {
        setTimeout(() => {
            bar.value?.done()
        }, 150)
    })

    nuxtApp.hook("app:mounted", (app) => {
        setTimeout(() => {
            bar.value?.done()
        }, 150)
    })
    nuxtApp.hook("app:error", (app) => {
        // 判断是否是客户端
        if (process.client) {
            bar.value?.done()
        }
    })
})
