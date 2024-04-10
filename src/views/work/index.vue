<template>
    <div class="container">
        <div class="header">
            <Swipe :autoplay="3000" lazy-render>
                <SwipeItem v-for="image in images" :key="image">
                    <img :src="image" />
                </SwipeItem>
            </Swipe>
        </div>
        <div class="center">
            <van-grid :column-num="3">
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
            </van-grid>
            <div class="middle">
                <van-tabs :active="active" sticky>
                    <van-tab v-for="index in 3" :title="tit[index-1]" :key="index">
                        内容 {{ index }}
                    </van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swipe, SwipeItem } from 'vant';
import { ref } from 'vue'

let images = [
    '/msg/VCG211308717796.webp',
    '/msg/VCG211339815469.webp'
]
let tit = [
    '经典推荐',
    '行程',
    '结伴行',
]
const active = ref(0);

</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 180px;
    position: absolute;

    img {
        width: 100%;
        height: 160px;
    }
}

.center {
    width: 100%;
    height: 180px;
    border-radius: 26px;
    position: absolute;
    margin-top: 160px;
    // opacity: 0.9;

    .middle {
        width: 100%;
        height: 40px;
        --van-tab-text-color: white;
        --van-tab-active-text-color:white;
        --van-tabs-nav-background-color: grey;
        --van-tabs-bottom-bar-color:white;
    }
}
</style>