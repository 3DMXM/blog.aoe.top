<script lang='ts' setup>
import { IArticleList } from '@/model/Interfaces';
import { useRoute } from "vue-router";

const route = useRoute();

const prop = defineProps<{
    group: string
}>()

let sort = computed(() => prop.group)

useHead({
    title: `${prop.group} - 小莫的博客园`,
})

let article_list: IArticleList[] = [
    {
        id: 1,
        sort: sort.value,
        title: '【目录&汇总】从0开始教你使用BepInEx为Unity游戏制作插件Mod',
        describe: '什么是BepInEx？BepInEx是一个注入unity引擎游戏，为Mod开发者提供开发入口的一个插件; BepInEx提供了诸多功能，包括： 嵌入式安装 内置配置和日志 使用Harmony 补丁运行方法;[包括Harm…',
        cover: 'https://blog.aoe.top/wp-content/themes/kratos-pjax-master/static/images/thumb/thumb_20.jpg',
        author: "小莫",
        commentNum: 5,
        time: "2023-1-15 21:25:31",
        clickNum: 2654264,
        likeNum: 165,
    },
    {
        id: 2,
        sort: sort.value,
        title: ' 荒野大镖客2 线下内置修改器[RDR2 Native Trainer（RNT）] v0.931',
        describe: '31荒野大镖客2线下内置修改器，决定命名为RDR2 Native Trainer，简称RNT； 是基于Alexander Blade的Script Hook RDR2框架进行编写，所以你需要先安装Script Hook …',
        cover: 'https://blog.aoe.top/wp-content/themes/kratos-pjax-master/static/images/thumb/thumb_11.jpg',
        author: "小莫",
        commentNum: 5,
        time: "2023-1-15 21:25:31",
        clickNum: 2654264,
        likeNum: 165,
    }, {
        id: 3,
        sort: sort.value,
        title: ' 【Nuxt3】为路由跳转添加 顶部加载进度条',
        describe: '为什么需要加载进度条？ SPA页面在路由跳转的使用，浏览器不会刷新，当用户点击链接跳转的时候，我们需要给用户一个反馈，告诉用户我们的页面正在加载，不然用户会以为页面卡主了，而导致多次点击，这样反而会给我们的服务器造成压力…',
        cover: 'https://blog.aoe.top/wp-content/themes/kratos-pjax-master/static/images/thumb/thumb_12.jpg',
        author: "小莫",
        commentNum: 5,
        time: "2023-1-15 21:25:31",
        clickNum: 2654264,
        likeNum: 165,
    }, {
        id: 4,
        sort: sort.value,
        title: '【笔记】使用 Nuxt3 重写博客计划',
        describe: '为什么？ 目前博客程序很不稳定，经常出现崩溃的情况 想用通过 Nuxt3 写一个程序来熟练一下 项目完成后我会对其进行开源 使用库 Nuxt3: https://nuxt.com/ nuxt-seo-kit: https…',
        cover: 'https://mod.3dmgame.com/static/upload/mod/202301/MOD63c21c4d593bd.png',
        author: "小莫",
        commentNum: 5,
        time: "2023-1-15 21:25:31",
        clickNum: 2654264,
        likeNum: 165,
    },
]

</script>
<template>
    <div class="ContentGroup">
        <v-row>
            <v-col cols="12" class="title">分类：{{ group }}</v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <ContentArticleList v-for="item in article_list" :key="item.id" :item="item"></ContentArticleList>
            </v-col>
        </v-row>
    </div>
</template>
<script lang='ts'>

export default {
    name: 'ContentGroup',
}
</script>
<style lang='less' scoped>
.ContentGroup {
    .title {
        font-size: 1.4rem;
        background-color: rgba(0, 0, 0, 0.7);
        text-transform: capitalize;
    }
}
</style>