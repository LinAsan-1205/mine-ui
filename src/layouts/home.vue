<script setup lang="ts">
import TabBar from "@/components/layout/tab-bar.vue";
</script>

<template>
  <view class="layout">
    <slot/>
    <tab-bar/>
  </view>
</template>

<style scoped lang="scss">
.layout {
  padding-bottom: calc(env(safe-area-inset-bottom) + 30rpx);
}
</style>
