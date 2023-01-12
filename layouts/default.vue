<script setup lang="ts">

useHead({
    htmlAttrs: {
        lang: 'zh-CN',
        class: 'dark',
    },
})

</script>
<template>
    <div class="common-layout">
        <el-config-provider namespace="el">
            <SeoKit />
            <el-container>
                <el-header>
                    <TheHeader />
                </el-header>
                <el-main>
                    <slot></slot>
                </el-main>
                <el-footer>
                    <TheFooter />
                </el-footer>
            </el-container>
        </el-config-provider>
    </div>
</template>
<script lang="ts">
export default {
    name: "layout",
};
</script>
<style lang="less" scoped>

</style>