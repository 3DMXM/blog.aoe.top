import { createDiscreteApi } from 'naive-ui';
import { DiscreteApi, DiscreteApiType } from 'naive-ui/es/discrete/src/interface';

export default defineNuxtPlugin(nuxtApp => {
    let bar = ref<any>(null)
    nuxtApp.hook("app:beforeMount", (app) => {
        if (!bar.value) {
            let { loadingBar } = createDiscreteApi(['loadingBar']);
            bar.value = loadingBar
        }

    })

    nuxtApp.hook("page:start", (app) => {
        bar.value.start()
    })
    nuxtApp.hook("page:finish", (app) => {
        setTimeout(() => {
            bar.value.finish()
        }, 150)
    })

    // nuxtApp.hook("app:mounted", (app) => {
    //     setTimeout(() => {
    //         bar.value.finish()
    //     }, 150)
    // })
})
