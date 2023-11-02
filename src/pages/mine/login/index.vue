<template>
    <uni-popup ref="popup" type="bottom" :safe-area="false">
        <view class="login-popup">
            <text class="login-title">成为会员可体验完整功能</text>
            <button class="login-quick" @click="loginQuick">一键登录</button>
            <text class="login-account" @click="loginAccount">使用账号登录</text>
        </view>
    </uni-popup>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import type { UniPopupInstance } from '@uni-helper/uni-ui-types';
import type { SuccessResult } from './index';

const popup = ref<UniPopupInstance | null>()

const open = () => {
    popup.value?.open!('bottom')
}

const close = () => {
    popup.value?.close!()
}

const loginQuick = () => {
    emit('success', { key: "xzx" })
}

const emit = defineEmits<{
    success: [result: SuccessResult]
}>()

const loginAccount = () => {
    const event = "ACCOUNT_LOGIN_SUCCESS_" + new Date().getTime();
    uni.navigateTo({
        url: `/pages/mine/login/account-login?event=${event}`,
        success: () => {
            uni.$once(event, (request: SuccessResult) => {
                emit('success', request);
            })
        }
    })
}

defineExpose({
    open, close
})
</script>
<style>
.login-popup {
    background-color: white;
    border-radius: 32rpx 32rpx 0rpx 0rpx;
    padding: 60rpx 0rpx 60rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 15rpx;
}

.login-title {
    font-size: 35rpx;
}

.login-quick {
    width: 230rpx;
    height: 70rpx;
    line-height: 70rpx;
    background-color: white;
    border-radius: 35rpx;
    background-color: #4fa892;
    color: white;
}

.login-account {
    font-size: 25rpx;
    color: #abb0c0;
}

button:after {
    border: none;
}
</style>