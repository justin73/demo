<template>
	<div id="myNav" ref="myNav" class="overlay">
      <!-- Button to close the overlay navigation -->
      <a class="closebtn" v-on:click="closeOverlay">&times;</a>
      <!-- Overlay content -->
      <div class="overlay-content">
        <div v-if="isReady" class="content_wrapper">
          <div class="img_container">
            <img class="hd_img" v-bind:src="imgObj.image_url">
          </div><div class="detail_info_container" ref="details">
            <div class="camera_info">
              <p>{{imgObj.name}}</p>
              <p>{{imgObj.description}}</p>
            </div>
            <div class="setting_info">
              <p class="sub_title"><i class="fa fa-camera-retro fa-2x"></i><span>Details</span><i class="more fa fa-angle-down" aria-hidden="true"></i></p>
              <p>{{imgObj.camera}}</p>
              <p>{{imgObj.lens}}</p>
              <p>{{imgObj.focal_length}} | {{imgObj.shutter_speed}} | {{imgObj.iso}} | {{imgObj.aperture}}</p>
              <p>{{imgObj.taken_At}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'imgOverlay',
    props: ['isReady', 'imgList', 'imgObj'],
    data: function data() {
      return {
        imgInfo: '',
      };
    },
    methods: {
      closeOverlay: function close() {
        $(this.$refs.myNav).css('width', '0%');
      },
    },
    mounted() {
    },
  };
</script>

<style lang="sass" scoped>
  @import '../sass/overlay.scss';
</style>