import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import Boards from '@/components/Boards'
import firebase from 'firebase'
import NewNote from '@/components/NewNote'
import EditNote from '@/components/EditNote'
import ViewNote from '@/components/ViewNote'
import TodoInput from '@/components/TodoInput'
import TodoItem from '@/components/TodoItem'
import Notes from '@/components/Notes'

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
      path: '/new',
      name: 'new-note',
      component: NewNote
    },
    {
      path: '/edit/:note_id',
      name: 'edit-note',
      component: EditNote,
      },
    {
      path: '/:note_id',
      name: 'view-note',
      component: ViewNote
    },
    {
      path: '/notes',
      name: 'notes',
      component: Notes
    }
  ]
})
