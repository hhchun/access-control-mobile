import { ref } from 'vue';
<template>
  <view class="head">
    <view v-if="!loginStatus" class="login">
      <text class="welcome">Hi，欢迎使用~ </text>
      <button class="now-login" @click="login">
        马上登录
      </button>
    </view>
    <view v-if="loginStatus" class="content">
      <image class="avatar" src="../../static/logo.png" />
      <view class="information">
        <text class="nickname">用户</text>
        <text class="phone">17374883612</text>
      </view>
    </view>
    <view class="privilege">
      <text class="privilege-title">
        免费开通会员，即享体验功能
      </text>
      <button class="privilege-purchase">
        去开通
      </button>
    </view>
  </view>
  <view class="main">
    <view class="ability">
      <view class="ability-item">
        <text class="ability-item-label">问题反馈</text>
        <uni-icons type="forward" size="25" color="#aeb3c3" />
      </view>
      <view class="ability-item">
        <text class="ability-item-label">分享系统</text>
        <uni-icons type="forward" size="25" color="#aeb3c3" />
      </view>
      <view class="ability-item">
        <text class="ability-item-label">仓库地址</text>
        <uni-icons type="forward" size="25" color="#aeb3c3" />
      </view>
      <view v-if="loginStatus" class="ability-item">
        <text class="ability-item-label">修改密码</text>
        <uni-icons type="forward" size="25" color="#aeb3c3" />
      </view>
    </view>
  </view>
  <view>
    <button class="logout" v-if="loginStatus" @click="logout">
      退出登录
    </button>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
let loginStatus = ref(false)

function login() {
  loginStatus.value = true;
}

function logout() {
  loginStatus.value = false;
}

</script>
<style>
.head {
  padding: 0px 25rpx 25rpx;
  height: auto;
  background-color: white;
}

.login {
  height: 160rpx;
  display: flex;
  align-items: center;
}

.logout {
  width: 230rpx;
  height: 80rpx;
  background-color: white;
  margin-top: 40rpx;
  border-radius: 40rpx;
  font-size: 32rpx;
}

.content {
  height: 160rpx;
  display: flex;
  align-items: center;
}

.avatar {
  width: 120rpx;
  height: 120rpx;
  border-radius: 50%;
}

.information {
  display: flex;
  flex-direction: column;
  margin-left: 15rpx;
}

.nickname {
  font-size: 35rpx;
  font-weight: bold;
}

.phone {
  color: #abb0c0;
}

.welcome {
  flex: auto;
  font-size: 40rpx;
}

.now-login {
  display: inline-block;
  width: 200rpx;
  height: 75rpx;
  line-height: 75rpx;
  background-color: #6bae91;
  color: white;
  border-radius: 40rpx;
  box-shadow: 0 15rpx 50rpx #add2c2;
}

.privilege {
  height: 130rpx;
  background-color: #fbd97b;
  border-radius: 35rpx 35rpx 0rpx 0rpx;
  padding: 0px 25rpx;
  display: flex;
  align-items: center;
}

.privilege-purchase {
  display: inline-block;
  width: 150rpx;
  height: 60rpx;
  line-height: 60rpx;
  background-color: white;
  color: #653c00;
  border-radius: 30rpx;
  border: none;
  font-size: 30rpx;
}

.privilege-title {
  flex: auto;
  font-size: 35rpx;
  color: white;
}

.main {
  padding: 25rpx 25rpx 0rpx;
}

.ability {
  border-radius: 30rpx;
  background-color: white;
  padding: 25rpx;
}

.ability-item {
  height: 75rpx;
  line-height: 75rpx;
  font-size: 32rpx;
  display: flex;
}

.ability-item-label {
  flex: auto;
}

button:after {
  border: none;
}

page {
  background-color: #f7f7f7;
}
</style>