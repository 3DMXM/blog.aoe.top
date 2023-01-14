<script lang='ts' setup>

</script>
<template>

    <div class="Welcome">
        <div class="cover">
            <NuxtLink to="/">
                <h2>小莫的博客园</h2>
                <br>
                <span>记录一些可能会用得到的东西</span>
            </NuxtLink>
        </div>
        <div class="social-link">
            <v-btn icon="mdi-github" href="https://github.com/3DMXM" target="_blank" variant="text">
            </v-btn>
        </div>
    </div>
</template>
<script lang='ts'>

export default {
    name: 'Welcome',
}
</script>
<style lang='less' scoped>
.Welcome {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .cover {
        text-align: center;
        // 字体添加黑色描边
        text-shadow: 2px 2px 2px #666;


        a {
            color: #fff;
            text-decoration: none;

            &:hover {
                opacity: .8;
            }
        }

        h2 {
            font-size: 2rem;
            font-weight: 600;
        }
    }
}
</style>