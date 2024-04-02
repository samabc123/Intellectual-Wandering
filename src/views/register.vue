<template>
  <div class="container">
    <van-form class="form-wrap" @submit="submit">
      <div class="form">
        <van-cell-group inset>
          <van-field v-model="phone" rows="1" clearable autosize label="+86" type="textarea" placeholder="请输入手机号" />
          <van-field v-model="sms" center clearable label="验证码" placeholder="请输入验证码">
            <template #button>
              <van-button size="small" type="primary">发送验证码</van-button>
            </template>
          </van-field>
        </van-cell-group>
      </div>
      <div style="margin: 16px 0">
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
        <p @click="backLogin()" class="change-btn">登录已有账号</p>
      </div>
    </van-form>
  </div>
</template>

<script setup name="register">
import { ref, reactive } from 'vue'
import { useRouter } from "vue-router"

const router = useRouter()

const state = reactive({
  phone: "",
  sms: "",
})

function backLogin() {
  router.push({ path: '/login' })
}

</script>

<style lang="scss">
@import url("../assets/styles/register.scss");
</style>