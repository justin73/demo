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
              <div>
                <p class="sub_title" v-on:click="toggleInfo"><i class="fa fa-camera-retro fa-2x"></i><span>Details</span><i class="more fa fa-angle-down" aria-hidden="true"></i></p>
              </div>
              <div class="camera_params" ref="camera_params">
                <p class="main">{{imgObj.camera}}</p>
                <p class="extra">{{imgObj.lens}}</p>
                <p class="extra">{{imgObj.focal_length}} | {{imgObj.shutter_speed}} | {{imgObj.iso}} | {{imgObj.aperture}}</p>
                <p class="extra">{{imgObj.taken_At}}</p>
              </div>
            </div>
            <div class="location_info">
              <div>
                <p class="sub_title" v-on:click="toggleInfo"><i class="fa fa-map-marker fa-2x" aria-hidden="true"></i><span>Location</span><i class="more fa fa-angle-down" aria-hidden="true"></i></p>
              </div>
              <div class="location_params" ref="location_params">
                <p>{{imgObj.latitude}}</p>
                <p>{{imgObj.longitude}}</p>
              </div>
            </div>
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
        showCameraSettings: true,
      };
    },
    methods: {
      closeOverlay: function close() {
        console.log('close');
        $(this.$refs.myNav).css('width', '0%');
      },
      toggleInfo: function toggleInfoSection(event) {
        if ($(event.target).is('i') || $(event.target).is('span')) {
          $(this).next($(event.target).parent()
            .parent()
            .next()
            .slideToggle('fast')
          );
        } else {
          $(this).next($(event.target).parent().next().slideToggle('fast'));
        }
        // console.log($(event.target).parent().next());

      //   if(this.showCameraSettings) {
      //     this.showCameraSettings = false;
      //     $(this.$refs.camera_params).slideUp();
      //   }
      },
    },
    mounted() {
    },
  };
</script>

<style lang="sass" scoped>
  @import '../sass/overlay.scss';
</style>