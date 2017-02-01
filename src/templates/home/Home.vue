<template>
	<div class="door_wrapper">
		<!-- <p>index page</p>
		<span>Name:</span>
		<input v-model="schoolName" placeholder="Unversity Name">
		<span>Description:</span>
		<textarea v-model="description" placeholder="add multiple lines"></textarea>
		<input type="checkbox" id="checkbox" v-model="checked">
		<select v-model="selected">
		  <option v-for="host in hostList" >{{host.name}}</option>
		</select>
    <button v-on:click="saveData">Save</button> -->
    <div class="door left"></div><div class="door right"></div>
	</div>
</template>

<script>
  export default {
    name: 'details',
    data: function data() {
      return {
        schoolName: '',
        description: '',
        checked: '',
        selected: [],
        hostList: [
          { name: 'Depart A', id: 2 },
          { name: 'Depart B', id: 3 },
          { name: 'Depart C', id: 4 },
        ],
      };
    },
    methods: {
      saveData: function save() {
        console.log('save the model on button click');
      },
    },
    mounted() {

    },
    beforeDestroy() {
      console.log('save the model now before the view is destoried, this is autosave');
      console.log(this.schoolName);
    },
  };
</script>

<style lang="sass" scoped>
  @import '../../sass/index.scss';
</style>

