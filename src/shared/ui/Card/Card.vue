<template>
  <Motion
    :initial="getInitialState()"
    :animate="{ opacity: 1, x: 0, y: 0 }"
    :transition="{ duration: 0.8, ease: 'easeOut', delay: props.delay }"
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
    default: 'top-left',
    validator: (value: string) => ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'bottom', 'left', 'right'].includes(value)
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
  } else {
    return {
      opacity: 0,
      x: getInitialX(),
      y: getInitialY()
    }
  }
}

const getInitialX = () => {
  if (props.corner === 'left') {
    return -100
  } else if (props.corner.includes('left')) {
    return -100
  } else if (props.corner === 'right') {
    return 100
  } else if (props.corner.includes('right')) {
    return 100
  } else {
    return 0
  }
}

const getInitialY = () => {
  if (props.corner === 'bottom') {
    return 100
  } else if (props.corner.includes('bottom')) {
    return 100
  } else if (props.corner.includes('top')) {
    return -100
  } else {
    return 0
  }
}
</script>
