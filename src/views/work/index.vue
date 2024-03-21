<template>
    <div>
        <div class="header">
            <Swipe :autoplay="3000" lazy-render>
                <SwipeItem v-for="image in images" :key="image">
                    <img :src="image" />
                </SwipeItem>
            </Swipe>
        </div>
        <div class="center"></div>
    </div>
</template>

<script setup lang="ts">
import { Swipe, SwipeItem } from 'vant';

let images = [
    '/msg/VCG211308717796.webp',
    '/msg/VCG211339815469.webp'
]

</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 180px;
    position: absolute;

    img {
        width: 100%;
        height: 180px;
    }
}

.center {
    width: 100%;
    height: 180px;
    background-color: green;
    border-radius: 26px;
    position: absolute;
    margin-top: 160px;
}
</style>