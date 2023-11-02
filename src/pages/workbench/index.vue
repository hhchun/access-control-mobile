<template>
  <view>
    <view v-if="!loginStatus" class="not-login">
      <text class="not-login-title">成为会员可体验完整功能</text>
      <button class="now-login" @click="login">去登录</button>
    </view>
    <view v-if="loginStatus">
      <ability-area></ability-area>
    </view>
  </view>
</template>
<script setup lang="ts">
import abilityArea from "@/pages/workbench/ability-area.vue"
let loginStatus = true;

const login = () => {
  uni.switchTab({
    url: "/pages/mine/index"
  })
}

</script>

<style>
.whole {
  padding: 64rpx 32rpx 0rpx;
}

.not-login {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.not-login-title {
  height: 96rpx;
  line-height: 96rpx;
  font-size: 32rpx;
  color: #abb0c0;
}

.now-login {
  width: 230rpx;
  height: 70rpx;
  line-height: 70rpx;
  background-color: white;
  border-radius: 35rpx;
  background-color: #4fa892;
  color: white;
}

page {
  background-color: #f5f7f9;
}
</style>