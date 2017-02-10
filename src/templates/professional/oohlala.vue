<template>
  <section id="cd-timeline" class="cd-container">
    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie oohlala">
        <!-- <img src="img/cd-icon-picture.svg" alt="Picture"> -->
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content" >
        <h2>Hello OOHLALA</h2>
        <p>My very first day as a Web Dev at OOHLALA</p>
        <span class="cd-date">Sep 1st, 2014</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-left">
      <div class="cd-timeline-img cd-movie oohlala">
        <!-- <img src="img/cd-icon-movie.svg" alt="Movie"> -->
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content" >
        <h2>First Push to Prod</h2>
        <p>Spent a couple of days to get into the OOHLALA rhythm, set up the dev environment, got ready for my first website change to production</p>
        <span class="cd-date">Sep 3rd, 2014</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie oohlala">
        <!-- <img src="img/cd-icon-movie.svg" alt="Movie"> -->
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content" >
        <h2>Getting hands dirty on Campus Cloud & Website</h2>
        <p>Front-End work, mainly using Backbone.js, jQuery, Django template, LESS to build user interface.</p>
        <span class="cd-date">Sep 10th, 2014</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-left">
      <div class="cd-timeline-img cd-movie oohlala">
        <!-- <img src="img/cd-icon-movie.svg" alt="Movie"> -->
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Touching Backend Python logic</h2>
        <p>Started working independently for entire feature development, from backend logic using python, calling api endpoint to front end data display</p>
        <span class="cd-date">Dec, 2014</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->
    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie oohlala">
        <!-- <img src="img/cd-icon-picture.svg" alt="Picture"> -->
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Working on Calendar Integration</h2>
        <p>Since my work responsibility envolves, starting from Feburary I took some of the iCal/RSS/JSON integration, pulling external data into OOHLALA DB.</p>
        <span class="cd-date">Feb 2015</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->
    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie oohlala">
        <!-- <img src="img/cd-icon-picture.svg" alt="Picture"> -->
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Taking the lead on the Web Team</h2>
        <p>Starting in the summer, I've been taking more responisbilities on the web development. Taking the lead for sprint tasks plannin, development responsibilities,etc.</p>
        <span class="cd-date">June 2015</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->
    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie oohlala">
        <!-- <img src="img/cd-icon-picture.svg" alt="Picture"> -->
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Integrated Payment System using Stripe.js for Campus Cloud </h2>
        <p>This feature comes with the event ticketing system, which was designed for clients to not only create events via OOHLALA platform but also be able to sale tickets for orientation or other events. So it is one centralized place to do all the work. On Campus Cloud, after creating events, clients can setup banking information, get verified and then enable the ticket saling feature.</p>

        <p>The entire event feature, inlcuding ticketing and payment system, is one of the major 2015 roadmap features. </p>
        <span class="cd-date">July 2015</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->


    <div class="cd-timeline-block" v-aos data-aos="fade-up-left">
      <div class="cd-timeline-img cd-movie oohlala">
        <!-- <img src="img/cd-icon-picture.svg" alt="Picture"> -->
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>OOHLALA New Website</h2>
        <p>Based on the marketing team's reuqest, I took the lead on this project. Spent a month working with the designer and re-did the entire compnay website. Used foundation as the mobile responsive and cross-browser framework, support localization.</p>
        <span class="cd-date">August 2016</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie oohlala">
        <!-- <img src="img/cd-icon-location.svg" alt="Location"> -->
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Event Attendance V1</h2>
        <p>As an update for the existing event feature, this fall I've worked with the customer success team to add this new attendance feature. By adding QR code to events, staff now can check-in students for all kinds of events</p>
        <span class="cd-date">Oct 2016</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-left">
      <div class="cd-timeline-img cd-movie oohlala">
        <!-- <img src="img/cd-icon-location.svg" alt="Location"> -->
      </div> <!-- cd-timeline-img -->

      <div class="cd-timeline-content">
        <h2>Event Attendance V2 & Routing Support for Campus Cloud</h2>
        <p>
          A major UI/UX update on the event attendance feature based on the feedback gathered from clients during the last two months. Worked with the newly hired project manager and the designer to provide better UX flow. Added routing to the 'legacy' event feature and updated the backend logic, reduced data fetching time by optimizing sql query to enhance performance. 
        </p>
        <span class="cd-date">Dec 22nd, 2016</span>
      </div> <!-- cd-timeline-content -->
    </div> <!-- cd-timeline-block -->

    <div class="cd-timeline-block" v-aos data-aos="fade-up-right">
      <div class="cd-timeline-img cd-movie oohlala">
      </div>
      <div class="cd-timeline-content">
        <h2>Service Assessment</h2>
        <p>Led by me, the web team launced the support for Service Assessment as the last major feature for the winter loadmap. Campus Services now can be able to check-in students using the Campus Clouds and get instant rating & feedback</p>
        <span class="cd-date">Jan 16th, 2017</span>
      </div>
    </div>
    <div class="cd-timeline-block" v-aos data-aos="fade-up-left">
      <div class="cd-timeline-img cd-movie oohlala">
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
  import Sidebar from '../../components/sideNav';
  import aos from '../../directives/aos';

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
      // $('.sidebar_container').fadeIn('fast');
    },
    components: { Sidebar, aos },
  };
</script>
<style lang="sass" scoped>
  @import '../../../node_modules/aos/src/sass/aos.scss';
  @import '../../sass/timeline';
</style>