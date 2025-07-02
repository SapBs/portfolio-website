export type Project = {
    title: string
    preview: string
    stack: string
    demoUrl: string
    isNDA: boolean,
    description: string
}

export const projects: Project[] = [
    {
        title: 'ПО для работы с физическими устройствами',
        preview: '/images/metran.jpg',
        stack: 'Vue 3, TailwindCSS, TypeScript, Vite',
        demoUrl: 'https://yourdomain.com',
        isNDA : true,
        description: 'Метран-Конфигурация используется для настройки и сервисного обслуживания полевых устройств, поддерживающих НАRТ-протокол - датчики давления, датчики температуры, расходомеры, уровнемеры, сигнализаторы загазованности, газоанализаторы и другие устройства'
    },
    {
        title: 'Интерактивная сцена Алые паруса',
        preview: '/images/AlieParusa.jpg',
        stack: 'PlayCanvas, Three.js, JavaScript',
        demoUrl: 'https://playcanv.as/p/L5wExyPu/',
        isNDA : false,
        description: 'test'
    },
    {
        title: 'TODO',
        preview: '/images/ai.jpg',
        stack: 'Vue 3, tailwindCSS, JavaScript, axios, Vite',
        demoUrl: 'https://sapbs.github.io/AiScreenTemplates/',
        isNDA : false,
        description: 'test'
    },

]
