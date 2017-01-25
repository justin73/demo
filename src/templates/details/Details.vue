<template>
	<div>
		<p>Event Listing </p>
	</div>
</template>

<script>
  export default {
    name: 'details',
    methods: {
    },
    mounted() {
      this.$http
      .get('https://www.reddit.com/.json')
      .then(res => console.log(res))
      .catch(err => console.error(err));
    },
  };
</script>
