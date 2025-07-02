<template>
  <main class="p-4 pb-12 pt-24 max-w-6xl m-auto overflow-hidden 2xl:overflow-visible">
    <div class="gap-5 grid grid-cols-4 lg:grid-cols-3">


      <Card corner="left" :delay="0.5" class="bg-accentWhite dark:bg-card md:col-span-2">
        <h2 class="text-4xl font-bold mb-2 dark:text-white">Кто я?</h2>
        <p class="dark:text-gray-300 text-3xl">
          Привет! Меня зовут Константин и я Frontend разработчик, люблю UI, типизацию и крутые проекты!
        </p>
      </Card>


      <Card :isPhoto="true" corner="right" :delay="1" class="flex ">
        <div class="flex items-center justify-center w-full h-full">
          <img src="/images/test.jpg" alt="Sky" class="w-fit h-fit object-cover rounded-lg" />
        </div>
      </Card>


      <Card corner="bottom" :delay="1" class="flex items-center justify-center bg-accent text-white text-center font-semibold text-3xl py-6">
        Студент & Frontend разработчик
      </Card>


      <Card corner="top-left" animationType="fade-only" class="bg-accentWhite dark:bg-card flex items-center justify-center text-2xl font-bold text-accent h-full">
        <div class="flex flex-col justify-center items-center">
          <img src="/images/myimg2.jpg" alt="Sky" class="w-1/3 h-1/3 object-cover rounded-lg mb-5" />
          Константин Ворчалов
        </div>
      </Card>


      <Card corner="bottom" :delay="1" class="bg-accent text-white text-center py-6 text-3xl">
        "Единственный способ делать великие дела — искренне любить то, чем занимаешься."
      </Card>


      <Card corner="right" :delay="1" class="bg-accentWhite dark:bg-card">
        <h3 class="font-semibold mb-4 dark:text-white text-3xl">Технологии, с которыми я работал</h3>
        <div class="flex flex-wrap gap-4 grid grid-cols-4 lg:grid-cols-3 grid-rows-4">
          <div class="flex items-center justify-center" v-for="icon in icons" :key="icon.name">
            <Icon :icon="icon.src" width="48" />
          </div>
        </div>
      </Card>


      <Card corner="bottom" :delay="0.5" class="md:col-span-2 bg-accentWhite dark:bg-card">
        <h3 class="text-4xl font-semibold mb-2 dark:text-white">Образование</h3>
        <ul class="dark:text-gray-300 text-sm space-y-2">
          <li class="text-lg">
            <strong class="text-2xl">ВУЗ</strong> (2024 - н.в.)<br />
            Санкт-Петербургский политехнический университет Петра Великого (СПбПУ) <br/>
            Направление - программная инженерия. <br/>
            Форма обучения - заочная
          </li>
          <li class="text-lg">
            <strong class="text-2xl">ИСПО</strong> (2018 - 2022)<br />
            Институт Среднего Профессионального Образования Санкт-Петербургский политехнический университет Петра Великого (СПбПУ) <br/>
            Направление - прикладная информатика. <br/>
            Форма обучения - очная
          </li>
        </ul>
      </Card>

    </div>
  </main>
</template>

<script setup lang="ts">
import Card from '@/shared/ui/Card/Card.vue'
import { Icon } from  '@iconify/vue'

const icons = [
  {name: 'vue', src: 'logos:vue'},
  {name: 'js', src: 'logos:javascript'},
  {name: 'ts', src: 'logos:typescript-icon'},
  {name: 'tailwind', src: 'logos:tailwindcss-icon'},
  {name: 'html', src: 'logos:html-5'},
  {name: 'css', src: 'logos:css-3'},
  {name: 'jest', src: 'logos:jest'},
  {name: 'docker', src: 'logos:docker-icon'},

]
</script>

<style scoped>

</style>
