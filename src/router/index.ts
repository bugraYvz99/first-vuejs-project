import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'

const isloggedin = localStorage.getItem("isloggedin")

const isAuthenticated = () => {
  return isloggedin === "true"
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'home',
      component: HomeView,


    },

    {
      path: '/about',
      name: 'about',
      component: AboutViewVue,

    },


    {
      path: '/login',
      name: 'login',
      component: LoginView
    }


  ]
})




export default router
