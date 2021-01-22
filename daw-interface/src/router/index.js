import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../components/Login.vue';
import  store from '@/store/index';
// import Register from '../components/Register.vue'
// import Test from '../components/Test.vue';
import SubmitTicket from '../views/SubmitTicket.vue'
import Main from '../components/Main.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    redirect: {name: 'Test'},
    children: [
      {
        path: 'home',
        name: 'Test',
        component: Home
      },
    ]
  },
  {
    path: '/submit',
    name: 'Submit',
    component: SubmitTicket,
    beforeEnter(to, from, next) {
          
      if(store.getters.tokenID !== null) {
        next()
      } else {
        next('./login')
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Register.vue')
  },
  { path: "*", component: Home }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
