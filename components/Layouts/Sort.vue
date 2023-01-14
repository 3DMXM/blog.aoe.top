<script lang='ts' setup>

let sort_list = [
    {
        text: 'C++',
        path: '/sort/c++'
    },
    {
        text: 'css',
        path: '/sort/css'
    },
    {
        text: 'JavaScript',
        path: '/sort/JavaScript'
    },
    {
        text: 'jQuery',
        path: '/sort/jQuery'
    },
    {
        text: 'Mod',
        path: '/sort/Mod'
    },
    {
        text: 'NodeJS',
        path: '/sort/NodeJS'
    },
    {
        text: 'PHP',
        path: '/sort/PHP'
    },
    {
        text: 'Python',
        path: '/sort/Python'
    },
    {
        text: '动画',
        path: '/sort/animation'
    },
    {
        text: '游戏',
        path: '/sort/games'
    },
    {
        text: '画廊',
        path: '/sort/gallery'
    },
    {
        text: '白嫖资讯',
        path: '/sort/free'
    },
    {
        text: '笔记',
        path: '/sort/notes'
    },
]

</script>
<template>
    <div class="sort module">
        <h3 class="title">分类</h3>
        <div class="sort-list">
            <ul>
                <li v-for="item in sort_list">
                    <v-btn prepend-icon="mdi-folder-outline" variant="text" :to="item.path">
                        {{ item.text }}
                    </v-btn>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang='ts'>

export default {
    name: 'LayoutsSort',
}
</script>
<style lang='less' scoped>
.sort {
    background-color: rgba(0, 0, 0, .4);
    padding: 1rem;

    .title {
        margin-bottom: 1rem;
    }

    .sort-list {
        ul {
            list-style: none;
        }
    }
}
</style>