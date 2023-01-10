// import { createDiscreteApi } from 'naive-ui';
// import { DiscreteApi, DiscreteApiType } from 'naive-ui/es/discrete/src/interface';

import { ElLoading } from 'element-plus'


export default defineNuxtPlugin(nuxtApp => {
    let bar = ref<any>(null)
    nuxtApp.hook("app:beforeMount", (app) => {
        if (!bar.value) {
            bar.value = ElLoading.service({
                lock: true,
                text: '加载中...',
                spinner: 'el-icon-loading',
            })
        }
    })

    nuxtApp.hook("page:start", (app) => {
        bar.value?.close()

    })
    nuxtApp.hook("page:finish", (app) => {
        setTimeout(() => {
            bar.value?.close()
        }, 150)
    })

    nuxtApp.hook("app:mounted", (app) => {
        bar.value?.service({
            lock: false
        })
    })
})
