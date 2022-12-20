import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import TodoView from '../views/TodoView.vue';
import FetchingView from '../views/FetchingView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/todo",
      name: "todo",
      component: TodoView, 
    },

    {
      path: "/fetching",
      name: "fetching",
      component: FetchingView, 
    }
  ]
})

export default router
