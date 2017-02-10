<template>
  <div>
    <!-- <sidebar></sidebar> -->
    <div class="job_content section" :class="$route.params.company">
      <div v-if="$route.params.company === 'oohlala'">
        <oohlala></oohlala>
      </div>
      <div v-else-if="$route.params.company === 'mcm'">
        <mcm></mcm>
      </div>
      <div v-else-if="$route.params.company === 'nowinstore'">
        <nowinstore></nowinstore>
      </div>
      <div v-else>
        <freelance></freelance>
      </div>
    </div>
  </div>
</template>
<script>
  import oohlala from './oohlala';
  import mcm from './mcm';
  import nowinstore from './nowinstore';
  import freelance from './freelance';
  import sidebar from '../../components/sideNav';

  export default {
    name: 'details',
    data: function data() {
      return {
        company_name: '',
      };
    },
    methods: {
    },
    mounted() {
      // this.company_name = this.$route.params.company_name;
      // console.log(this.company_name);
    },
    components: { sidebar, oohlala, mcm, nowinstore, freelance },
  };
</script>

<style>
  .job_content{
    /*background: rgba(44,148,233, 0.7);*/
/*    position: relative;
    top: 109px;*/
    /*padding-top: 109px;*/
    padding-top: 109px;
    background: #114357; /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #114357 , #F29492); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #114357 , #F29492); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
  }
/*  .mcm{
    position: relative;
    top: 109px;
    background: #f4f4f4;
  }
  .nowinstore{
    position: relative;
    top: 109px;
    background: #62588e;
  }
  .freelance{
    position: relative;
    top: 109px;
    background: #62588e;
  }*/
</style>