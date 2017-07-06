import Vue from 'vue';
import App from '@/app.vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router( {
  mode: 'history', // uncomment to using html5 history features.
  hashbang: false, // uncomment to remove the hashbang from the url
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: require( '@/dashboard.vue' )
    }
  ]
} )

new Vue( {
  router,
  el: '#app',
  render: h => h( App ),
  // store
} )
