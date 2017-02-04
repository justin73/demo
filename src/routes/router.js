/**
 * Application Routing
 */

import VueRouter from 'vue-router';

import indexComponent from '../templates/home/Home';
import aboutComponent from '../templates/contact/Contact';
import eventListComponent from '../templates/details/Details';
import eventContentComponent from '../templates/details/EventContent';
import jobListComponent from '../templates/professional/Previous';
import professionalComponent from '../templates/professional/Professional';
// import notFound from '../templates/notFound/notFound';


const router = new VueRouter({
  routes: [
    { path: '/', component: indexComponent },
    { path: '/dashboard', component: aboutComponent },
    { path: '/career', component: jobListComponent },
    {
      name: 'job_item',
      path: '/career/:company',
      component: professionalComponent,
    },
    { path: '/events', component: eventListComponent },
    { name: 'event_item',
      path: '/events/:event_id',
      component: eventContentComponent,
    },
  ],
});

module.exports = router;
