<template>
  <Card corner="bottom" :delay="delay" class="bg-accentWhite dark:bg-card">


    <img :src="preview" alt="Preview" class="rounded-lg mb-3 object-cover w-full max-h-64" />
    <h3 class="text-xl dark:text-white font-bold mb-1">{{ title }}</h3>
    <p class="dark:text-gray-300 text-sm mb-5">{{ stack }}</p>

    <p v-if="isNDA" class="text-lg dark:text-white font-bold mb-1"> Это под NDA ;(</p>
    <a
        v-else
        :href="demoUrl"
        target="_blank"
        class="bg-accent text-white px-4 py-2 rounded-xl hover:opacity-80"
    >
      Посмотреть демо
    </a>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/Card/Card.vue'

defineProps<{
  title: string
  preview: string
  stack: string
  demoUrl?: string
  isNDA: boolean
  delay?: number
}>()
</script>
