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
        <img src='../../assets/mcm.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Launching the MyCompassionApp 1.0</h2>
        <p>Implemented the first version as native Android application using Java.</p>
        <span class="cd-date">Feb, 2014</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie mcm">
        <img src='../../assets/mcm.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>KindnessApp 2.0</h2>
        <p>After my NowInStore internship, I got the chance to learn more web skills. In order to improve the user experience of the MCM users. After a discussion with the MCM board, we decided to go for a second version. A hybrid version using PhoneGap as well as web technologies, such as HTML, CSS, Javascript,etc.</p>
        <a href="https://play.google.com/store/apps/details?id=org.mcm.kindnessapp&hl=en" class="cd-read-more">Read more</a>
        <span class="cd-date">July 2015</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->


    <div class="cd-timeline-block" v-aos data-aos="fade-up-left">
      <div class="cd-timeline-img cd-movie mcm">
        <img src='../../assets/mcm.png'>
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Ideas of MCM Memorial Wall</h2>
        <p>MCM is a charity-based orgnization. There have been generous and kind people who've helped MCM every now in then. In order to show MCM's gratitude, the board comes up with the idea to create a doner's wall to tell the stories between them and MCM</p>
        <span class="cd-date">Aug 2016</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie mcm">
        <img src='../../assets/mcm.png'>
      </div>
      <div class="cd-timeline-content">
        <h2>First Assessment for MCM Memorial Wall</h2>
        <p>Did some test on the front-end side using React.js.</p>
        <span class="cd-date">Dec, 2017</span>
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