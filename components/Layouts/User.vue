<script lang='ts' setup>
import { getUser } from '@/model/api/user'
import { IUser } from '@/model/Interfaces';

let user = ref<IUser | null>(null)
let avatar = computed(() => {
    if (user.value) {
        return user.value.avatar
    }
    return 'https://mod.3dmgame.com/static/upload/mod/202301/MOD63c25b9125dc3.png@webp'
})
getUser().then(res => {
    if (res.data.code == 200) {
        user.value = res.data.user
    }
})
</script>
<template>
    <div class="user">
        <div class="user-top"></div>
        <div class="user-avatar">
            <v-avatar :size="100">
                <v-img :src="avatar"></v-img>
            </v-avatar>
        </div>
        <div class="user-bottom">
            <p>愣着干嘛，点我登录呀</p>
        </div>
    </div>
</template>
<script lang='ts'>

export default {
    name: 'LayerUser',
}
</script>
<style lang='less' scoped>
.user {
    display: flex;
    height: 300px;
    flex-direction: column;
    background-color: rgba(0, 0, 0, .4);
    margin-bottom: 15px;

    .user-top {
        background-image: url(https://mod.3dmgame.com/static/upload/mod/202301/MOD63c255d1eac87.jpg);
        height: 150px;
        background-size: cover;
    }

    .user-avatar {
        text-align: center;
        margin-top: -50px;
    }

    .user-bottom {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
</style>