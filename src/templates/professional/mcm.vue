<template>
  <section id="cd-timeline" class="cd-container">
    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie mcm">
        <img src='../../assets/mcm.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content" >
        <h2>Meet the MCM team </h2>
        <p>Got the chance to speak with the director and chair of the MCM orgnization. They are very nice people who help refugees to settle in. And as an innovative project, they'd like to keep the mobile trend within the orgnization, so they came up with the idea that a moible application may help to draw young people's attention. Since I was a software engineering at that time. </p>
        <span class="cd-date">Jan 2013</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-left">
      <div class="cd-timeline-img cd-movie mcm">
        <img src='../../assets/mcm.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content" >
        <h2>First project --- the Compassion App</h2>
        <p>So for the second time, we had the meeting. We came up with the idea of creating a kindness app, where there would be daily quote as push notification to remind you of being kind to one another, a note book you can take note about the kindess around you. It was a simple project but it was very meaningful</p>
        <a href="#0" class="cd-read-more">Read more</a>
        <span class="cd-date">May, 2013</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie mcm">
        <img src='../../assets/mcm.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content" >
        <h2>Requirement Elicitation
        </h2>
        <p>It was a really good practice for me to convert the tidious theoritical knowledge into a real world project. So using what I learnt from my program, I was able to creat a very detailed requirement documentation. As I see it now, it really did help me to understand better of what the orgnization wanted and to clear the confusion between the two parities.</p>
        <span class="cd-date">Oct, 2013</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-left">
      <div class="cd-timeline-img cd-movie mcm">
        <!-- <img src="img/cd-icon-movie.svg" alt="Movie"> -->
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Launching the MyCompassionApp 1.0</h2>
        <p>Front-End work, mainly using Backbone.js, jQuery to build user interface</p>
        <a href="#0" class="cd-read-more">Read more</a>
        <span class="cd-date">Feb, 2014</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie mcm">
        <img src='../../assets/mcm.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>KindnessApp 2.0</h2>
        <p></p>
        <a href="#0" class="cd-read-more">Read more</a>
        <span class="cd-date">July 2015</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->


    <div class="cd-timeline-block" v-aos data-aos="fade-up-left">
      <div class="cd-timeline-img cd-movie mcm">
        <img src='../../assets/mcm.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Ideas of MCM Memorial Wall</h2>
        <p></p>
        <a href="#0" class="cd-read-more">Read more</a>
        <span class="cd-date">August 2016</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie mcm">
      </div>
      <div class="cd-timeline-content">
        <h2>Service Assessment</h2>
        <p>Led by me, the web team launced the support for Service Assessment as the last major feature for the winter loadmap. Campus Services now can be able to check-in students using the Campus Clouds and get instant rating & feedback</p>
        <span class="cd-date">Jan 16th, 2017</span>
      </div>
    </div>
    <div class="cd-timeline-block" v-aos data-aos="fade-up-left">
      <div class="cd-timeline-img cd-movie mcm">
      </div>
      <div class="cd-timeline-content">
        <h2>Campus Cloud 2.0</h2>
        <p>Testing Vue.js as the front-end framework for the Campus Cloud 2.0. Working with the product designer for the new design</p>
        <span class="cd-date">Til Now</span>
      </div>
    </div>
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