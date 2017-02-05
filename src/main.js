// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueI18n from 'vue-i18n';
import Vue from 'vue';
import Vuex from 'vuex';
// import aos from 'aos';

// Global Components
import Sidebar from './components/sideNav';
import aos from './directives/aos';

// import PageContent from './components/page_content';

// Vue.directive('aos', aos);
// Middleware
// explicitly use all the packages which are used for the app
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);


Vue.directive('aos', aos);

// i18n init
require('./locale/config');
require('jquery');
require('fullpage');
require('granim');
require('masonry-layout');
require('imports?jQuery=jquery!letteringjs');

const router = require('./routes/router');
// import store object and inject it into the vue global scope
// then it could be used in all the child components
const store = require('./store/store').default;  // .default to fix count missing, mutation not defined issue
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: `
  <div>
    <div class='sidebar_container' style="width: 100%;top: 0px;z-index: 100;position: fixed">
      <sidebar></sidebar>
    </div>
    <div class="content_container">
      <router-view></router-view>
    </div>
  </div>
  `,
  components: { Sidebar },
  method: {
    handleScroll: function handleScroll() {
      const scrollTop = window.scrollY;
      const menuContainer = $('.sidenav_container');
      if (scrollTop > 200) {
        menuContainer.addClass('sticky');
      } else {
        menuContainer.removeClass('sticky');
      }
      if (this.next_page <= this.total_pages) {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
          this.hasNextpage = true;
          this.showBtn = true;
        }
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
});

