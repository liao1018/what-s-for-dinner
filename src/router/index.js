import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Window.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue'),
      },
    ],
  },
];

const router = createRouter({
  // this corresponds to the publicPath option in vue.config.js
  // and is the base path your app is deployed at.
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
