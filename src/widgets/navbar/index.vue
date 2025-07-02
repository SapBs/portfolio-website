<template>
  <nav class="fixed top-4 left-0 w-full z-50 flex justify-center">

    <div class="mx-auto px-3 py-2 flex justify-center items-center dark:bg-card rounded-xl">

      <div class="flex gap-6 items-center text-lg font-bold text-gray-600 dark:text-gray-300">
        <RouterLink to="/" class="px-3 py-1 rounded-xl hover:text-gray-400 transition-all" :class="{ 'text-white  bg-accent': $route.path === '/' }">Главная страница</RouterLink>
        <RouterLink to="/projects" class="px-3 py-1 rounded-xl hover:text-gray-400 transition-all" :class="{ 'text-white  bg-accent': $route.path === '/projects' }">Проекты</RouterLink>
        <RouterLink to="/contact" class="px-3 py-1 rounded-xl hover:text-gray-400 transition-all" :class="{ 'text-white  bg-accent': $route.path === '/contact' }">Связь</RouterLink>

        <button @click="theme.toggle" class="ml-4 hover:opacity-70 transition-opacity">
          {{ theme.theme === 'dark' ? '🌙' : '☀️' }}
        </button>
      </div>
    </div>

  </nav>
</template>
<script setup lang="ts">
  import { useThemeStore } from "@/entities/theme/model/themeStore.ts"

  const theme = useThemeStore()
</script>
