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
        <router-link class="nav_section contact" to="/contact" data-hover="$t('nav.contact')" exact v-on:click.native="addClickCount">{{ $t("nav.contact") }}</router-link>
      </nav>
    </div><div class="locale_wrapper">
      <select id="lang_selector" class="cs-select cs-skin-elastic dropdownmenu">
        <option value="en" selected v-on:click.native="changeLang('en')">EN</option>
        <option value="zh" v-on:click.native="changeLang('zh')">汉</option>
        <option value="fr" v-on:click.native="changeLang('fr')">FR</option>
      </select>
      <!-- <ul>
        <li v-on:click="changeLang('en')"><div><span>EN</span></div></li>
        <li v-on:click="changeLang('zh')"><div><span>汉</span></div></li>
        <li v-on:click="changeLang('fr')"><div><span>FR</span></div></li>
      </ul> -->
    </div>
  </div>
</template>

<script>
  import SelectFX from 'selectfx';

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
      changeLang: function changeLang(lang) {
        this.$store.commit({
          type: 'changeLang',
          selectLang: lang,
        });
      },
    },
    beforeCreate() {
    },
    mounted() {
      const that = this;
      const cs = new SelectFX($('#lang_selector')[0], {
        onChange: function changeLang(val) {
          that.changeLang(val);
        },
      });
      console.log(cs);
      // console.log(this.$store.state.currentPage);
    },
  };
</script>

<style lang="sass">
  @import '../sass/sideNav.scss';
</style>
 