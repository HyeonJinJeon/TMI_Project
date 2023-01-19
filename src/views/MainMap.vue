<template>
  <div>
    <div style="z-index: 100; position: absolute">
      <Detail v-if="modal" @closeModal ="modal = false" :items="items" :modal="modal"/>
    </div>
    <div>
      <b-navbar toggleable="lg" type="dark" style="background-color: #a3b2d6; height: 55px">
        <b-icon v-b-toggle.sidebar-1 id="sidebar_openBtn" icon="list" font-scale="1.5" style="margin-left: 30px; color: white;" class="my-2 my-sm-0"></b-icon>

        <b-navbar-brand  style="margin-left: 43%; font-weight: bold; font-size: 45px; font-family: 'Nanum Pen Script', cursive;" href="#">T . M . I</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form v-on:keypress.enter.prevent=searchGeo(geo)>
              <b-form-input v-model="geo" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button @click="searchGeo(geo)" size="sm" class="my-2 my-sm-0" variant="outline-white">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <MainSideBar @changeLat="center.lat=$event" @changeLng="center.lng=$event" :centerLat="centerLat" :centerLng="centerLng"></MainSideBar>
    <vue-daum-map
        :appKey="appkey"
        :center.sync="center"
        :level.sync="level"
        :mapTypeId="mapTypeId"
        :libraries="libraries"
        @load="onLoad"
        style="width:100%;height:100vh;  position: fixed"
    >
    </vue-daum-map>
  </div>
</template>

<script>
import MainSideBar from "@/components/MainSideBar.vue";
import {firebase} from '@/firebase/firebaseConfig';
import VueDaumMap from "vue-daum-map";
import Detail from "@/components/Detail.vue";
export default {
  name: 'mainMap',
  components: { Detail ,MainSideBar, VueDaumMap},
  data() {
    return {
      appkey: 'f486e714c436dbd1f7761ca8d96e43c8',
      center: {lat: 37.5411, lng: 127.068},
      level: 3,
      mapTypeId: VueDaumMap.MapTypeId.NORMAL,
      libraries: ['services'],
      mapObject: null,
      map: null,
      maps: null,
      markers: [],
      rows: [],
      fbCollection: 'memory',
      userId: this.$store.state.user.uid,
      markersInMap: [],
      geo: '',
      lat: 0,
      long: 0,
      centerLat: 37,
      centerLng: 127,
      makerOn: false,
      items: [],
      modal : false,
    }
  },
  async mounted() {
    await this.getDataList()
  },
  methods: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    onLoad(map, daum) {
      this.map = map;
      this.maps = daum.map
      // let marker = new kakao.maps.Marker({
      //   position: map.getCenter()
      // });
      //
      //
      // kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
      //
      //   // 클릭한 위도, 경도 정보를 가져옵니다
      //   let latlng = mouseEvent.latLng;
      //
      //   // 마커 위치를 클릭한 위치로 옮깁니다
      //   marker.setPosition(latlng);
      //
      //   this.lat = latlng.La;
      //   this.long = latlng.Ma;
      //   console.log(this.lat)
      // });
    },
    searchGeo(geo){
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(geo, placesSearchCB);
      const map=this.map
      function placesSearchCB (data,status) {
        if (status === kakao.maps.services.Status.OK) {
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
          // LatLngBounds 객체에 좌표를 추가합니다
          const bounds = new kakao.maps.LatLngBounds();
          for (var i=0; i<data.length; i++) {
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }
          // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
          map.setBounds(bounds);
        }
      }
    },
    async getDataList() {
      const self = this;
      const db = firebase.firestore();
      await db.collection(self.fbCollection)
          .where("userId", "==", this.userId)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              return
            }
            querySnapshot.forEach((doc) => {
              const _data = doc.data();
              _data.id = doc.id //각 유저 필드에 따로 id값이 없지만 유저 고유 id를 불로올 수 있음
              // console.log(_data.marker._lat)
              // console.log(_data.marker._long)
              this.sendFromAppLatLngMarker(_data.marker._lat, _data.marker._long, _data)
            });
          })
    },
    sendFromAppLatLngMarker(lat, long, data) {
      const self = this;
// 마커가 표시될 위치입니다
      const markerPosition = new kakao.maps.LatLng(lat, long);
      // const selectedMarker = null;
      const mappingData ={};
      console.log(markerPosition)
      // const markerImageUrl = '/images/marker2.png',
      //     markerImageSize = new this.maps.Size(20, 20), // 마커 이미지의 크기
      //     markerImageOptions = {
      //       // offset: new this.maps.Point(62, 28)// 마커 좌표에 일치시킬 이미지 안의 좌표
      //     };
      //
      // const markerImage = new this.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);
// 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        map: self.map,
        // image: markerImage,
        position: markerPosition
      });
      mappingData[data.id] = {marker,data}
      const obj = mappingData[data.id];
      self.items.push(mappingData[data.id])
      self.markersInMap.push(marker)
      // 마커에 click 이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function() {
        console.log("선택~")
        console.log(obj)
        console.log("itmes")
        console.log(self.items)
        self.modal = true
        self.openModal()
        // }
        // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
        // this.selectedMarker = marker;
      });
    },
  },
  watch:{
  }
}
</script>

<style scoped>
#mainMap {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 45%; height: 50%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
  left:30%;
  top:23%;
}
.white-bg {
  width: 50%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.modalShow{
  position: absolute;
  z-index:3;
  width: 88px;
  height: 35px;
  left: 62%;
  top: 5%;
}
#map {
  width: 100%;
  height: 100vh;
}
.sideOpenBtn{
  position: absolute;
  z-index:2;
  /*left: 42%;*/
  /*top: 85%;*/
}
.searchInput {
  position: absolute;
  z-index:2;
  width: 500px;
  height: 40px;
  left: 40%;
  top: 2%;
}
.moveBtn {
  position: absolute;
  z-index:3;
  width: 88px;
  height: 35px;
  left: 62%;
  top: 2%;
}
.detailView{
  position: absolute;
  z-index:100;
  width: 100%;
  height: 100vh;
  left: 62%;
  top: 5%;
}
</style>