
<template>
  <div v-if="loading" ref="loading">
    <loader></loader>
  </div>
  <div class="list_container" v-else>
    <div id="myNav" class="overlay">

      <!-- Button to close the overlay navigation -->
      <a class="closebtn" v-on:click="closeOverlay">&times;</a>
      <!-- Overlay content -->
      <div class="overlay-content">
        <img class="hd_img">
      </div>

    </div>
    <div class="img_container" v-for="event in eventList" v-on:click="viewImg">
      <img class="img_item" v-bind:src='event.image_url'>
    </div>
    <div v-if="hasNextpage">
      <button class="next_page_btn" v-if="showBtn" v-on:click='loadMore'>Load more ... </button>
      <loader v-else ></loader>
    </div>
    <div v-else>
      <p>The END...</p>
    </div>
    <!-- <ul class="img_list">
      <li class="img_container" >
        <img class="img_item" v-bind:src='event.image_url'>
      </li>
      <div v-if="hasNextpage">
        <button class="next_page_btn" v-if="showBtn" v-on:click='loadMore'>Load more ... </button>
        <loader v-else ></loader>
      </div>
      <div v-else>
        <p>The END...</p>
      </div>
    </ul> -->
  </div>
</template>
<script>
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
      };
    },
    components: { loader },
    methods: {
      viewImg: function viewImg() {
        $('#myNav').css('width', '100%');
      },
      closeOverlay: function close() {
        $('#myNav').css('width', '0%');
      },
      // scroll to the bottom, then add page_num, load the next page, until get to the last page.
      handleScroll: function handleScroll() {
        this.$store.commit({
          type: 'increment',
          amount: 10,
        });
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
    mounted() {
      this.resourceUrl += `&page=${this.current_page}`;
      this.$http
      .get(this.resourceUrl)
      .then(function result(res) {
        this.eventList = res.body.photos;
        this.total_pages = res.body.total_pages;
        this.current_page = res.body.current_page;
        this.next_page = this.current_page + 1;
      })
      .catch(function error() {
        this.loading = false;
      })
      .finally(function finish() {
        this.loading = false;
        window.addEventListener('scroll', this.handleScroll);
      });
    },
  };
</script>

<style lang="sass" scoped>
  @import '../../sass/contact.scss';
</style>
