<template>
  <view>
    <text>{{ counter.count }}</text>
  </view>
</template>
<script setup lang="ts">
import { onErrorCaptured, ref } from "vue";
import type { UniPopupInstance } from "@uni-helper/uni-ui-types";
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
counter.count++

const dialog = ref<UniPopupInstance | null>()
onErrorCaptured((err, instance, info) => {
  dialog.value?.open!('center')
  return false;
})

</script>