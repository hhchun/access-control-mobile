<template>
  <view>
    <text>{{ counter.count }}</text>
  </view>
</template>
<script setup lang="ts">
import { onErrorCaptured, ref } from "vue";
import type { UniPopupInstance } from "@uni-helper/uni-ui-types";
import { useCounterStore } from '@/stores/counter';
import request from "@/utils/request/request";

const counter = useCounterStore()
counter.count++

request({
  url: "/test",
  method: "GET"
}).then(r => {
  console.log("then");
})

const dialog = ref<UniPopupInstance | null>()

onErrorCaptured((err, instance, info) => {
  dialog.value?.open!('center')
  return false;
})

</script>

<style>
page {
  background-color: #f5f7f9;
}
</style>