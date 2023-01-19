<script lang='ts' setup>

</script>
<template>
    <div class="group">
        <ContentGroup :group="($route.params.name as string)"></ContentGroup>
    </div>
</template>
<script lang='ts'>

export default {
    name: 'defaultPage',
}
</script>
<style lang='less' scoped>

</style>