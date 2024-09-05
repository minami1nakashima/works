
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
// import { createRouter, createWebHistory } from 'vue-router/auto'



// 

import { createRouter, createWebHistory } from 'vue-router'
import Seoul from '@/components/00_Seoul/Seoul.vue';
import Busan from '@/components/01_busan/Busan.vue'
import Gangneung from '@/components/02_gangneung/gangneung.vue'

const routes = [
  {
    path: '/',
    name: 'seoul',
    component: Seoul,
  },
    {
    path: '/busan',
    name: 'busan',
    component: Busan,
  },
  {
    path: '/gangneung',
    name: 'gangneung',
    component: Gangneung,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router
