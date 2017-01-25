/**
 * Application Routing
 */

import VueRouter from 'vue-router';

import indexComponent from '../templates/home/Home';
import aboutComponent from '../templates/about/About';
import eventListComponent from '../templates/details/Details';
// import notFound from '../templates/notFound/notFound';


const router = new VueRouter({
  routes: [
    { path: '/', component: indexComponent },
    { path: '/dashboard', component: aboutComponent },
    { path: '/events', component: eventListComponent },
  ],
});

module.exports = router;
