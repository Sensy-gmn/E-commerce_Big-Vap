import { createRouter, createWebHistory } from 'vue-router'
import ConnexionView from '../views/ConnexionView.vue'
import HomeView from '../views/HomeView.vue'
import InscriptionView from '../views/InscriptionView.vue'
import LiquidesView from '../views/LiquidesView.vue'
import NotFoundView from '../views/NotFindView.vue'
import VapoteusesView from '../views/VapoteusesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cigarettes',
      name: 'cigarettes',
      component: VapoteusesView
    },
    {
      path: '/liquides',
      name: 'liquides',
      component: LiquidesView
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: ConnexionView
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: InscriptionView
    },
    {
      //gestion 404
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

export default router
