<template>
  <div class="profile-container">
    <div class="profile-header">
      <div class="profile-info">
        <Image class="profile-info-avatar" round fit="cover" src="../other/avatar.png"></Image>
        <span class="profile-info-nickname">码农小李</span>
        <span class="profile-info-address">
          <van-icon name="location-o" /> 太原 中北大学
        </span>
      </div>
    </div>
    <Grid :column-num="4" clickable>
      <GridItem icon="balance-list-o" text="全部订单"></GridItem>
      <GridItem icon="paid" text="待付款" badge="3"></GridItem>
      <GridItem icon="sign" text="待收货"></GridItem>
      <GridItem icon="vip-card-o" text="我的VIP卡" dot></GridItem>
    </Grid>
    <CellGroup class="action-group">
      <Cell icon="cart-o" title="我的购物车" is-link />
      <Cell icon="like-o" title="我的收藏" is-link />
      <Cell icon="clock-o" title="我的历史记录" is-link />
    </CellGroup>
    <CellGroup class="action-group">
      <Cell icon="envelop-o" title="意见反馈" is-link />
      <Cell icon="info-o" title="关于版本" is-link />
    </CellGroup>
    <CellGroup class="action-group">
      <Cell icon="home-o" is-link clickable title="退出登录" @click="onLogout"></Cell>
    </CellGroup>
  </div>
</template>

<script setup name="My">
import { Image, Grid, GridItem, CellGroup, Cell } from 'vant';
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const router = useRouter();

function onLogout() {
  userStore.LogOut().then(() => {
    router.push({ path: "/login" });
  });
}
</script>

<style lang="scss">
@import url('../../assets/styles/my.scss');
</style>