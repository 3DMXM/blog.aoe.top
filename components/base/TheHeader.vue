<script setup lang="ts">
import { RouterLink } from "vue-router";
import { IMenu } from "@/model/Interfaces";

let MList: IMenu[] = [
    {
        label: "首页",
        key: "home",
        path: "/"
    },
    {
        label: "web项目",
        key: "web",
        path: "/web",
        children: [
            {
                label: "css",
                key: "web_css",
                path: "/web/css"
            },
            {
                label: "JavaScript",
                key: "web_js",
                path: "/web/JavaScript"
            },
            {
                label: "jQuery",
                key: "web_jQuery",
                path: "/web/jQuery"
            },
            {
                label: "PHP",
                key: "web_PHP",
                path: "/web/PHP"
            }
        ]
    },
    {
        label: "编程",
        key: "program",
        path: "/program",
        children: [
            {
                label: 'C#',
                key: "c-program",
                path: "/program/c-program"
            },
            {
                label: 'C++',
                key: 'program_c',
                path: '/program/c'
            },
            {
                label: 'WPF',
                key: 'WPF',
                path: '/program/WPF'
            },
            {
                label: "Python",
                key: "program_python",
                path: "/program/python"
            },
            {
                label: "NodeJS",
                key: "program_NodeJS",
                path: "/program/NodeJS"
            }
        ]
    },
    {
        label: 'Mod',
        key: 'mod',
        path: '/mod'
    },
    {
        label: '游戏',
        key: 'game',
        path: '/game'
    },
    {
        label: '笔记',
        key: 'notes',
        path: '/notes'
    },
    {
        label: "工具",
        key: "tools",
        path: "/tools",
        children: [
            {
                label: "小莫的云网盘",
                key: 'pan_aoe_top',
                path: 'https://pan.aoe.top',
                open: true
            },
            {
                label: '小莫的游戏库',
                key: 'pan_aoe_top',
                path: "https://game.aoe.top",
                open: true
            },
            {
                label: '小莫的开源库',
                key: 'gti_aoe_top',
                path: "https://git.aoe.top",
                open: true
            },
            {
                label: '自动签到',
                key: 'tb_aoe_top',
                path: 'https://tb.aoe.top',
                open: true
            }
        ]
    },
    {
        label: "其他",
        key: "other",
        path: "/other",
        children: [
            {
                label: "画廊",
                key: "other_gallery",
                path: "/other/gallery"
            },
            {
                label: "动画",
                key: "other_animation",
                path: "/other/animation"
            }
        ]
    },
    {
        label: "Mod站",
        key: "3dm_mod",
        path: "https://mod.3dmgame.com",
        open: true
    },
    {
        label: "买下我",
        key: "buy_me",
        path: "https://wanwang.aliyun.com/nametrade/detail/online.html?domainName=aoe.top",
        open: true
    }
]

</script>
<template>
    <header class="header">
        <v-container>
            <ModelMenu :list="MList"></ModelMenu>
        </v-container>
    </header>
</template>
<script lang="ts">
export default {
    name: "TheHeader",
}
</script>
<style lang="less" scoped>
.header {
    background: rgba(40, 42, 44, .6);
}
</style>
