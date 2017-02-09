<template>
  <section class="c-hero-flex">
    <router-link :to="{ name: 'job_item', params: { company:'oohlala' }}" class="c-hero-flex__item">
      <h2 class="c-hero-flex__title">OOHLALA Mobile Inc.</h2>
    </router-link>
    <router-link :to="{ name: 'job_item', params: { company:'nowinstore' }}" class="c-hero-flex__item">
      <h2 class="c-hero-flex__title">Now In Store Inc.</h2>
    </router-link>
    <router-link :to="{ name: 'job_item', params: { company:'mcm' }}" class="c-hero-flex__item">
      <h2 class="c-hero-flex__title">Montreal City Mission</h2>
    </router-link>
  </section>
</template>
<script>
  export default {
    name: 'job_index',
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
  };
</script>

<style lang="sass">
	@import '../../sass/jobIndex.scss';
</style>