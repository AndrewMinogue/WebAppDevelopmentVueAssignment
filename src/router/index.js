import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import OrderPizza from '@/components/OrderPizza'
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import Pizzas from '@/components/Pizzas'
import Edit from '@/components/Edit'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import MakePizzaDeal from '@/components/MakePizzaDeal'
import PizzaDeals from '@/components/PizzaDeals'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/orderpizza',
      name: 'OrderPizza',
      component: OrderPizza
    },
    {
      path: '/pizzas',
      name: 'pizzas',
      component: Pizzas
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/pizzadeals',
      name: 'PizzaDeals',
      component: PizzaDeals
    },
    {
      path: '/makepizzadeal',
      name: 'MakePizzaDeal',
      component: MakePizzaDeal
    },
  ]
})
