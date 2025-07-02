<template>
  <main class="bg-backgroundWhite dark:bg-background  min-h-screen text-foreground font-sans">
    <Navbar/>
    <RouterView/>
  </main>

</template>

<script setup lang="ts">
  import Navbar from '@/widgets/navbar/index.vue'
  import { useThemeStore } from "@/entities/theme/model/themeStore.ts";
  import { onMounted } from "vue";

  const theme = useThemeStore()

  onMounted(() => {
    theme.init()
  })
</script>

<style scoped>

</style>
