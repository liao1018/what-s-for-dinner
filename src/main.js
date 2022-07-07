import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faTimes, // X 符號
  faBars, // 漢堡選單
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/scss/app.scss';

const app = createApp(App);

library.add(faTimes);
library.add(faBars);
library.add(faPlus);
library.add(faMinus);

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.use(router).mount('#app');
