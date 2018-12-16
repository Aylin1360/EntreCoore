import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Boards from '@/components/Boards'
import Chatbot from '@/components/Chatbot'
import firebase from 'firebase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/boards',
      name: 'boards',
      component: Boards
    },
    {
      path: '/Chatbot',
      name: 'Chatbot',
      component: Chatbot
    }
  ]
})
