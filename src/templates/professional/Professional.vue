<template>
  <div class="section">
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
</template>
<script>
  import oohlala from './oohlala';
  import mcm from './mcm';
  import nowinstore from './nowinstore';
  import freelance from './freelance';

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
    components: { oohlala, mcm, nowinstore, freelance },
  };
</script>