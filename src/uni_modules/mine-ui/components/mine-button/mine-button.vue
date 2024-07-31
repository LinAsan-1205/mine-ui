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

const {index, block, disabled, type} = toRefs(props)

const emit = defineEmits<ButtonEvents>()

const {classes, createBEM} = createClassNamespace('button')

const buttonClass = computed(() => {
  return classes(
      createBEM(),
      createBEM("--var"),
      [
        disabled.value,
        createBEM("--disabled"),
      ],
      [
        block.value,
        createBEM("--block"),
      ]
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
    <text>{{ text }}</text>
  </button>
</template>

<style scoped>

</style>
