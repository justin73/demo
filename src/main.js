// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueI18n from 'vue-i18n';
import Vue from 'vue';
// import App from './App';


// Global Components
import Sidebar from './components/sideNav';
// import PageContent from './components/page_content';

// Middleware
// explicitly use all the packages which are used for the app
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueResource);

// i18n init
require('./locale/config');


const router = require('./routes/router');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `
  <div>
    <div class='sidebar_container'>
      <sidebar></sidebar>
    </div>
    <div class="content_container">
      <router-view></router-view>
    </div>
  </div>
  `,
  components: { Sidebar },
});

