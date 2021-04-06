import { createApp } from 'vue';
import App from './App.vue';
import toastNotificationsPlugin from './libs/toastNotificationsPlugin';
import './index.css';

createApp(App)
    .use(toastNotificationsPlugin)
    .mount('#app');
