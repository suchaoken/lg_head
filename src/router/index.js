import { createRouter, createWebHashHistory } from 'vue-router'
import pageOne from '../views/pageOne.vue'
import pageTwo from '../views/pageTwo.vue'
import pageThree from "../views/pageThree.vue"
const routes = [
  {
    path: '/',
    name: 'pageOne',
    component: pageOne
  },
  {
    path: '/pagetwo',
    name: 'pageTwo',
    component: pageTwo
  },
  {
    path: '/pagethree',
    name: 'pageThree',
    component: pageThree
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
