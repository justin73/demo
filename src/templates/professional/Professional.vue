<template>
  <div>
    <!-- <sidebar></sidebar> -->
    <div class="section" :class="$route.params.company">
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
  .oohlala{
    background: rgba(44,148,233, 0.7);
  }
  .mcm{
    background: #f4f4f4;
  }
  .nowinstore{
    background: #62588e;
  }
</style>