<template>
    <view class="content">
        <view class="header">
            <text>标签管理</text>
        </view>
        <view class="main">
            <mescroll-body @init="mescrollInit" @down="downCallback" @up="upCallback" >
                <uni-swipe-action>
                    <uni-swipe-action-item v-for="i in 100" :key="i">
                        <template v-slot:left>
                            <view><text>置顶</text></view>
                        </template>
                        <view>
                            <text>使用插槽</text>
                        </view>
                        <template v-slot:right>
                            <view><text>删除</text></view>
                        </template>
                    </uni-swipe-action-item>
                </uni-swipe-action>
            </mescroll-body>
        </view>
        <text class="footer">
            <text>操作</text>
        </text>
    </view>
</template>

<script setup lang="ts">
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app';

import MescrollBody from "mescroll-uni/mescroll-body.vue";


const mescrollInit = () => {
    console.log("mescrollInit");
}

const downCallback = () => {
    console.log("downCallback");
}

const upCallback = () => {
    console.log("upCallback");
}

</script>

<style>
.content {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.header {
    /* flex: 0 0 auto; */
}

.main {
    flex: 1;
    overflow: auto;
}

.footer {
    /* flex: 0 0 auto; */
}

page {
    height: 100%;
}
</style>