<template>
  <div class="sidenav_container">
    <div class="domain_wrapper" >
      <router-link class="domain_section" to="/" exact v-on:click.native="addClickCount($t('nav.domain'))">{{ $t("nav.domain") }}</router-link>
    </div><div class="nav_wrapper">
      <nav class="cl-effect-16" id="cl-effect-16">
        <router-link class="nav_section career" to="/career" v-bind:data-hover="$t('nav.projects')" exact v-on:click.native="addClickCount($t('nav.projects'))">{{ $t("nav.projects") }}</router-link>
      </nav>
      <nav class="cl-effect-16" id="cl-effect-16">
        <router-link class="nav_section photo" to="/photography" v-bind:data-hover="$t('nav.photography')" exact v-on:click.native="addClickCount($t('nav.photography'))">{{ $t("nav.photography") }}</router-link>
      </nav>
      <nav class="cl-effect-16" id="cl-effect-16">
        <router-link class="nav_section contact" to="/contact" data-hover="Contact" exact v-on:click.native="addClickCount">Contact</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sidenav',
    data: function data() {
      return {

      };
    },
    methods: {
      addClickCount: function addClickCount(page) {
        this.$store.commit({
          type: 'changePage',
          currentPage: page,
        });
        // this.$store.commit('changePage');
      },
    },
    mounted() {
      // console.log(this.$store.state.currentPage);
    },
  };
</script>

<style lang="sass" scoped>
  @import '../sass/sideNav.scss';
</style>
 