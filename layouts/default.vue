<script setup lang="ts">
import { darkTheme, zhCN, dateZhCN } from "naive-ui";
import { NConfigProvider, NGlobalStyle } from "naive-ui";
</script>
<template>
    <n-config-provider inline-theme-disabled :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
        <n-global-style />
        <TheHeader />
        <slot></slot>
        <TheFooter />
    </n-config-provider>
</template>
<script lang="ts">
export default {
    name: "layout",
};
</script>
<style scoped>

</style>