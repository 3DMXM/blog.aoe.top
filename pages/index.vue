<script setup lang="ts">
import { IArticleList } from '@/model/Interfaces';

useHead({
    title: '小莫的博客园 - 记录一些可能会用得到的东西',
    meta: [
        { name: 'description', content: '欢迎来到小莫的博客园，时不时的分享一些可能用得到的东西，偶尔也会放一些有用的资源，或者一些实用的教程，没事了记得来逛逛呀.' },
        { name: 'keywords', content: '小莫的博客园,编程,技术分享,web,c++,c#,python,nodejs,' }
    ],
})


let article_list: IArticleList[] = [
    {
        id: 1,
        sort: 'Mod',
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
        sort: 'Mod',
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
        sort: 'NodeJS',
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
        sort: '笔记',
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
    <div class="index">
        <ContentArticleList v-for="item in article_list" :key="item.id" :item="item"></ContentArticleList>
    </div>
</template>
<script lang="ts">
export default {
    name: "indedx"
}
</script>
<style scoped>

</style>