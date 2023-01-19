<script setup lang="ts">
import { useTheme } from "vuetify";
useHead({
    htmlAttrs: {
        lang: 'zh-CN',
    },
})

const theme = useTheme();
theme.global.name.value = "dark";
</script>
<template>
    <v-app>
        <v-main class="layout">
            <BaseTheHeader />
            <v-container>
                <BaseWelcome />
                <v-row>
                    <v-col cols="12"> <v-divider></v-divider></v-col>
                    <v-col cols="4">
                        <LayoutsSidebar />
                    </v-col>
                    <v-col cols="8">
                        <slot></slot>
                    </v-col>
                </v-row>

            </v-container>
            <BaseTheFooter />
        </v-main>
    </v-app>
</template>
<script lang="ts">
export default {
    name: "layout",
};
</script>
<style lang="less" scoped>

</style>