<template>
  <div>
    <div style="z-index: 100; position: absolute">
      <transition name="fade">
        <Detail v-if="modal" @closeModal ="modal = false" :items="items" :obj="obj" :modal="modal"/>
      </transition>
    </div>
    <MainSideBar @moveLoc="moveLoc" @closeModal="modal = false" @changeLat="center.lat=$event" @changeLng="center.lng=$event" :modal="modal"></MainSideBar>
    <vue-daum-map
        :appKey="appkey"
        :center.sync="center"
        :level.sync="level"
        :mapTypeId="mapTypeId"
        :libraries="libraries"
        @load="onLoad"
        style="width:100%;height:100vh;position: fixed;"
    >
    </vue-daum-map>
    <!--    <button v-b-toggle.sidebar-1 id="sidebar_openBtn" class="listView">-->
    <!--      <b-icon  icon="list" font-scale="1.5" style="margin-left: 30px; color: white;" class="my-2 my-sm-0"></b-icon>TMI</button>-->
    <button v-b-toggle.sidebar-1 id="sidebar_openBtn" class="listView">
      <b-icon icon="list" aria-hidden="true"></b-icon>TMI
    </button>
    <input v-model="geo" class="geoSearch" type="text" placeholder="Search" aria-label="Search" v-on:keypress.enter.prevent=searchGeo(geo)>
    <!--    <b-button  @click="searchGeo(geo)" class="moveBtn btn-mdb-color" >-->
    <b-icon @click="searchGeo(geo)" icon="search" class="goSearch"></b-icon>
    <!--    </b-button>-->


    <div class="geoCard" style="text-align: center" >
      <div style="position: relative; top:10px;">
        <span  id="centerAddr"></span>
      </div>
    </div>

    <div class="viewsBack">
      <button id="btnRoadmap" class="selected_btn" @click="setMapType('roadmap')">지도</button>
      <button id="btnSkyview" class="btn sky" @click="setMapType('skyview')">스카이뷰</button>
    </div>

    <div class="weatherCard">
      <i class="fas fa-crosshairs fa-lg" style="position: relative; left: 30px; top: 10px;" @click="getCurrentPosBtn"></i>
    </div>

    <div style="position: absolute;
                right: 9px;
                z-index: 420;
                width: 38px;">
      <button @click="logout" class="logOutBtn" style="display: block; position: relative; padding: 1px 3px 5px;" >
        <b-icon icon="power"></b-icon> Logout
      </button>
      <div style="position:relative; right: 9px; top: 300px">
        <button class="plusBtn" @click="zoomIn">
          <i class="fas fa-plus"></i>
        </button>
        <button class="minusBtn" @click="zoomOut">
          <i class="fas fa-minus"></i>
        </button>
      </div>
    </div>
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
      obj: {},
      userInfo: [],
      maptype: '',
    }
  },
  computed: {

  },
  mounted() {
    this.getDataList()
    this.getData()
  },
  methods: {
    moveLoc() {
      const moveLatLon = new kakao.maps.LatLng(this.center.lat, this.center.lng);
      this.map.panTo(moveLatLon)
    },
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
    },
    onLoad(map, daum) {
      this.map = map;
      this.maps = daum.map


      function searchAddrFromCoords(coords, callback) {
        // 좌표로 행정동 주소 정보를 요청합니다
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
      }

      // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
      function displayCenterInfo(result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const infoDiv = document.getElementById('centerAddr');

          for(var i = 0; i < result.length; i++) {
            // 행정동의 region_type 값은 'H' 이므로
            if (result[i].region_type === 'H') {
              infoDiv.innerHTML = result[i].address_name;
              break;
            }
          }
        }
      }

      setTimeout(function() {
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);
      }, 1000);
      // let marker = new kakao.maps.Marker({
      //   position: map.getCenter()
      // });
      //
      kakao.maps.event.addListener(map, 'idle', function() {
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);
      });
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
    zoomIn() {
      this.map.setLevel(this.map.getLevel() - 1,{animate: true});
    },

// 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
    zoomOut() {
      this.map.setLevel(this.map.getLevel() + 1,{animate: true});
    },
    //지도 타입 바꾸는 함수
    setMapType(maptype) {
      const roadmapControl = document.getElementById('btnRoadmap');
      const skyviewControl = document.getElementById('btnSkyview');
      if (maptype === 'roadmap') {
        this.map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
        roadmapControl.className = 'selected_btn';
        skyviewControl.className = 'btn';
      } else {
        this.map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
        skyviewControl.className = 'selected_btn';
        roadmapControl.className = 'btn';
      }
    },

    locationLoadSuccess(pos){
      // 현재 위치 받아오기
      const currentPos = new kakao.maps.LatLng(pos.coords.latitude,pos.coords.longitude);

      // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
      this.map.panTo(currentPos);

    },

    locationLoadError(){
      alert('위치 정보를 가져오는데 실패했습니다.');
    },

// 위치 가져오기 버튼 클릭시
    getCurrentPosBtn(){
      navigator.geolocation.getCurrentPosition(this.locationLoadSuccess,this.locationLoadError);
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
    getData() {
      const self = this;
      const db = firebase.firestore();
      db.collection("users")
          .doc(self.$store.state.user.uid)
          .get()
          .then((snapshot) => {
            self.userInfo = snapshot.data();
          })
    },
    getDataList() {
      const self = this;
      const db = firebase.firestore();
      db.collection(self.fbCollection)
          .where("userId", "==", this.userId)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              return
            }
            querySnapshot.forEach((doc) => {
              const _data = doc.data();
              _data.id = doc.id //각 유저 필드에 따로 id값이 없지만 유저 고유 id를 불로올 수 있음
              const date = new Date(_data.date.seconds * 1000);
              _data.date = getDate(date);
              // console.log(_data.marker._lat)
              // console.log(_data.marker._long)
              this.sendFromAppLatLngMarker(_data.marker._lat, _data.marker._long, _data)
            });
          })
      const getDate = (date, separated = '-', notFullYear = false) => {
        if (date instanceof Date) {
          let year = date.getFullYear()
          let month = date.getMonth() + 1
          let day = date.getDate()

          if (notFullYear) year = year.toString().slice(2, 4)
          if (month < 10) month = `0${month}`
          if (day < 10) day = `0${day}`

          return `${year}${separated}${month}${separated}${day}`
        } else return '';
      }
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
      const obj1 = mappingData[data.id];
      self.items.push(mappingData[data.id])
      self.markersInMap.push(marker)
      // 마커에 click 이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function() {
        console.log("선택~",obj1.data.content)
        console.log("itmes",self.items)

        self.obj = {
          content: obj1.data.content,
          code: obj1.data.code,
          id: obj1.data.id,
          image: obj1.data.image,
          title: obj1.data.title,
          user: obj1.data.user,
          userId: obj1.data.userId,
          date: obj1.data.date
        }
        self.modal = true
        self.openModal()
        // }
        // 클릭된 마커를 현재 클릭된 마커 객체로 설정합니다
        // this.selectedMarker = marker;
      });
    },
    logout() {
      if(this.userInfo.howLogin == "kakao 로그인") {
        window.Kakao.API.request({
          url: '/v1/user/unlink',
          success: function (response) {
            console.log(response);
          },
          fail: function (error) {
            console.log(error);
          },
        });
      }
      firebase.auth().signOut()
      this.$router.push('/')
    },
  },
  watch: {


  },
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
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.listView{
  position: absolute;
  background-color: #24376e;
  border-radius: 2px;
  width: 90px;
  height: 42px;
  top: 10px;
  left:15px;
  text-align: center;
  color: white;
  border: none;
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
}
.logOutBtn {
  position: relative;
  /*overflow: hidden;*/
  z-index: 2;
  font-size: 15px;
  width: 100px;
  height: 38px;
  float: right;
  margin-right: 10px;
  top: 10px;
  color: #1b375d;
  background-color: #ffffff;
  border-radius: 7px;

  /*border-width: 1px;*/
  border: none;
  /*box-shadow: 0 5px 5px -5px #333;*/
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
}
.geoSearch{
  position:absolute;
  z-index: 2;
  width: 250px;
  height: 42px;
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  top: 10px;
  left:105px;
  border: none;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
  /*box-shadow: 0 5px 5px -5px #333;*/
}
.geoSearch:focus{
  outline: none;
}
.goSearch {
  position: absolute;
  z-index: 3;
  top:20px;
  left: 320px;
}
.geoCard {
  position: absolute;
  background-color:white;
  border-bottom-left-radius: 7px;
  border-top-left-radius: 7px;
  top: 10px;
  /*display: inline-block;*/
  left: 400px;
  height: 43px;
  width: 300px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
}
.weatherCard {
  position: absolute;
  background-color:white;
  border-bottom-right-radius: 7px;
  border-top-right-radius: 7px;
  top: 10px;
  /*display: inline-block;*/
  left: 700px;
  height: 43px;
  width: 80px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
}
.plusBtn{
  /*position: relative;*/
  display: block;
  float: right;
  z-index: 2;
  font-size: 15px;
  width: 40px;
  height: 40px;
  /*margin-right: 10px;*/
  top: 80px;
  color: #1b375d;
  background-color: #ffffff;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top:none;
  border-left: none;
  border-right: none;
  border-bottom-style: solid;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}
.minusBtn{
  /*position: absolute;*/
  display: block;

  float: right;
  z-index: 2;
  font-size: 15px;
  width: 40px;
  height: 40px;
  /*margin-right: 10px;*/
  top: 120px;
  color: #1b375d;
  background-color: #ffffff;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border: none;
}
.viewsBack{
  position:relative;
  /*z-index: 100;*/
  /*left: 50%;*/
  display: inline-block;
  /*margin: 0 50px;*/
  float: right;
  margin-right: 150px;
  margin-top: 10px;
  background-color: white;
  border-radius: 7px;
  padding: 1px;
}
#btnRoadmap.selected_btn {
  color:#fff;
  background: #506380;
  /*background:linear-gradient(#425470, #5b6d8a);*/
  width: 54px;
  height: 38px;
  border-radius: 7px;
  border: none;
}
#btnSkyview.selected_btn {
  color:#fff;
  background:#506380;
  /*background:linear-gradient(#425470, #5b6d8a);*/
  width: 81px;
  height: 38px;
  border-radius: 7px;
  border: none;

}
.btn{
  margin:0;
}
.sky{
  /*top: ;*/
}
</style>
