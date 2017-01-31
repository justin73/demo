<template>
	<div id="list_container">
		<p>Event Listing </p>
    <div class="event_container">
      <div v-if="loading" class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
      <div v-else>
        <ul v-if="hasValue">
          <li v-for="event in eventList">
            <router-link :to="{ name: 'event_item', params: { event_id: event.data.id }}" v-bind:eventContent="event.data.title">{{event.data.title | upperCase }}</router-link>
          </li>
        </ul>
        <p v-else>Oops....error</p>
      </div>
    </div>
	</div>
</template>

<script>
  export default {
    name: 'details',
    data: function data() {
      return {
        loading: true,
        hasValue: false,
        eventList: [],
      };
    },
    methods: {
    },
    computed: {

    },
    filters: {
      upperCase: function upperCase(value) {
        return value.toUpperCase();
      },
    },
    mounted() {
      this.$http
      .get('https://www.reddit.com/.json')
      .then(function result(res) {
        this.loading = false;
        this.hasValue = true;
        this.eventList = res.body.data.children;
      }).catch(function error() {
        this.loading = false;
        this.hasValue = false;
      });
    },
  };
</script>
<style>
  @import '../../sass/loader.scss';
</style>