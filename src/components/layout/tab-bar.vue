<script setup lang="ts">
import {ref} from 'vue'
import {getCurrentPage} from "mine-ui/utils"
import {onShow} from "@dcloudio/uni-app";

const tabBarList = [
  {
    icon: 'home',
    text: '首页',
    route: 'pages/index/index'
  },
  {
    icon: 'app',
    text: '应用',
    route: 'pages/app/app'
  },
  {
    icon: 'chat',
    text: '聊天',
    route: 'pages/chat/chat'
  },
  {
    icon: 'user',
    text: '我的',
    route: 'pages/user/user'
  }
]
const tabBarActive = ref(0)
const onTabItem = (route: string, index: number) => {
  tabBarActive.value = index
  uni.switchTab({
    url: `/${route}`
  })
}
onShow(() => {
  const currentPage = getCurrentPage()
  tabBarActive.value = tabBarList.findIndex(item => item.route === currentPage.route)
})
</script>

<template>
  <view class="tabBar">
    <view class="tabBar-list">
      <view @click="onTabItem(item.route, index)"
            :class="[`tabBar-list-item`,tabBarActive===index&&'tabBar-list-checked']"
            v-for="(item,index) in tabBarList"
            :key="index">
        <view :class="[`i-tdesign:${item.icon}`]"></view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.tabBar {
  @apply fixed  bottom-0 left-0 right-0;
  padding-bottom: calc(env(safe-area-inset-bottom) + 30rpx);

  &-list {
    @apply mx-4 rounded-[32px] flex items-center flex-nowrap;
    box-shadow: 0 6px 30px 5px rgba(0, 0, 0, .05), 0 16px 24px 2px rgba(0, 0, 0, .04), 0 8px 10px -5px rgba(0, 0, 0, .08);

    &-item {
      @apply rounded-[99px] m-1 flex-1 px-1 relative h-[40px] flex items-center justify-center;
    }

    &-checked {
      background-color: $uni-tab-active-color;
      color: $uni-color-primary;
      font-weight: 800;
    }
  }
}
</style>
