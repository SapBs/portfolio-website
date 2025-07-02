import { defineStore } from 'pinia'

type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('theme', {
    state: () => ({
       theme: 'dark' as Theme
    }),
    actions: {
        toggle() {
            this.theme = this.theme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', this.theme)
            document.documentElement.classList.toggle('dark', this.theme === 'dark')
        },
        init() {
            const saved = localStorage.getItem('theme')
            this.theme = (saved as Theme) || 'dark'
            document.documentElement.classList.toggle('dark', this.theme === 'dark')
        },
    },
})
