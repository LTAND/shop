import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from "./views/Category.vue"
import Product from './views/Product.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'category',
      path: '/category',
      component: Category
    },
    {
      name: 'product',
      path: '/product/:id',
      component: Product
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
