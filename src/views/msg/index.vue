<template>
  <div>
    <MsgList :barData="barData" :msgData="data" @msgClick="onMsgClick" @msgRemove="onMsgRemove" @barClick="onBarClick"></MsgList>
  </div>
</template>

<script setup name="Msg">
import {reactive} from 'vue';
import { Dialog } from 'vant';
import MsgList from "@/components/MsgList/index.vue"

const barData = reactive([
  {
    title: '定位已开启',
    icon: 'guide-o'
  }
]);

const data = reactive([
  { 
    userId: '9b54c39939c3776bd706ad315452cde8',
    avatar: './msg/avatar1.jpeg',
    nickName: '李白',
    newestMsg: '最近过得还好吗？',
    unReadCount: 2,
  },
  { 
    userId: '795d2d2f7711170a99958f8c8d195414',
    avatar: './msg/avatar2.jpeg',
    nickName: '关羽',
    newestMsg: 'vue-mobile-template这个模板简直了！',
    unReadCount: 0,
  },
  { 
    userId: 'c4dec0b791ad3df3d4e1bace20dc9c69',
    avatar: './msg/avatar3.jpeg',
    nickName: '白居易',
    newestMsg: 'Hello~',
    dot: true
  },
]);

function onMsgClick(item){
  Dialog({ message: `${item.nickName}被点击！` });
}
function onMsgRemove(item){
  Dialog({ message: `${item.nickName}被移除！` });
}
function onBarClick(item){
  Dialog({ message: `${item.title}被点击！` });
}
</script>

<style>

</style>