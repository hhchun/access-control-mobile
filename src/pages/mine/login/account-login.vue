<template>
    <view class="account-login">
        <text class="account-login-title">成为会员可体验完整功能</text>
        <view class="account-login-items">
            <view class="account-login-item">
                <text class="account-login-item-title">账号:</text>
                <input class="account-login-item-input" v-model="account" type="text" placeholder="请输入账号" @input="" />
            </view>
            <view class="account-login-item">
                <text class="account-login-item-title">密码:</text>
                <input class="account-login-item-input" v-model="password" type="text" :password="true" placeholder="请输入密码"
                    @input="" />
            </view>
            <button class="account-login-confirm" @click="loginAccount">
                登录
            </button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import type { SuccessResult } from '@/pages/mine/login';

const account = ref("");
const password = ref("");

let event = "";
onLoad((_query) => {
    const query = _query as { event: string }
    event = query.event
});

const loginAccount = () => {
    uni.navigateBack({
        success: () => {
            const result: SuccessResult = { key: "xxxx" };
            uni.$emit(event, result)
        }
    });
}

</script>

<style>
.account-login {
    padding: 32rpx;
}

.account-login-title {
    height: 250rpx;
    line-height: 250rpx;
    font-size: 40rpx;
    display: block;
    text-align: center;
}

.account-login-items {
    background-color: white;
    padding: 55rpx 35rpx;
    border-radius: 32rpx;
    display: flex;
    flex-direction: column;
    row-gap: 55rpx;
}

.account-login-item {
    display: flex;
    column-gap: 25rpx;
}

.account-login-item-title {
    height: 45rpx;
    line-height: 45rpx;
    font-size: 35rpx;
}

.account-login-item-input {
    flex: 1;
    height: 45rpx;
    line-height: 45rpx;
    font-size: 32rpx;
    padding-bottom: 1px;
    border-bottom: 1px solid #abb0c0;
    color: black;
}

.account-login-confirm {
    width: 230rpx;
    height: 70rpx;
    line-height: 70rpx;
    background-color: white;
    border-radius: 35rpx;
    background-color: #4fa892;
    color: white;
}

button:after {
    border: none;
}

page {
    background-color: #f5f7f9;
}
</style>.