<template>
  <main class="p-4 pb-12 pt-24 max-w-4xl m-auto">
    <Card corner="left" :delay="0.3" class=" bg-accentWhite dark:bg-card">
      <h2 class="text-4xl font-bold mb-4 dark:text-white">Связаться со мной</h2>
      <form @submit.prevent="onSubmit" class="space-y-4">
        <input
            v-model="form.name"
            type="text"
            placeholder="Имя"
            class="w-full p-3 rounded-lg bg-inputWhite dark:bg-background dark:text-white"
            :class="{'border border-red-500': errors.name}"
        />
        <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="w-full p-3 rounded-lg bg-inputWhite dark:bg-background dark:text-white"
            :class="{'border border-red-500': errors.email}"
        />
        <textarea
            v-model="form.message"
            placeholder="Сообщение"
            class="w-full p-3 h-32 rounded-lg bg-inputWhite dark:bg-background dark:text-white resize-none"
            :class="{'border border-red-500': errors.message}"
        />
        <button type="submit" class="bg-accent text-white px-4 py-2 rounded-lg hover:opacity-80">
          Отправить
        </button>
      </form>
    </Card>

    <Card corner="right" :delay="0.6" class="bg-accentWhite dark:bg-card mt-6">
      <h3 class="text-2xl font-semibold dark:text-white mb-2">Ссылки</h3>
      <ul class="dark:text-gray-300 space-y-2">
        <li><a href="https://spb.hh.ru/resume/561db66fff086ed8980039ed1f47646b4d4c4c" target="_blank" class="dark:hover:text-white">Резюме на hh.ru</a></li>
        <li><a href="https://github.com/SapBs" target="_blank" class="dark:hover:text-white">Мой GitHub</a></li>
        <li><a href="https://t.me/ChasingAtlantic" target="_blank" class="dark:hover:text-white">Ну или в Telegram</a></li>
      </ul>
    </Card>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Card from '@/shared/ui/Card/Card.vue'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: false, email: false, message: false })

function validate() {
  errors.name = form.name.trim() === ''
  errors.email = !/^\S+@\S+\.\S+$/.test(form.email)
  errors.message = form.message.trim() === ''
  return !(errors.name || errors.email || errors.message)
}

function onSubmit() {
  if (!validate()) return
  alert('Сообщение отправлено!')
}
</script>
