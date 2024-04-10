<script lang="ts" setup>
import { emojis } from '@/utils/message'

const emojiArr: Array<string> = emojis().split(',')

</script>

<template>
    <div class="emoji">
        <ul class="emoji-default">
            <li v-for="(item, index) in emojiArr" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
// 纵向滚动条
.scroll-bar(@width: 10px) {
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #ffffff;
    }

    &::-webkit-scrollbar {
        width: @width;
        height: 10px;
        background-color: #ffffff;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.2);
    }
}

.emoji {
    text-align: left;
    width: 71%;
    height: 100%;
    background: #fff;
    border: 1px solid #dcdfe6;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 12%), 0 0 6px 0 rgb(0 0 0 / 4%);

    .emoji-default {
        width: calc(100% - 40px);
        height: 100%;
        overflow-y: auto;
        .scroll-bar();
        padding: 0px 20px;


        li {
            display: inline-block;
            padding: 5px;
            font-size: 24px;
            width: 29px;
            height: 29px;
            overflow: hidden;
            cursor: pointer;
        }

    }
}
</style>