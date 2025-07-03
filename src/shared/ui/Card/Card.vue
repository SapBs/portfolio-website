<template>
  <Motion
      :initial="getInitialState()"
      :animate="{ opacity: 1, x: 0, y: 0 }"
      :transition="{ duration: 0.5, ease: 'easeInOut', delay: props.delay }"
      class="rounded-xl"
      :class="isPhoto ? '' : 'p-4 md:p-6'"
  >
    <slot />
  </Motion>
</template>

<script setup lang="ts">
import { Motion } from '@oku-ui/motion'

const props = defineProps({
  corner: {
    type: String,
    default: 'left',
    validator: (value: string) =>
        ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'bottom', 'left', 'right'].includes(value)
  },
  animationType: {
    type: String,
    default: 'slide',
    validator: (value: string) => ['slide', 'fade-only'].includes(value)
  },
  delay: {
    type: Number,
    default: 0
  },
  isPhoto: {
    type: Boolean,
    default: false
  }
})

const getInitialState = () => {
  if (props.animationType === 'fade-only') {
    return { opacity: 0, x: 0, y: 0 }
  }

  return {
    opacity: 0,
    x: getInitialX(),
    y: getInitialY()
  }
}

const getInitialX = () => {
  if (['left', 'top-left', 'bottom-left'].includes(props.corner)) {
    return -80
  }
  if (['right', 'top-right', 'bottom-right'].includes(props.corner)) {
    return 80
  }
  return 0
}

const getInitialY = () => {
  if (props.corner === 'bottom') {
    return 80
  }
  return 0
}
</script>
