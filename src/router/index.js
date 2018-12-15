import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Update from '@/components/Update';
import Board from '@/components/Board';
import Login from '@/components/Login';
import SignUp from '@/components/SignUp';
import Notes from '@/components/Notes';
import NewNote from '@/components/NewNote';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/update',
      component: Update,
    },
    {
      path: '*',
      redirect: '/backlog',
    },
    {
      path: '/board',
      component: Board,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      component: SignUp,
    },
    {
      path: '/notes',
      component: Notes,
    },
    {
      path: '/new',
      component: NewNote,
    },
  ],
});
