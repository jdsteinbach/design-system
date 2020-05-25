import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let routes = [];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
