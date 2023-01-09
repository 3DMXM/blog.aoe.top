<script lang="ts" setup>
import { NResult, NButton } from "naive-ui";
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

</script>
<template>
    <NuxtLayout>
        <div class="err">
            <n-result :status="error?.statusCode" :title="title" :description="error?.message">
                <template #footer>
                    <n-button @click="handleError">返回首页</n-button>
                </template>
            </n-result>
        </div>
    </NuxtLayout>

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