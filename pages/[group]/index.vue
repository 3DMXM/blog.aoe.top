<script lang='ts' setup>
</script>
<template>
    <div class="group">
        <ContentGroup :group="($route.params.group as string)"></ContentGroup>
    </div>
</template>
<script lang='ts'>

export default {
    name: 'Group',
}
</script>
<style lang='less' scoped>

</style>