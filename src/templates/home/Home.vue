<template>
  <div id="fullpage" ref="fullpage">
    <div class="section">
      <div class="grid">
        <div class="grid__item">
          <a class="link link--yaku" href="#">
            <span>M</span><span>e</span><span>n</span><span>g</span><span>(M</span><span>.E</span><span>n</span><span>g),&nbsp;</span><span>c'</span><span>e</span><span>s</span><span>t&nbsp;</span><span>m</span><span>o</span><span>i</span><span>!</span>
          </a>
        </div>
      </div>
      <div class="scroll_hint_container" >
        <i class="fa fa-angle-down" aria-hidden="true" v-on:click="viewMore"></i>
      </div>
      <!-- <div class="os-phrases" id="os-phrases">
        <h2>Meng(M.Eng), C'est moi</h2>
        <h2>Web Dev</h2>
        <h2>Photographer</h2>
        <h2>Scroll Down to see more</h2>
        <h2>Scroll Down to see more</h2>
        <h2>Scroll Down to see more</h2>
        <h2>Scroll Down to see more</h2>
        <h2>Scroll Down to see more</h2>
      </div> -->

    </div>
    <div class="section">
      <!-- <div class="txt_wrapper">
        <p class="animated slideInDown">Welcome!</p>
      </div> -->
      <canvas id="canvas-image"></canvas>
    </div>
    <div class="section split">
      <div class="box" id="box1">
         <router-link :to="{ name: 'job_item', params: { company:'oohlala' }}">
          <div class="item" >
            <p>Web Dev</p>
            <img src='../../assets/oohlala.png'>
            <div class="item-overlay top"></div>
          </div>
        </router-link>
      </div>
      <div class="box" id="box2">
        <router-link :to="{ name: 'job_item', params: { company:'mcm' }}">
          <div class="item">
            <p>Tech Consultant</p>
            <img src='../../assets/mcm.png'>
            <div class="item-overlay top"></div>
          </div>
        </router-link>
      </div>
      <div class="box" id="box3">
        <router-link :to="{ name: 'job_item', params: { company:'nowinstore' }}">
          <div class="item">
            <p>Front-End Dev</p>
            <img src='../../assets/nowinsotre_logo.png'>
            <div class="item-overlay top"></div>
          </div>
          </router-link>
      </div>
      <div class="box" id="box4">
        <router-link :to="{ name: 'job_item', params: { company:'freelance' }}">
          <div class="item">
            <p>Freelance Photographer</p>
            <img >
            <div class="item-overlay top"></div>
          </div>
        </router-link>
      </div>
    </div>
<!--     <div class="section">
      <div class="siema">
        <div v-for="img in imgList">
          <img class="img_item" v-bind:src="img.image_url" style="width: 100%;">
        </div>
      </div>
     <button class="prev">prev</button>
      <button class="next">next</button>
    </div> -->
    <div class="section">
      <div class="social_container">
        <i class="fa fa-github" aria-hidden="true"></i>
        <i class="fa fa-500px" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
  import Granim from 'granim';

  // import Siema from 'siema';
  // import Granim from 'granim';
  // import { granimInstance } from '../../libs/background';

  export default {
    name: 'details',
    data: function data() {
      return {
        resourceUrl: 'https://api.500px.com/v1/photos?feature=user&username=MengJia&sort=times_viewed&rpp=5&image_size=4&include_store=store_download&include_states=voted&consumer_key=Sa25PtfFFd04mqZbdy7SJGHvhJdTF30JJkDBOf3M',
        imgList: [],
        granimInstance: null,
        // schoolName: '',
        // description: '',
        // checked: '',
        // selected: [],
        // hostList: [
        //   { name: 'Depart A', id: 2 },
        //   { name: 'Depart B', id: 3 },
        //   { name: 'Depart C', id: 4 },
        // ],
      };
    },
    methods: {
      saveData: function save() {
        console.log('save the model on button click');
      },
      viewMore: function viewMore() {
        $.fn.fullpage.moveSectionDown();
      },
    },
    beforeCreated() {

    },
    mounted() {
      $('#fullpage').fullpage({
        menu: '#menu',
        // Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        // Design
        controlArrows: true,
        // verticalCentered: true,
        sectionsColor: ['#ccc', '#fff', '#ccc', '#fff'],
        // lazyLoading: true,
        onLeave: function changeSection(index, nextIndex, direction) {
          if (direction === 'down') {
            $('.sidebar_container').fadeOut('slow');
          } else if (direction === 'up') {
            $('.sidebar_container').fadeIn('slow');
          }
        },
      });
      const granimInstance = new Granim({
        element: '#canvas-image',
        direction: 'top-bottom',
        opacity: [1, 0.5, 0],
        isPausedWhenNotInView: true,
        states: {
          'default-state': {
            gradients: [
              ['#485563', '#29323c', '#29323c'],
              ['#00c6ff', '#0072ff', '#0072ff'],
            ],
            transitionSpeed: 10000,
          },
        },
      });
      granimInstance.changeState('default-state');
      // this.$http
      // .get(this.resourceUrl)
      // .then(function result(res) {
      //   this.imgList = res.body.photos;
      // }).then(function rednerFullPage() {

      // }).finally(function finalCall() {
      //   // const mySiema = new Siema({
      //   //   selector: '.siema',
      //   //   duration: 200,
      //   //   easing: 'ease-out',
      //   //   perPage: 1,
      //   //   startIndex: 0,
      //   //   draggable: true,
      //   //   threshold: 20,
      //   //   loop: true,
      //   // });
      //   // $('.prev').on('click', () => mySiema.prev());
      //   // $('.next').on('click', () => mySiema.next());
      // });

      $('#os-phrases > h2').lettering('words')
      .children('span')
      .lettering()
      .children('span')
      .lettering();
    },
    beforeDestroy() {
      console.log('save the model now before the view is destoried, this is autosave');
      console.log(this.schoolName);
      $.fn.fullpage.destroy('all');
    },
  };
</script>

<style lang="sass" scoped>
  @import '../../sass/index.scss';
</style>

