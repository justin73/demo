<template>
  <div id="app">
    <router-link to="/">{{ $t("nav.index") }}</router-link>
    <router-link to="/dashboard">{{ $t("nav.dashboard") }}</router-link>
    <router-link to="/events">{{ $t("nav.events") }}</router-link>
    <router-link :to="{ path: 'services', query: { plan: 'private' }}">{{ $t("nav.services") }}</router-link>
    <router-link to="/clubs">{{ $t("nav.clubs") }}</router-link>
    <router-link to="/feeds">{{ $t("nav.feeds") }}</router-link>
  </div>
</template>


<script>
  export default {
    name: 'sidenav',
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
