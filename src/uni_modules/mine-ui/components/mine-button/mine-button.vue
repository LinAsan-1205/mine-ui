<script setup lang="ts">
import {toRefs, computed} from 'vue'
import {createPropsDefault, createClassNamespace} from "./";
import type {ButtonProps, ButtonEvents} from './type'

const props = withDefaults(defineProps<ButtonProps>(), createPropsDefault<ButtonProps>({
  block: false,
  disabled: false,
  loading: false,
  size: 'default',
  shape: 'round',
  theme: "default",
  type: "button",
}))

const {index, block, disabled, type, theme} = toRefs(props)

const emit = defineEmits<ButtonEvents>()

const {classes, createBEM} = createClassNamespace('button')

const buttonClass = computed(() => {
  return classes(
      createBEM(),
      createBEM("--var"),
      createBEM(`--${theme.value}`),
      [
        disabled.value,
        createBEM("--disabled"),
      ],
      [
        block.value,
        createBEM("--block"),
      ],
  )
})

const buttonTextClass = computed(() => {
  return classes(
      createBEM("--text"),
  )
})

const onClick = (e: MouseEvent) => {
  emit('click', e, index.value)
}

const getPhoneNumber = () => {
  emit('getPhoneNumber')
}
</script>

<template>
  <button :type="type" @click="onClick" @getphonenumber="getPhoneNumber" :class="buttonClass">
    <text :class="buttonTextClass">{{ text }}</text>
  </button>
</template>

<style lang="scss">
@import './style/button.scss';
</style>
