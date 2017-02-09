
<template>  
  <div v-if="loading" ref="loading">
    <loader></loader>
  </div>

  <div class="list_container flex-container" v-else >
    <imageOverlay v-bind:isReady="isReady" v-bind:imgList="eventList" v-bind:imgObj="imgObj"></imageOverlay>
    <!-- <transition name="fade"> -->
    <div class="img_container flex-item" v-for="event in eventList" v-on:click="viewImg">
       <img class="img_item" v-bind:src='event.image_url' v-bind:imgId='event.id'>
    </div>
    <!-- </transition> -->
    <!-- <div class="grid">
      <div class="grid-sizer"></div>
      <div class="grid-item mg_container flex-item" data-aos="zoom-in" v-for="event in eventList" v-on:click="viewImg">
        <img class="img_item" v-bind:src='event.image_url' v-bind:imgId='event.id'>
      </div>
    </div> -->
    <div v-if="hasNextpage">
      <!-- <button class="next_page_btn" v-if="showBtn" v-on:click='loadMore'> </button> -->
      <button class="next_page_btn bttn-stretch bttn-md bttn-primary" v-if="showBtn" v-on:click='loadMore'>Load more ...</button>
      <loader v-else ></loader>
    </div>
    <div v-else>
      <p>The END...</p>
    </div>
  </div>
</template>
<script>
  // import AOS from 'aos';
  // import Masonry from 'masonry-layout';
  import imageOverlay from '../../components/imgOverlay';
  import loader from '../../components/loader';

  export default {
    name: 'details',
    data: function data() {
      return {
        loading: true,
        eventList: [],
        current_page: 1,
        next_page: 2,
        total_page: 0,
        resourceUrl: 'https://api.500px.com/v1/photos?consumer_key=Sa25PtfFFd04mqZbdy7SJGHvhJdTF30JJkDBOf3M&feature=user&username=MengJia&sort=rating&image_size=4&rpp=18',
        hasNextpage: false,
        fetchingPics: false,
        showBtn: true,
        imgObj: null,
        imgId: 0,
        isReady: false,
      };
    },
    components: {
      loader,
      imageOverlay,
    },
    methods: {
      viewImg: function viewImg(event) {
        $('#myNav').css('width', '100%');
        this.imgId = $(event.target).attr('imgId');
        for (const imgObj of this.eventList) {
          if (imgObj.id === parseInt(this.imgId, 10)) {
            this.imgObj = imgObj;
            this.isReady = true;
          }
        }
      },
      // scroll to the bottom, then add page_num, load the next page, until get to the last page.
      handleScroll: function handleScroll() {
        // this.$store.commit({
        //   type: 'increment',
        //   amount: 10,
        // });
        const scrollTop = window.scrollY;
        const menuContainer = $('.sidenav_container');
        if (scrollTop > 200) {
          menuContainer.addClass('sticky');
        } else {
          menuContainer.removeClass('sticky');
        }
        // console.log(this.$store.state.count);
        // console.log(this.$store.getters.doneTodos);
        // console.log(this.$store.getters.doneTodosCount);
        // console.log(this.$store.state);
        // `Time: ${12 * 60 * 60 * 1000}`;
        if (this.next_page <= this.total_pages) {
          if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
            this.hasNextpage = true;
            this.showBtn = true;
          }
        }
      },
      loadMore: function loadMore() {
        this.showBtn = false;
        if (this.next_page <= this.total_pages) {
          this.hasNextpage = true;
          this.resourceUrl += `&page=${this.next_page}`;
          this.$http
          .get(this.resourceUrl)
          .then(function result(res) {
            this.eventList = this.eventList.concat(res.body.photos);
          }).catch(function error() {
            this.hasNextpage = false;
          }).finally(function finish() {
            this.hasNextpage = false;
            this.next_page += 1;
          });
        } else {
          this.hasNextpage = false;
        }
      },
    },
    beforeCreated() {
      // const AOS = new AOS();
    },
    mounted() {
      $('.sidebar_container').fadeIn('fast');
      this.resourceUrl += `&page=${this.current_page}`;
      this.$http
      .get(this.resourceUrl)
      .then(function result(res) {
        this.eventList = res.body.photos;
        this.total_pages = res.body.total_pages;
        this.current_page = res.body.current_page;
        this.next_page = this.current_page + 1;
      }).then(function next() {
        this.loading = false;
        window.addEventListener('scroll', this.handleScroll);
      })
      .catch(function error() {
        this.loading = false;
      })
      .finally(function finish() {
        // AOS.init({
        //   offset: 200,
        //   duration: 600,
        //   easing: 'ease-in-sine',
        //   delay: 100,
        // });
        // external js: masonry.pkgd.js, imagesloaded.pkgd.js

        // init Masonry
        // const grid = new Masonry('.grid', {
        //   itemSelector: '.grid-item',
        //   percentPosition: true,
        //   columnWidth: '.grid-sizer',
        // });
        // console.log(grid);
        // // layout Isotope after each image loads
        // grid.imagesLoaded().progress(function doit() {
        //   grid.masonry();
        // });
      });
    },
  };
</script>
<style lang="sass">
  .content_container{ background: #abbaab; background: -webkit-linear-gradient(to bottom, #abbaab , #fff); background: linear-gradient(to bottom, #abbaab , #fff)}
</style>
<style lang="sass" scoped>
  // @import '../../libs/effects.min.css';
  @import '../../sass/contact.scss';
  // @import '../../../../node_modules/aos/dist/aos.css';
</style>

