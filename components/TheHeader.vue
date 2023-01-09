<script setup lang="ts">
import { Component } from "vue";
import { NMenu, MenuOption, NIcon } from "naive-ui";
import {
    HomeOutline as HomeIcon,
} from '@vicons/ionicons5'
import { RouterLink } from "vue-router";

let activeKey = ref(null)


let menuOptions: MenuOption[] = [
    {
        label: () => h(RouterLink, {
            to: "/"
        }, '首页'),
        key: 'home',
        icon: renderIcon(HomeIcon),
    },
    {
        label: () =>
            h(
                'a',
                {
                    href: 'https://mod.3dmgame.com',
                    target: '_blank',
                },
                'Mod站'
            ),
        key: 'mod',
    },
    {
        label: '工具',
        key: 'tools',
        children: [
            {
                label: () => h(
                    'a',
                    {
                        href: 'https://pan.aoe.top',
                        target: '_blank',
                    },
                    '小莫的网盘'
                ),
                key: 'pan',
            },
            {
                label: () => h(
                    'a',
                    {
                        href: 'https://game.aoe.top',
                        target: '_blank',
                    },
                    '小莫的游戏库'
                ),
                key: 'game',
            },
            {
                label: () => h(
                    'a',
                    {
                        href: 'https://git.aoe.top',
                        target: '_blank',
                    },
                    '小莫的开源库'
                ),
                key: 'git',
            },
            {
                label: () => h(
                    'a',
                    {
                        href: 'https://tb.aoe.top/',
                        target: '_blank',
                    },
                    '自动签到'
                ),
                key: 'tb',
            }
        ]
    },
    {
        label: "web项目",
        key: "web",
        children: [
            {
                label: () => h(RouterLink, {
                    to: "/web/css"
                }, 'css'),
                key: 'web_css',
            },
            {
                label: () => h(RouterLink, {
                    to: "/web/JavaScript"
                }, 'JavaScript'),
                key: 'web_js',
            },
            {
                label: () => h(RouterLink, {
                    to: "/web/jQuery"
                }, 'jQuery'),
                key: 'web_jQuery',
            },
            {
                label: () => h(RouterLink, {
                    to: "/web/PHP"
                }, 'PHP'),
                key: 'web_PHP',
            }
        ]
    }
]


function renderIcon(icon: any) {
    return () => h(NIcon, null, { default: () => h(icon) })
}
</script>
<template>
    <header>
        <div class="container">
            <NuxtLink></NuxtLink>
            <div class="nav-header">
                <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
            </div>
        </div>
    </header>
</template>
<script lang="ts">
export default {
    name: "TheHeader"
}
</script>
<style lang="less" scoped>

</style>
