import '@vuepic/vue-datepicker/dist/main.css';
import './assets/main.less';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import VueDatePicker from '@vuepic/vue-datepicker';

const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);

app.use(createPinia());
app.use(router);

app.mount('#app');
