<script setup lang="ts">

// html 添加 dark
// let html = document.querySelector('html')
// html?.classList.add('dark')

</script>
<template>
    <div class="common-layout">
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
    </div>
</template>
<script lang="ts">
export default {
    name: "layout",
};
</script>
<style lang="less" scoped>

</style>