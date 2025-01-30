import { createApp } from 'vue'
import './style.css'
import './styles/main.scss'
import App from './App.vue'
import { i18n, loadStoredLanguage } from './i18n';

i18n.global.locale.value = loadStoredLanguage();

const app = createApp(App);
app.use(i18n);
app.mount('#app');
