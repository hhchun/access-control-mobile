<template>
    <view class="content">
        <view>
            <button @click="onClick" style="width: auto;">
                我是一个按钮QAQ
            </button>
        </view>
    </view>
</template>
  
<script setup lang="ts">
const onClick = () => {
    throw new Error('onClick Error');
}
</script>
  
<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
  