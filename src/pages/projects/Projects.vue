<template>
  <main class="p-4 pb-12 pt-24 max-w-6xl m-auto">
    <h2 class="text-4xl font-bold mb-6 dark:text-white">Мои проекты</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <ProjectCard
          v-for="(project, index) in projects"
          :key="project.title"
          v-bind="project"
          :delay="index * 0.2"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import ProjectCard from '@/entities/project/ui/ProjectCard.vue'
import { projects } from '@/entities/project/model/projectData'
</script>
