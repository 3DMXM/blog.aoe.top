<script setup lang="ts">
import { IArticleList } from '@/model/Interfaces';
import { formatNumber } from '@/model';

const prop = defineProps<{
    item: IArticleList
}>()



</script>
<template>
    <v-row class="article">
        <v-col cols="4">
            <RouterLink :to="`/article/${item.id}`">
                <v-img :src="item.cover" :aspect-ratio="16 / 9" cover></v-img>
            </RouterLink>

        </v-col>
        <v-col cols="8">
            <div class="top">
                <h2 class="title"><v-chip class="ma-2 tag" label prepend-icon="mdi-label" color="#51aded"
                        :to="`/sort/${item.sort}`" target="_blank">{{ item.sort }}</v-chip>
                    <RouterLink :to="`/article/${item.id}`">{{ item.title }}</RouterLink>
                </h2>
            </div>
            <div class="describe">{{ item.describe }}</div>
        </v-col>
        <v-col cols="12">
            <v-row>
                <v-col cols="10">
                    <v-chip x-small variant="text" prepend-icon="mdi-clock-time-eight-outline">{{ item.time }}</v-chip>
                    <v-chip x-small variant="text" prepend-icon="mdi-comment-processing-outline">
                        {{ formatNumber(item.commentNum) }}条评论
                    </v-chip>
                    <v-chip x-small variant="text" prepend-icon="mdi-clock-time-eight-outline">
                        {{ formatNumber(item.clickNum) }} 次阅读
                    </v-chip>
                    <v-chip x-small variant="text" prepend-icon="mdi-thumb-up-outline">
                        {{ formatNumber(item.likeNum) }}人点赞
                    </v-chip>
                    <v-chip x-small variant="text" prepend-icon="mdi-account">
                        {{ item.author }}
                    </v-chip>
                </v-col>
                <v-col cols="2" class="open">
                    <v-btn variant="text" append-icon="mdi-chevron-right" :to="`/article/${item.id}`">阅读全文</v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>
<script lang="ts">
export default {
    name: "ContentArticleList"
}
</script>
<style lang="less" scoped>
.article {
    .top {
        .title {
            font-size: 1.2rem;
            margin: 0;

            a {
                color: #fff;
                text-decoration: none;

                &:hover {
                    opacity: .8;
                }
            }
        }
    }

    .describe {
        opacity: .8;
    }

    .open {
        text-align: right;
    }
}
</style>