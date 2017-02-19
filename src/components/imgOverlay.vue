<template>
	<div id="myNav" ref="myNav" class="overlay">
      <!-- Button to close the overlay navigation -->
      <a class="closebtn" v-on:click="closeOverlay">&times;</a>
      <!-- Overlay content -->
      <div class="overlay-content">
        <div v-if="isReady" class="content_wrapper">
          <div class="img_wrapper">
            <div class="img_container">
              <img class="hd_img" v-bind:src="imgObj.image_url">
            </div>
          </div><div class="detail_info_container" ref="details">
            <div class="camera_info">
              <p>{{imgObj.name}}</p>
              <p>{{imgObj.description}}</p>
            </div>
            <div class="setting_info">
              <div>
                <p class="sub_title" v-on:click="toggleInfo"><i class="fa fa-camera-retro fa-2x"></i><span>{{ $t("photography.details") }}</span><i class="more fa fa-angle-down" aria-hidden="true"></i></p>
              </div>
              <div v-if="imgObj.camera" class="camera_params" ref="camera_params">
                <p class="main">{{imgObj.camera}}</p>
                <p class="extra">{{imgObj.lens}}</p>
                <!--200mm/ƒ/5.6/29s/ISO 100-->
                <p class="extra">{{imgObj.focal_length}} mm/{{imgObj.shutter_speed}}s/ISO {{imgObj.iso}}/ƒ/{{imgObj.aperture}}</p>
                <p class="extra">{{imgObj.taken_At}}</p>
              </div>
              <div v-else>
                <p class="main">{{ $t("photography.info_missing") }}</p>
              </div>
            </div>
            <div class="location_info">
              <div>
                <p class="sub_title" v-on:click="toggleInfo"><i class="fa fa-map-marker fa-2x" aria-hidden="true"></i><span>{{ $t("photography.location") }}</span><i class="more fa fa-angle-down" aria-hidden="true"></i></p>
              </div>
              <div class="location_params" ref="location_params">
<!--                 <map style="height:200px;width:200px;display:block;" :center="center" :zoom="7">
                  <marker v-for="m in markers" :position.sync="m.position" :clickable="true" :draggable="true" @g-click="center=m.center">
                  </marker>
                </map> -->
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
  import { load, Map, Marker } from 'vue-google-maps';
  
  load('AIzaSyB6y5W5quUzkpgcr11mMn3AxwhVvYzsrkQ');

  export default {
    name: 'imgOverlay',
    props: ['isReady', 'imgList', 'imgObj'],
    data: function data() {
      return {
        imgInfo: '',
        // info_available: true;
        // google map api key : AIzaSyBN-7CwGHIRPs4yfpSN1-2NwLMk9z7UcRU
        center: { lat: 0, lng: 0 },
        // center: { lat: this.imgObj.latitude, lng: this.imgObj.longitude },
        markers: [{
          position: { lat: 0, lng: 0 },
        }],
      };
    },
    computed: {
      updateCenter: function updateCenter() {
        this.center.lat = this.imgObj.latitude;
        this.center.lng = this.imgObj.longitude;
        return this.center;
      },
      updateMarkers: function updateMarkers() {
        this.markers[0].position.lat = this.imgObj.latitude;
        this.markers[0].position.lng = this.imgObj.longitude;
        return this.center;
      },
    },
    component: {
      Map,
      Marker,
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
      },
      // initMap: function initMap() {
      //   const uluru = { lat: -25.363, lng: 131.044 };
      //   const map = new google.maps.Map( $('#map'), {
      //     zoom: 4,
      //     center: uluru
      //   });
      //   const marker = new google.maps.Marker({
      //     position: uluru,
      //     map: map
      //   });
      // },
    },
    ready() {
      // this.imgObj
    },
    mounted() {
    },
  };
</script>

<style lang="sass" scoped>
  @import '../sass/overlay.scss';
  #map { width: 100%; height: 400px; background-color: grey; }
</style>