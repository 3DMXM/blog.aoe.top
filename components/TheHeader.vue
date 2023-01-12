<script setup lang="ts">
import { Home } from "@vicons/ionicons5"
import { Tools } from "@vicons/carbon"
import { WebhookFilled } from "@vicons/material"

let menuOptions = [
    {
        label: renderRouterLink('/', '首页'),
        key: 'home',
        icon: Home
    },
    {
        label: "web项目",
        key: "web",
        icon: WebhookFilled,
        children: [
            {
                label: renderRouterLink('/web/css', 'css'),
                key: 'web_css',
            },
            {
                label: renderRouterLink("/web/JavaScript", "JavaScript"),
                key: 'web_js',
            },
            {
                label: renderRouterLink("/web/jQuery", "jQuery"),
                key: 'web_jQuery',
            },
            {
                label: renderRouterLink("/web/PHP", "PHP"),
                key: 'web_PHP',
            }
        ]
    },
    {
        label: "编程",
        key: "program",
        children: [
            {
                label: renderRouterLink("/program/c-program", "C#"),
                key: "program_c-program"
            },
            {
                label: renderRouterLink("/program/c", "C++"),
                key: "program_c"
            },
            {
                label: renderRouterLink("/program/WPF", "WPF"),
                key: "program_WPF"
            },
            {
                label: renderRouterLink("/program/python", "Python"),
                key: "program_python"
            },
            {
                label: renderRouterLink("/program/NodeJS", "NodeJS"),
                key: "program_NodeJS"
            }
        ]
    },
    {
        label: renderRouterLink("/mod", "Mod"),
        key: "mod"
    },
    {
        label: renderRouterLink("/game", "游戏"),
        key: "game"
    },
    {
        label: renderRouterLink("/notes", "笔记"),
        key: "notes"
    },
    {
        label: "其他",
        key: "other",
        children: [
            {
                label: renderRouterLink("/other/gallery", "画廊"),
                key: "other_gallery"
            },
            {
                label: renderRouterLink("/other/animation", "动画"),
                key: "other_animation"
            }
        ]
    },
    {
        label: '工具',
        key: 'tools',
        icon: Tools,
        children: [
            {
                label: readerLink("https://pan.aoe.top", "小莫的云网盘"),
                key: 'pan',
            },
            {
                label: readerLink("https://game.aoe.top", "小莫的游戏库"),
                key: 'game',
            },
            {
                label: readerLink("https://git.aoe.top", "小莫的开源库"),
                key: 'git',
            },
            {
                label: readerLink("https://tb.aoe.top", "自动签到"),
                key: 'tb',
            }
        ]
    },
    {
        label: readerLink("https://mod.3dmgame.com", "Mod站"),
        key: '3dm_mod',
    },
    {
        label: readerLink("https://wanwang.aliyun.com/nametrade/detail/online.html?domainName=aoe.top", "买下我"),
        key: 'buy_me',
    }
]

function renderRouterLink(to: any, label: string) {
    return {
        to,
        label
    }
}
function readerLink(to: string, label: string) {
    return {
        to, label, target: '_blank'
    }
}


function log(text: string) {
    console.log(text)
}

const activeIndex = ref('1')
</script>
<template>
    <el-container>
        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
            <template v-for="item in menuOptions" :key="item.key">
                <el-sub-menu v-if="item.children" :index="item.key">
                    <template #title> {{ item.label }} </template>
                    <el-menu-item v-for="child in item.children" :key="child.key" :index="child.label.to">
                        {{ child.label.label }}
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item v-else :index="item.label.to">
                    {{ item.label.label }}
                </el-menu-item>
            </template>
        </el-menu>
    </el-container>
</template>
<script lang="ts">
export default {
    name: "TheHeader"
}
</script>
<style lang="less" scoped>
// header {
//     position: fixed;
//     top: 0;
//     width: 100%;
//     height: 50px;
//     background: rgba(40, 42, 44, .6);
//     display: flex;
// }
</style>
