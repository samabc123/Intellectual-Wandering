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
        <span @click="findBack">忘记密码？</span>
      </div>
      <div class="login-norooter">
        <span @click="register">还没有账号?点击注册</span>
      </div>
      <van-button block type="primary" @click="onLogin" round>登录</van-button>
      <div class="login-other">
        <Divider>其他登陆方式</Divider>
        <ul>
          <li>
            <svg-icon @click="Dialog({ message: '点击微信' })" icon-name="weixin" class-name="icon" />
          </li>
          <li>
            <svg-icon @click="Dialog({ message: '点击QQ' })" icon-name="QQ" class-name="icon" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup name="Login">
import { reactive } from "vue"
import { Divider, Dialog } from "vant"
import { useUserStore } from "@/stores/user"
import { useRouter } from "vue-router"

const router = useRouter()
const userStore = useUserStore()

const form = reactive({
  username: "",
  password: "",
})

function onLogin() {
  userStore.Login(form).then(() => {
    router.push({ path: '/work' })
  }).catch((err) => {
    Dialog.alert({ message: err })
  })
}
function findBack() {
  router.push({ path: '/retrievePassword' })
}
function register() {
  router.push({ path: '/register' })
}
</script>

<style></style>