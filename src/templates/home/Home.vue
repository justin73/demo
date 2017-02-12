<template>
  <div id="fullpage" ref="fullpage">
    <div class="section">
      <canvas id="intro-image"></canvas>
      <div class="grid">
        <div class="grid__item">
          <a class="link link--yaku" href="#" v-if="langCode === 'en'">
            <span>M</span><span>e</span><span>n</span><span>g</span><span>(M</span><span>.E</span><span>n</span><span>g),&nbsp;</span><span>c'</span><span>e</span><span>s</span><span>t&nbsp;</span><span>m</span><span>o</span><span>i</span><span>!</span>
          </a>
          <a class="link link--yaku" href="#" v-if="langCode === '汉'">
            <span>我</span><span>，</span><span>贾</span><span>梦</span><span>，</span><span>软</span><span>件</span><span>工</span><span>程</span><span>师</span><span>。</span>
          </a>
          <a class="link link--yaku" href="#" v-if="langCode === 'fr'">
            <span>M</span><span>e</span><span>n</span><span>g</span><span>(M</span><span>.E</span><span>n</span><span>g),&nbsp;</span><span>c'</span><span>e</span><span>s</span><span>t&nbsp;</span><span>m</span><span>o</span><span>i</span><span>!</span>
          </a>
          <p class="self_desc">{{ $t("intro.desc") }}</p>
        </div>
      </div>
      <div class="scroll_hint_container" >
        <i class="fa fa-angle-down" aria-hidden="true" v-on:click="viewMore"></i>
      </div>

    </div>
    <div class="section">
      <canvas id="photography-image"></canvas>
      <router-link to='/dashboard'><p class='txt_on_canvas link--kukuri'>{{ $t("photography.header") }}</p></router-link>
    </div>
   <!--  <div class="section split">
      <div class="box" id="box1">
         <router-link :to="{ name: 'job_item', params: { company:'oohlala' }}">
          <div class="item" >
            <p>Web Dev</p>
            <div class='logo_container'>
              <img src='../../assets/oohlala.png'>
            </div>
            <div class="item-overlay top"></div>
          </div>
        </router-link>
      </div>
      <div class="box" id="box2">
        <router-link :to="{ name: 'job_item', params: { company:'mcm' }}">
          <div class="item">
            <p>Tech Consultant</p>
            <div class='logo_container'>
              <img src='../../assets/mcm.png'>
            </div>
            <div class="item-overlay top"></div>
          </div>
        </router-link>
      </div>
      <div class="box" id="box3">
        <router-link :to="{ name: 'job_item', params: { company:'nowinstore' }}">
          <div class="item">
            <p>Front-End Dev</p>
            <div class='logo_container'>
              <img src='../../assets/nowinstore.png'>
            </div>
            <div class="item-overlay top"></div>
          </div>
          </router-link>
      </div>
      <div class="box" id="box4">
        <router-link :to="{ name: 'job_item', params: { company:'freelance' }}">
          <div class="item">
            <p>Freelancer</p>
            <div class='logo_container'>
              <img src='../../assets/nowinstore.png'>
            </div>
            <div class="item-overlay top"></div>
          </div>
        </router-link>
      </div>
    </div> -->
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
        <div class="icon_container"><a href="https://github.com/justin73"><i class="fa fa-github" aria-hidden="true"></i></a></div>
        <div class="icon_container"><a href="https://www.linkedin.com/in/meng-jia-9b189454/"><i class="fa fa-linkedin" aria-hidden="true"></i></a></div>
        <div class="icon_container"><a href="https://500px.com/mengjia"><i class="fa fa-500px" aria-hidden="true"></i></a></div>
        <div class="icon_container"><a href="https://www.instagram.com/mengjia73"><i class="fa fa-instagram" aria-hidden="true"></i></a></div>
        <div class="icon_container"><a mailto=""><i class="fa fa-envelope" aria-hidden="true"></i></i></a></div>
        <div class="footer">
          <p>{{ $t("footer.desc") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Granim from 'granim';

  export default {
    name: 'home',
    data: function data() {
      return {
        granimInstance: null,
        langCode: this.$store.state.langCode,
      };
    },
    methods: {
      // saveData: function save() {
      //   console.log('save the model on button click');
      // },
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
        continuousVertical: false,
        // verticalCentered: true,
        sectionsColor: ['#ccc', '#fff', '#ccc', '#fff'],
        // lazyLoading: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Moi', 'My Photography', 'Contact Me'],
        onLeave: function changeSection(index, nextIndex, direction) {
          if (direction === 'down') {
            $('.sidebar_container').fadeOut('slow');
          } else if (direction === 'up') {
            $('.sidebar_container').fadeIn('slow');
          }
        },
      });
      const granimInstance = new Granim({
        element: '#photography-image',
        direction: 'top-bottom',
        opacity: [1, 0.5, 0],
        isPausedWhenNotInView: true,
        states: {
          'default-state': {
            gradients: [
              ['#485563', '#29323c', '#29323c'],
              ['#00c6ff', '#0072ff', '#0072ff'],
            ],
            transitionSpeed: 5000,
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


      console.log(this.langCode);
    },
    beforeDestroy() {
      $.fn.fullpage.destroy('all');
    },
  };
</script>
<style lang="sass">
  .content_container{position: relative;top: 0px;}
</style>
<style lang="sass" scoped>
  @import '../../sass/index.scss';
</style>

