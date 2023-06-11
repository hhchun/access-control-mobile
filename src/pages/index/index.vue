<template>
  <view>
    <!-- 输入框示例
    <uni-popup ref="dialog" type="dialog">
      <uni-popup-dialog mode="base">
        <view>
          <text style="display: block;">我是傻逼</text>
          <text style="display: block;">我是傻逼</text>
          <text style="display: block;">我是傻逼</text>
          <text style="display: block;">我是傻逼</text>
          <text style="display: block;">我是傻逼</text>
          <text style="display: block;">我是傻逼</text>
          <text style="display: block;">我是傻逼</text>
          <text style="display: block;">我是傻逼</text>
          <text style="display: block;">我是傻逼</text>
          <text style="display: block;">我是傻逼</text>
        </view>

      </uni-popup-dialog>
    </uni-popup> -->
    <Sub></Sub>
    <map style="width: 100%;height: 600rpx;" longitude="108.370599" latitude="22.794809" @regionchange="onRegionchange" />
  </view>
</template>
<script setup lang="ts">
import { onErrorCaptured, ref } from "vue";
import type { UniPopupInstance } from "@uni-helper/uni-ui-types";
import Sub from "./sub.vue"

import type { MapOnRegionchangeEvent } from "@uni-helper/uni-app-types";
import { onLoad } from "@dcloudio/uni-app";
import { QQMapWX } from "@/lib/qqmap/qqmap-wx-jssdk";
import type { QQMapWxNamespace } from "@/lib/qqmap/qqmap-wx-jssdk";
const dialog = ref<UniPopupInstance | null>()
const onRegionchange = (e: MapOnRegionchangeEvent) => {
  console.log(e);
}

onLoad(() => {
  const options: QQMapWxNamespace.ConstructorOptions = {
    key: "xxx"
  }
  console.log(options);
  const wxmap = new QQMapWX(options)
  wxmap.search
  console.log(wxmap);

})

onErrorCaptured((err, instance, info) => {
  dialog.value?.open!('center')
  return false;
})
</script>