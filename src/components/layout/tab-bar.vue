<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import {getCurrentPage, type CurrentPage} from "mine-ui/utils"

const tabBarList = [
  {
    icon: 'home',
    text: '首页',
    route: 'pages/index/index'
  },
  {
    icon: 'app',
    text: '应用',
  },
  {
    icon: 'chat',
    text: '聊天',
  },
  {
    icon: 'user',
    text: '我的',
  }
]
const tabBarActive = ref(0)

const route = computed((): CurrentPage => getCurrentPage())

watch(() => route.value, (data: CurrentPage) => {
  tabBarActive.value = tabBarList.findIndex(item => item.route === data.route)
}, {immediate: true})

const onTabItem = (index: number) => {
  tabBarActive.value = index
}
</script>

<template>
  <view class="tabBar">
    <view class="tabBar-list">
      <view @click="onTabItem(index)"
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
      background-color: #f2f3ff;
      color: #0052d9;
      font-weight: 800;
    }
  }
}
</style>
