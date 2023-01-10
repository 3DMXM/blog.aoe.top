<script lang='ts' setup>
// import { NIcon, NSpace, NButton } from 'naive-ui'
// import { Github } from '@vicons/fa'


// function open(url: string) {
//     window.open(url)
// }

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
            <!-- <n-space>
                <n-button text @click="open('https://github.com/3DMXM')">
                    <template #icon>
                        <n-icon>
                            <Github />
                        </n-icon>
                    </template>
                    GitHub
                </n-button>
            </n-space> -->
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
    padding-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(66, 64, 64, .2);
    flex-direction: column;
    // 字体添加黑色描边
    text-shadow: 0 0 1px #000;
    // background-image: url(https://mod.3dmgame.com/api/RandomBackgroundImg.jpg);
    // background-size: cover;
    // background-attachment: fixed;

    .cover {
        display: flex;
        text-align: center;

        h2 {
            font-size: 2.5rem;
            margin: 0;
        }

        a {
            color: #fff;
            text-decoration: none;

            &:hover {
                color: rgb(228, 224, 224);
            }
        }
    }

    .social-link {
        padding: 1rem 0;
    }
}
</style>