<template>
  <section id="cd-timeline" class="cd-container">
    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie nis">
        <img src='../../assets/nowinstore_logo.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content" >
        <h2>First Day in the Startup World</h2>
        <p>My first day as a professional developer, joined the Now In Store team. We were a small team, but we were very driven by what we believed in since day one when I got there. </p>
        <span class="cd-date">June 2nd, 2014</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-left">
      <div class="cd-timeline-img cd-movie nis">
        <img src='../../assets/nowinstore_logo.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content" >
        <h2>Starting from the basis</h2>
        <p>The first couple of days, I was trying to get my hands on the technologies used at NIS. Spending time to get to know the product, the tech stack. As a starter, I started working on templates using HTML, CSS, SASS, etc to render some static pages </p>
        <span class="cd-date">June 4nd, 2014</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie nis">
        <img src='../../assets/nowinstore_logo.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content" >
        <h2>First Major Push to Production
        </h2>
        <p>I was assigned to create the new payment page based on the design provided, using bootstrap as the responsive framework.</p>
        <span class="cd-date">Mid June, 2014</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-left">
      <div class="cd-timeline-img cd-movie nis">
        <img src='../../assets/nowinstore_logo.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Touching Backend Python logic</h2>
        <p>After a couple of week working on the front-end tasks. I was given the tasks to fix some simple bugs on the backend, also used this opportunity to learn some practical knowlege on python. </p>
        <span class="cd-date">July, 2014</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie nis">
        <img src='../../assets/nowinstore_logo.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Implement New Design for Catalog</h2>
        <p>Updated the online catalog framework for the product and did integration with different eCommerce platforms.</p>
        <span class="cd-date">Aug 2015</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-left">
      <div class="cd-timeline-img cd-movie nis">
        <img src='../../assets/nowinstore_logo.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>This Internship Gave Me the Chance to Dive Into the Web Development World</h2>
        <p>Before I started this internship, I have no practice on web development. But during the last 3 months, I realized that this is the wokr I want to do, especially on front-end development.</p>
        <span class="cd-date">Aug 2015</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->
  </section>
</template>
<script>

  export default {
    name: 'details',
    data: function data() {
      return {
        dadd: '',
      };
    },
    methods: {
    },
    mounted() {
      $('.sidebar_container').fadeIn('fast');
    },
  };
</script>
<style lang="sass">
	
</style>
<style lang="sass" scoped>
  @import '../../../node_modules/aos/src/sass/aos.scss';
  @import '../../sass/timeline';
</style>