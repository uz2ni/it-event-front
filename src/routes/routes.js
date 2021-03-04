import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../components/main.vue';
import online from '../components/online.vue';
import free from '../components/free.vue';
import magam from '../components/magam.vue';
import mogakco from '../components/mogakco.vue';
import enroll from '../components/form.vue';
Vue.use(VueRouter);

export const router = new VueRouter({
  mode : 'history',
  routes : [
    {
      path:'/',
      redirect : '/main',
    },
    {
      path:'/main',
      component:main,
    },
    {
      path:'/online',
      component:online,
    },
    {
      path:'/free',
      component:free,
    },
    {
      path:'/magam',
      component:magam,
    },
    {
      path:'/mogakco',
      component:mogakco,
    },
    {
      path:'/enroll',
      component:enroll,
    }
  ]
});