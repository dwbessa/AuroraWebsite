import { createApp } from 'vue'
import App from './App.vue'
import emailjs from '@emailjs/browser'

emailjs.init(process.env.VUE_APP_EMAILJS_PUBLIC_KEY)

createApp(App).mount('#app')
