<template>
  <div class="sidenav_container">
    <div class="domain_wrapper">
      <router-link class="domain_section" to="/" exact>{{ $t("nav.domain") }}</router-link>
    </div><div class="nav_wrapper">
      <!-- <router-link class="nav_section" to="/" exact>{{ $t("nav.index") }}</router-link> -->
      <nav class="cl-effect-16" id="cl-effect-16">
        <router-link class="nav_section career" to="/career" v-bind:data-hover="$t('nav.projects')" exact>{{ $t("nav.projects") }}</router-link>
      </nav>
      <nav class="cl-effect-16" id="cl-effect-16">
        <router-link class="nav_section photo" to="/photography" v-bind:data-hover="$t('nav.photography')" exact>{{ $t("nav.photography") }}</router-link>
      </nav>
      <nav class="cl-effect-16" id="cl-effect-16">
        <router-link class="nav_section contact" to="/contact" data-hover="Contact" exact>Contact</router-link>
      </nav>
      <!-- <router-link class="nav_section" to="/events" exact>{{ $t("nav.projects") }}</router-link> -->
      <!-- <router-link class="nav_section" :to="{ path: 'services', query: { plan: 'private' }}" exact>{{ $t("nav.services") }}</router-link>
      <router-link class="nav_section" to="/clubs" exact>{{ $t("nav.clubs") }}</router-link>
      <router-link class="nav_section" to="/feeds" exact>{{ $t("nav.feeds") }}</router-link> -->
<!--       <section class="color-11">
        <nav class="cl-effect-16" id="cl-effect-16">
          <a href="#cl-effect-16" data-hover="Languor">Languor</a>
        </nav>
      </section> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sidenav',
  };
</script>

<style lang="sass" scoped>
  @import '../sass/sideNav.scss';
</style>
 