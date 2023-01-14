<script lang='ts' setup>
import { IMenu } from '@/model/Interfaces';
import { Component, render } from 'vue';
import { useRouter } from "vue-router";

const prop = defineProps<{
    list: IMenu[],
    value?: string,
    color?: string,
}>()
const router = useRouter()

const open = (item: IMenu) => {
    if (item.open) {
        window.open(item.path as string, "_blank")
    } else {
        router.push(item.path)
    }
}

</script>
<template>
    <v-tabs>
        <template v-for="item in list" :key="item.key">
            <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                    <template v-if="item.children">
                        <v-btn :color="color" variant="text" v-bind="props" append-icon="mdi-chevron-down">
                            {{ item.label }}
                        </v-btn>
                    </template>
                    <template v-else>
                        <v-btn v-if="item.open" :color="color" variant="text" :href="(item.path as string)"
                            target="_blank">
                            {{ item.label }}
                        </v-btn>
                        <v-btn v-else :color="color" variant="text" :to="item.path">
                            {{ item.label }}
                        </v-btn>
                    </template>

                </template>
                <v-list v-if="item.children">
                    <template v-for="children in item.children" :key="children.key">
                        <v-list-item v-if="children.open" :value="children.key" :href="(children.path as string)"
                            target="_blank">
                            <v-list-item-title>{{ children.label }}</v-list-item-title>
                        </v-list-item>
                        <v-list-item v-else :value="children.key" :to="children.path">
                            <v-list-item-title>{{ children.label }}</v-list-item-title>
                        </v-list-item>
                    </template>

                </v-list>
            </v-menu>

        </template>
    </v-tabs>
</template>
<script lang='ts'>

export default {
    name: 'ModelMenu',
}
</script>
<style lang='less' scoped>

</style>