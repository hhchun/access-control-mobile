<template>
    <view class="main">
        <view class="user-info-area">
            <view>
                用户信息区
            </view>
            <view>
                二维码
            </view>
        </view>
        <view class="ability-area">
            <view class="ability">
                <text class="ability-title">用户功能</text>
                <view class="ability-items">
                    <navigator :url="routes.label" open-type="navigate" class="ability-item">
                        <i class="ability-icon icon-label ability-item-icon"></i>
                        <text class="ability-item-label">标签管理</text>
                    </navigator>
                    <view class="ability-item">
                        <i class="ability-icon icon-permission ability-item-icon"></i>
                        <text class="ability-item-label">权限管理</text>
                    </view>
                    <view class="ability-item">
                        <i class="ability-icon icon-role ability-item-icon"></i>
                        <text class="ability-item-label">角色管理</text>
                    </view>
                    <view class="ability-item">
                        <i class="ability-icon icon-user ability-item-icon"></i>
                        <text class="ability-item-label">用户管理</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<script setup lang="ts">

const routes = {
    label: "/pages/workbench/access/label/index"
}

</script>
<style>
@import "@/static/iconfont/ability-icon.css";

.main {
    padding: 64rpx 32rpx 0rpx;
    display: flex;
    flex-direction: column;
    row-gap: 26rpx;
}

.user-info-area {
    padding: 32rpx;
    height: 150rpx;
    background-color: white;
    border-radius: 32rpx;
}

.ability-area {
    display: flex;
    flex-direction: column;
    row-gap: 26rpx;
}

.ability {
    padding: 32rpx;
    border-radius: 32rpx;
    background-color: white;
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

page {
    background-color: #f5f7f9;
}
</style>