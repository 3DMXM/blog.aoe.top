### 为什么需要加载进度条？
SPA页面在路由跳转的使用，浏览器不会刷新，当用户点击链接跳转的时候，我们需要给用户一个反馈，告诉用户我们的页面正在加载，不然用户会以为页面卡主了，而导致多次点击，这样反而会给我们的服务器造成压力。


### 安装依赖

```
npm i nprogress
```

### 创建插件
在`plugins`文件夹下创建`loading.ts`文件，写入代码：
```
import NProgress from 'nprogress';

export default defineNuxtPlugin(nuxtApp => {
    let bar = ref<any>(null)
    nuxtApp.hook("app:beforeMount", () => {
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

    nuxtApp.hook("page:start", () => {
        bar.value?.start()

    })
    nuxtApp.hook("page:finish", () => {
        setTimeout(() => {
            bar.value?.done()
        }, 150)
    })

    nuxtApp.hook("app:mounted", () => {
        setTimeout(() => {
            bar.value?.done()
        }, 150)
    })
    nuxtApp.hook("app:error", () => {
        // 判断是否是客户端
        if (process.client) {
            bar.value?.done()
        }
    })
})

```

### 完成

现在点击路由跳转，顶部就已经出现加载进度条了

