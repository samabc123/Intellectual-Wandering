<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-title">
        <h3>欢迎使用</h3>
        <h3>智境漫游</h3>
      </div>
      <div class="login-form">
        <div class="login-form-item">
          <svg-icon icon-name="shouji" class-name="icon" />
          <input v-model="form.username" type="text" name="phone" autocomplete="off" placeholder="请输入手机号" />
        </div>
        <div class="login-form-item">
          <svg-icon icon-name="mima" class-name="icon" />
          <input v-model="form.password" type="password" name="password" autocomplete="off" placeholder="请输入密码" />
        </div>
      </div>
      <div class="login-forget">
        <span>忘记密码？</span>
      </div>
      <Button round="true" block type="primary" @click="onLogin">登录</Button>
      <div class="login-other">
        <Divider>其他登陆方式</Divider>
        <ul>
          <li>
            <Button size="small" @click="Dialog({ message: '点击微信' })">微信</Button>
          </li>
          <li>
            <Button size="small" @click="Dialog({ message: '点击淘宝' })">淘宝</Button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup name="Login">
import { reactive } from "vue";
import { Button, Divider, Dialog } from "vant";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const form = reactive({
  username: "",
  password: "",
});

function onLogin() {

  userStore.Login(form).then((response) => {
    router.push({ path: '/' })
  }).catch((err) => {
    Dialog.alert({ message: err });
  })

}
</script>

<style></style>