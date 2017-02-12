
<template>  
  <div class='content_body'>
    <div class="flex_container">
      <h1>Coming Soon...</h1>
    </div>
    
<!--     <div class="flex_container">
      <p>Meanwhile, if you'd like to contact me, please drop me an email at jiameng73@gmail.com</p>
    </div> -->
  </div>
</template>s
<script>
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
      });
    },
  };
</script>
<style lang="sass" scoped>
  @import '../../sass/contact.scss';
</style>

