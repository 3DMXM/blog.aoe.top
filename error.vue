<script lang="ts" setup>
const props = defineProps({
    error: Object
})

const handleError = () => clearError({ redirect: '/' })


let title = computed(() => {
    switch (props.error?.statusCode) {
        case "404":
            return '404 页面不存在'
            break;
        case "500":
            return '500 服务器错误'
            break;
        default:
            return '出错了'
            break;
    }
})

console.log(props.error);

</script>
<template>
    <div>
        <el-result icon="error" title="错误" :sub-title="title">
            <template #extra>
                <el-button type="primary" @click="handleError">返回首页</el-button>
            </template>
        </el-result>
    </div>

</template>
<script lang="ts">
export default {
    name: "error"
}
</script>
<style lang="less" scoped>
.err {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>