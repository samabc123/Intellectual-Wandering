<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '../stores/index'

const store = useStore()

const router = useRouter()

const back = () => {
    router.back()
}
</script>

<template>
    <div class="head">
        <van-icon name="arrow-left" size="20px" id="icon" @click="back" />
        <div class="text">{{ store.getGpt() }}</div>
    </div>
</template>

<style scoped lang="less">
.head {
    display: flex;
    align-items: center;
    justify-content: center;
    /* 水平居中 */
    background-color: cornflowerblue;
    width: 100%;
    height: 7vh;
    color: aliceblue;
    font-weight: bold;
    font-size: 18px;

    .text {
        flex: 1;
        /* 让文本元素占据剩余空间 */
        text-align: center;
        margin-left: -30px;
        /* 文本居中 */
    }

    #icon {
        position: relative;
        /* 开启相对定位 */
        left: 0;
        margin-left: 2vh;
        /* 将图标相对于父元素向右偏移 */
    }
}
</style>
