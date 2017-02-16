
<template>  
  <div v-if="loading" ref="loading" class="loading_container">
    <loader></loader>
  </div>
  <div v-else >
    <div class="gallery_container">
      <ul class="gallery_list">
        <li class="gallery_item" v-for="gallery in galleryList" v-bind:gallery-id='gallery.id' v-on:click="changeGallery">{{gallery.name}}</li>
      </ul>
    </div>
    <div class="list_container flex-container" >
      <imageOverlay v-bind:isReady="isReady" v-bind:imgList="eventList" v-bind:imgObj="imgObj"></imageOverlay>
      <!-- <transition-group name="list" tag="div" class="img_section"> -->
      <div class="img_section">
        <div class="img_container flex-item" name="photo" v-for="event in eventList" v-bind:key="event" v-on:click="viewImg">
          <div class="img_item"  v-bind:imgId='event.id' :style="{ 'background-image': 'url(' + event.image_url + ')' }">
          </div>
        </div>
      </div>
      <!-- </transition-group> -->
      <div v-if="hasNextpage">
        <button class="next_page_btn btn btn-1 bttn-stretch bttn-md bttn-primary" v-if="showBtn" v-on:click='loadMore'>
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%"/>
          </svg>
          {{ $t("photography.load") }}
        </button> 
        <loader v-else ></loader>
      </div>
      <div v-else>
        <p>{{ $t("photography.end") }}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import imageOverlay from '../../components/imgOverlay';
  import loader from '../../components/loader';
  import helpers from '../../help';

  export default {
    name: 'details',
    data: function data() {
      return {
        consumerKey: '&consumer_key=Sa25PtfFFd04mqZbdy7SJGHvhJdTF30JJkDBOf3M',
        imgSettings: '&sort=times_viewed&rpp=18&image_size=4&include_store=store_download&include_states=voted',
        loading: true,
        eventList: [],
        galleryList: [],
        current_page: 1,
        next_page: 2,
        total_page: 0,
        imgUrl: 'https://api.500px.com/v1/photos/192188265?image_size=4&comments=1',
        galleriesURl: 'https://api.500px.com/v1/users/15449761/galleries?',
        resourceUrl: 'https://api.500px.com/v1/photos?feature=user&username=MengJia',
        galleryURL: 'https://api.500px.com/v1/users/15449761/galleries/',
        hasNextpage: false,
        fetchingPics: false,
        showBtn: true,
        imgObj: null,
        imgId: 0,
        isReady: false,
      };
    },
    computed: {
      imgFetchUrl: function imgFetchUrl() {
        this.imgUrl += this.consumerKey;
        return this.imgUrl;
      },
      galleriesFetchUrl: function galleryFetchUrl() {
        this.galleriesURl += this.consumerKey;
        return this.galleriesURl;
      },
      allPhotosFetchUrl: function allPhotosFetchUrl() {
        this.resourceUrl += this.consumerKey + this.imgSettings;
        return this.resourceUrl;
      },
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
      changeGallery: function changeGallery(event) {
        this.galleryURL += $(event.target).attr('gallery-id');
        this.galleryURL = `${this.galleryURL}/items?${this.consumerKey}+${this.imgSettings}`;
        this.loading = true;
        this.$http
        .get(this.galleryURL)
        .then(function result(res) {
          this.eventList = res.body.photos;
        }).catch(function error() {
          this.hasNextpage = false;
        }).finally(function finish() {
          this.hasNextpage = false;
          this.next_page += 1;
          this.loading = false;
        });
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
          this.allPhotosFetchUrl += `&page=${this.next_page}`;
          this.$http
          .get(this.allPhotosFetchUrl)
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
      getPhotos: function getPhotos() {
        // promise call to fetch photos
        this.resourceUrl += `&page=${this.current_page}`;
        this.$http
        .get(this.allPhotosFetchUrl)
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
          // this.showPhotos(this.eventList);
        });
      },
      getGalleries: function getGalleries() {
        // promise to get gallery information
        this.$http.get(this.galleriesFetchUrl)
        .then(function result(res) {
          // this.loading = false;
          this.galleryList = res.body.galleries;
        }).finally(function finish() {
          // this.getPhotos();
        });
      },
      showPhotos: helpers.showPhotos,
    },
    beforeCreated() {
      // const AOS = new AOS();
    },
    mounted() {
      $('.sidebar_container').fadeIn('fast');
      this.getGalleries();
      this.getPhotos();
    },
  };
</script>
<style lang="sass">
  // .content_container{ background: #bdc3c7;background: -webkit-linear-gradient(to left, #bdc3c7 , #2c3e50);background: linear-gradient(to bottom, #2c3e50, #bdc3c7 );}
  .content_container{ background: #b31217;background: -webkit-linear-gradient(to bottom, #b31217, #e52d27); background: linear-gradient(to bottom, #b31217, #e52d27);}
</style>
<style lang="sass" scoped>
  // @import '../../libs/effects.min.css';
  @import '../../sass/photography.scss';
  // @import '../../../../node_modules/aos/dist/aos.css';
</style>

