<template>
  <nav class="fixed top-0 left-0 w-full z-50 flex justify-center bg-transparent p-2 sm:backdrop-blur-md">
    <div
        class="inline-flex items-center justify-center gap-2 sm:gap-4 px-4 py-2 bg-accentWhite dark:bg-card rounded-xl shadow-md text-sm sm:text-base font-bold text-gray-600 dark:text-gray-300 overflow-x-auto max-w-full"
    >
      <RouterLink
          to="/"
          class="px-3 py-1 rounded-xl hover:text-gray-400 whitespace-nowrap transition-all"
          :class="{ 'text-white bg-accent': $route.path === '/' }"
      >
        Главная
      </RouterLink>

      <RouterLink
          to="/projects"
          class="px-3 py-1 rounded-xl hover:text-gray-400 whitespace-nowrap transition-all"
          :class="{ 'text-white bg-accent': $route.path === '/projects' }"
      >
        Проекты
      </RouterLink>

      <RouterLink
          to="/contact"
          class="px-3 py-1 rounded-xl hover:text-gray-400 whitespace-nowrap transition-all"
          :class="{ 'text-white bg-accent': $route.path === '/contact' }"
      >
        Связь
      </RouterLink>

      <button
          @click="theme.toggle"
          class="ml-2 sm:ml-4 hover:opacity-70 transition-opacity cursor-pointer"
      >
        {{ theme.theme === 'dark' ? '🌙' : '☀️' }}
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/entities/theme/model/themeStore.ts"

const theme = useThemeStore()
</script>
