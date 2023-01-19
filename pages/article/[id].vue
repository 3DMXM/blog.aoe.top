<script setup lang="ts">
import { useRoute } from "vue-router";
import { marked } from "marked";

import { IArticleData } from "@/model/Interfaces";
import { formatNumber } from '@/model'
import { getContent } from "@/model/api/article";
import 'github-markdown-css/github-markdown-dark.css'

const route = useRoute();
let id = computed(() => parseInt(route.params.id as string))

let data = reactive<IArticleData>({
    id: id.value,
    title: "【目录&汇总】从0开始教你使用BepInEx为Unity游戏制作插件Mod",
    sort: 'Mod',
    time: '2023-1-16 14:32:17',
    author: "小莫",
    describe: "",
    tags: ["BepInEx", "总结", "汇总", "目录"],
    commentNum: 5,
    clickNum: 46561,
    likeNum: 168,
    content: ``,
})


useHead({
    title: `${data.title} - 小莫的博客园`,
    meta: [
        { name: 'description', content: '欢迎来到小莫的博客园，时不时的分享一些可能用得到的东西，偶尔也会放一些有用的资源，或者一些实用的教程，没事了记得来逛逛呀.' },
        { name: 'keywords', content: data.tags?.join(',') },

    ],
})

getContent().then(res => {
    data.content = marked(res.data)
})

</script>
<template>
    <div class="article">
        <v-row>
            <v-col cols="12">
                <h1 class="title">{{ data.title }}</h1>
            </v-col>
            <v-col cols="12" class="article-data">
                <v-chip x-small variant="text" prepend-icon="mdi-clock-time-eight-outline">{{ data.time }}</v-chip>
                <v-chip x-small variant="text" prepend-icon="mdi-comment-processing-outline">
                    {{ formatNumber(data.commentNum) }}条评论
                </v-chip>
                <v-chip x-small variant="text" prepend-icon="mdi-clock-time-eight-outline">
                    {{ formatNumber(data.clickNum) }} 次阅读
                </v-chip>
                <v-chip x-small variant="text" prepend-icon="mdi-thumb-up-outline">
                    {{ formatNumber(data.likeNum) }}人点赞
                </v-chip>
                <v-chip x-small variant="text" prepend-icon="mdi-account">
                    {{ data.author }}
                </v-chip>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="content markdown-body" v-html="data.content"> </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <div class="authorized">本作品采用 知识共享署名-相同方式共享 4.0 国际许可协议 进行许可</div>
            </v-col>
            <v-col cols="12" class="donate">
                <v-btn variant="text" size="large" color="#3496e6" prepend-icon="mdi-bitcoin">投食</v-btn>
                <v-btn variant="text" size="large" color="#e87461" prepend-icon="mdi-thumb-up-outline">点赞</v-btn>
                <v-btn variant="text" size="large" color="#78ce79" prepend-icon="mdi-share-variant">分享</v-btn>
            </v-col>
            <v-col cols="12" class="tags">
                <v-icon icon="mdi-tag-multiple-outline"></v-icon>
                <v-chip v-for="item in data.tags" variant="elevated" class="ma-2" label color="#aaa" size="x-small"
                    :to="`/tags/${item}`" target="_blank">
                    {{ item }}
                </v-chip>
            </v-col>
        </v-row>
    </div>
</template>
<script lang="ts">
export default {
    name: "ArticlePage"
}
</script>
<style lang="less" scoped>
.article {
    background-color: rgba(0, 0, 0, 0.7);

    .title {
        text-align: center;
        font-size: 1.4rem;
    }

    .article-data {
        text-align: center;
    }

    .content {
        background-color: transparent;
        padding: 1rem;
    }

    .authorized {
        padding: 1rem;
        background-color: rgba(71, 70, 70, 0.7);
    }

    .donate {
        text-align: center;
    }

    .tags {
        padding: 1rem 2rem;
    }
}
</style>