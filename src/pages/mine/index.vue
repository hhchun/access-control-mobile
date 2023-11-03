<template>
  <view class="head">
    <view class="content">
      <image class="avatar" src="../../static/logo.png" />
      <view class="information">
        <text class="nickname">欢迎使用</text>
        <text class="phone">成为会员可体验完整功能</text>
      </view>
      <button v-if="!loginStatus" class="now-login" @click="login">
        去登录
      </button>
    </view>
  </view>
  <view class="main">
    <view class="ability">
      <text class="ability-title">常用功能</text>
      <view class="ability-items">
        <view class="ability-item">
          <i class="mine icon-help ability-item-icon"></i>
          <text class="ability-item-label">问题反馈</text>
        </view>
        <view class="ability-item">
          <i class="mine icon-share ability-item-icon"></i>
          <text class="ability-item-label">分享系统</text>
        </view>
        <view class="ability-item">
          <i class="mine icon-community ability-item-icon"></i>
          <text class="ability-item-label">仓库地址</text>
        </view>
        <view v-if="loginStatus" class="ability-item">
          <i class="mine icon-security ability-item-icon"></i>
          <text class="ability-item-label">修改密码</text>
        </view>
      </view>
    </view>
  </view>
  <view>
    <button class="logout" v-if="loginStatus" @click="logout">
      退出登录
    </button>
  </view>
  <view>
    <Login ref="_login" @success="loginSuccessCallback"></Login>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Login from "./login";
import type { LoginInstance, SuccessResult as LoginSuccessResult } from "./login";

const _login = ref<LoginInstance>();
let loginStatus = ref(false);

function login() {
  _login.value?.open();
}

function logout() {
  loginStatus.value = false;
}

function loginSuccessCallback(result: LoginSuccessResult) {
  console.log("loginSuccessCallback", result.key);
  _login.value?.close();
  loginStatus.value = true;
}

</script>
<style>
@import "@/static/iconfont/mine.css";

.head {
  padding: 35rpx 32rpx 0rpx;
  height: auto;
}

.login {
  height: 160rpx;
  display: flex;
  align-items: center;
}

.content {
  height: 160rpx;
  display: flex;
  align-items: center;
}

.avatar {
  width: 115rpx;
  height: 115rpx;
  border-radius: 50%;
}

.information {
  display: flex;
  flex-direction: column;
  padding: 19rpx 32rpx 6.5rpx
}

.nickname {
  font-size: 45rpx;
  font-weight: bold;
}

.phone {
  font-size: 30rpx;
  color: #abb0c0;
}

.welcome {
  flex: auto;
  font-size: 40rpx;
}

.now-login {
  display: inline-block;
  width: 145rpx;
  height: 58rpx;
  line-height: 58rpx;
  font-size: 28rpx;
  background-color: white;
  border-radius: 34rpx;
  padding: 0rpx;
  background-color: #4fa892;
  color: white;
}

.logout {
  width: 230rpx;
  height: 80rpx;
  line-height: 80rpx;
  background-color: white;
  margin-top: 40rpx;
  border-radius: 40rpx;
}

.main {
  padding: 32rpx 32rpx 0rpx;
}

.ability {
  border-radius: 32rpx;
  background-color: white;
  padding: 32rpx;
}

.ability-title {
  font-size: 36rpx;
}

.ability-items {
  display: flex;
  flex-wrap: wrap;
}

.ability-item {
  width: 25%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 40rpx;
}

.ability-item-icon {
  font-size: 55rpx;
}

.ability-item-label {
  margin-top: 6rpx;
  font-size: 26rpx;
}

button:after {
  border: none;
}

page {
  background-color: #f5f7f9;
}
</style>