import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import store from "@/store"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/games',
    name: 'games',
    component: () => import('../views/GamesView.vue'),
    //
    /*beforeEnter: (to, from, next) => {
      if (store.state.loggedIn === false) {
        next(false);
        store.commit("swapLoginModal");
      } else {
        next();
      }
    },*/
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('../views/NewView.vue'),
    //
    /*beforeEnter: (to, from, next) => {
      if (store.state.loggedIn === false) {
        next(false);
        store.commit("swapLoginModal");
      } else {
        next();
      }
    },*/
  },
  {
    path: '/trending',
    name: 'trending',
    component: () => import('../views/TrendingView.vue'),
    //
    /*beforeEnter: (to, from, next) => {
      if (store.state.loggedIn === false) {
        next(false);
        store.commit("swapLoginModal");
      } else {
        next();
      }
    },*/
  },
  {
    path: '/:slug/:id/',
    name: 'gamedetails',
    component: () => import('../views/GameDetailsView.vue'),
    //
    /*beforeEnter: (to, from, next) => {
      if (store.state.loggedIn === false) {
        next(false);
        store.commit("swapLoginModal");
      } else {
        next();
      }
    },*/
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
