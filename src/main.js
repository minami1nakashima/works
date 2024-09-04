import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n.js';
import { registerPlugins } from '@/plugins';

const app = createApp(App);

app.use(i18n);
app.use(router);
registerPlugins(app);

app.mount('#app');


console.log(i18n.global.messages);