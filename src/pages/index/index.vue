<template>
  <mine-button index="1" text="测试按钮" @click="onClick"/>
</template>

<script setup lang="ts">
const onClick = (_: MouseEvent, index: string | number) => {
  console.log(index, 'index')
}
</script>

<style>
</style>


<route lang="json">
{
"layout": "home",
"style": { "navigationBarTitleText": "mine-ui" }
}
</route>
