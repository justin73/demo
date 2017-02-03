<template>
  <div id="fullpage" ref="fullpage">
    <div class="section">
      <div>
          <p>
            Meng owns a M.Eng
          </p>
      </div>
    </div>
    <div class="section">
      <div>
        Professional
      </div>
    </div>
    <div class="section">
      <div class="slide" v-for="img in imgList">
        <img class="img_item" v-bind:src="img.image_url" style="width: 100%;">
      </div>
    </div>
    <div class="section">
      <div>contact + footer</div>
    </div>
  </div>
</template>

<script>
  // require('fullpage');

  export default {
    name: 'details',
    data: function data() {
      return {
        resourceUrl: 'https://api.500px.com/v1/photos?feature=user&username=MengJia&sort=times_viewed&rpp=5&image_size=4&include_store=store_download&include_states=voted&consumer_key=Sa25PtfFFd04mqZbdy7SJGHvhJdTF30JJkDBOf3M',
        imgList: [],
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
    },
    mounted() {
      // fetch 500api for the top 5 liked photos to display in the carousel
      this.$http
      .get(this.resourceUrl)
      .then(function result(res) {
        this.imgList = res.body.photos;
      }).finally(function finalCall() {
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
          verticalCentered: true,
          sectionsColor: ['#ccc', '#fff', '#ccc', '#fff'],
          lazyLoading: true,
        });
      });
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

