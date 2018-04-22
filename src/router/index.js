import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../views/HelloWorld';
import VHeader from '../views/VHeader';

Vue.use(Router);

// const HelloWorld = () => import(
//   /* webpackChunkName: "views-hello" */
//   '@/components/HelloWorld');
// const VHeader = () => import(
//   /* webpackChunkName: "views-header" */
//   '@/components/VHeader');

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/h',
      component: VHeader
    }
  ]
});
