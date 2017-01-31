
<template>
  <div v-if="loading">
    <loader></loader>
  </div>
  <div class="list_container" v-else>
    <ul class="img_list" >
      <li class="img_container" v-for="event in eventList">
        <img class="img_item" v-bind:src='event.image_url'>
      </li>
      <div v-if="hasNextpage">
        <button class="next_page_btn" v-if="showBtn" v-on:click='loadMore'>Load more ... </button>
        <loader v-else ></loader>
      </div>
      <div v-else>
        <p>The END...</p>
      </div>
    </ul>
  </div>
</template>
<script>
  // import { mapState } from 'vuex';
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
    // computed: [
    //   mapState({
    //     countAlias: 'count',
    //   }),
    // ],
    components: { loader },
    methods: {
      // scroll to the bottom, then add page_num, load the next page, until get to the last page.
      handleScroll: function handleScroll() {
        this.$store.commit({
          type: 'increment',
          amount: 10,
        });
        // console.log(this.$store.state.count);
        // console.log(this.$store.getters.doneTodos);
        // console.log(this.$store.getters.doneTodosCount);
        // console.log(this.$store.state);
        // `Time: ${12 * 60 * 60 * 1000}`;
        // console.log(`scrollY + ${window.scrollY}`);
        // console.log(`window innerHeight + ${window.innerHeight}`);
        // console.log(`document innerHeight + ${document.body.offsetHeight}`);
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
      }).catch(function error() {
        this.loading = false;
      }).finally(function finish() {
        this.loading = false;
        window.addEventListener('scroll', this.handleScroll);
      });
    },
  };
</script>

<style lang="sass" scoped>
  @import '../../sass/contact.scss';
</style>
