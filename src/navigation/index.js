import VueRouter from 'vue-router'
import Vue from 'vue'
import AppRoutes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  AppRoutes,
})

export default router
