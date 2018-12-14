import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import Projects from './views/Projects'
import Team from './views/Team'
import Login from './components/Login'
import Signup from './components/Signup'
import firebase from '../src/firebase/firebase';

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/signup',
      name:'signup',
      component:Signup
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:'/projects',
      name: 'projects',
      component :Projects
    },
    {
      path: '/team',
      name: 'team',
      component:Team
    }
  ]
});

router.beforeEach((to,from,next)=>{
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('/');
  else next();
})

export default router;