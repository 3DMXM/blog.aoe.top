<script setup lang="ts">

let web_start_time = 2019;
let web_host = "WWW.AOE.TOP"
let web_icp = "湘ICP备2021011453号-1"

</script>
<template>
    <footer>
        <v-container>
            <p class="footer-text">
                {{ `COPYRIGHT ${web_start_time}-2023 ${web_host} ALL RIGHT RESERVED ${web_icp}` }}
            </p>
        </v-container>
    </footer>

</template>
<script lang="ts">
export default {
    name: "TheFooter"
}
</script>
<style lang="less" scoped>
footer {
    background: rgba(40, 42, 44, .6);

    .footer-text {
        text-align: center;
        color: hsla(0, 0%, 100%, .3);
        font-size: 0.8rem;
    }
}
</style>