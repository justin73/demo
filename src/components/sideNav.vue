<template>
  <div class="sidenav_container">
    <div class="domain_wrapper">
      <router-link class="domain_section" to="/" exact>{{ $t("nav.domain") }}</router-link>
    </div><div class="nav_wrapper">
      <!-- <router-link class="nav_section" to="/" exact>{{ $t("nav.index") }}</router-link> -->
      <router-link class="nav_section" to="/career" exact>{{ $t("nav.projects") }}</router-link>
      <router-link class="nav_section" to="/dashboard" exact>{{ $t("nav.photography") }}</router-link>
      <!-- <router-link class="nav_section" to="/events" exact>{{ $t("nav.projects") }}</router-link> -->
      <!-- <router-link class="nav_section" :to="{ path: 'services', query: { plan: 'private' }}" exact>{{ $t("nav.services") }}</router-link>
      <router-link class="nav_section" to="/clubs" exact>{{ $t("nav.clubs") }}</router-link>
      <router-link class="nav_section" to="/feeds" exact>{{ $t("nav.feeds") }}</router-link> -->
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
 