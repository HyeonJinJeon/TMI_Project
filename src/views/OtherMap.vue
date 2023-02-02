<template>
  <div>
    <div style="z-index: 100; position: absolute">
      <transition name="fade">
        <Detail v-if="modal" @closeModal ="modal = false" :items="items" :obj="obj" :modal="modal"/>
      </transition>
    </div>
    <div>

    </div>
    <OtherSideBar @changeLat="center.lat=$event" @changeLng="center.lng=$event" :centerLat="centerLat" :centerLng="centerLng" @closeModal="modal = false" :modal="modal"></OtherSideBar>

<!--    <b-button v-b-toggle.sidebar-1 id="sidebar_openBtn" class = "sideOpenBtn">sidebar open</b-button>-->
    <vue-daum-map
        :appKey="appkey"
        :center.sync="center"
        :level.sync="level"
        :mapTypeId="mapTypeId"
        :libraries="libraries"
        @load="onLoad"
        style="width:100%;height:100vh;"
    >
    </vue-daum-map>
    <button v-b-toggle.sidebar-1 id="sidebar_openBtn" class="listView">
      <b-icon icon="list" aria-hidden="true"></b-icon>TMI
    </button>
    <input v-model="geo" class="geoSearch" type="text" placeholder="Search" aria-label="Search" />
    <!--    <b-button  @click="searchGeo(geo)" class="moveBtn btn-mdb-color" >-->
    <b-icon @click="searchGeo(geo)" icon="search" class="goSearch"></b-icon>
    <!--    </b-button>-->

    <button @click="logout" class="logOutBtn" >
      <b-icon icon="power"></b-icon> Logout
    </button>

  </div>
</template>

<script>
import OtherSideBar from "@/components/OtherSideBar.vue";
import {firebase} from '@/firebase/firebaseConfig';
import VueDaumMap from "vue-daum-map";
import Detail from "@/components/Detail.vue";
export default {
  name: 'mainMap',
  components: {VueDaumMap, OtherSideBar, Detail },
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
      otherMap: true,
    }
  },
  mounted() {
    this.getDataList()
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
    getDataList() {
      const self = this;
      const db = firebase.firestore();
      db.collection(self.fbCollection)
          .where("user.code", "==", localStorage.otherCode)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              return
            }
            querySnapshot.forEach((doc) => {
              const _data = doc.data();
              _data.id = doc.id //각 유저 필드에 따로 id값이 없지만 유저 고유 id를 불로올 수 있음
              const date = new Date(_data.date.seconds * 1000);
              console.log("date",date)
              // console.log(_data.marker._lat)
              // console.log(_data.marker._long)
              this.sendFromAppLatLngMarker(_data.marker._lat, _data.marker._long, _data)
              _data.date = getDate(date);

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
      console.log("여긴가?")
      const self = this;
// 마커가 표시될 위치입니다
      const markerPosition = new kakao.maps.LatLng(lat, long);
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
  },
  watch:{
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 100vh;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;

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
.sideOpenBtn{
  position: absolute;
  z-index:2;
  /*left: 42%;*/
  /*top: 85%;*/
}
.searchBtn {
  position: absolute;
  z-index:2;
  width: 500px;
  height: 40px;
  left: 40%;
  top: 2%;
}
.moveBtn {
  position: absolute;
  z-index:2;
  width: 45px;
  height: 40px;
  left: 60%;
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
.listView{
  position: absolute;
  z-index: 10;
  background-color: #24376e;
  border-radius: 2px;
  width: 90px;
  height: 38px;
  top: 10px;
  left:15px;
  text-align: center;
  color: white;
  border: none;
  border-radius: 3px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);
}
.logOutBtn {
  position: absolute;
  z-index: 2;
  font-size: 15px;
  width: 100px;
  height: 35px;
  left: 94%;
  top: 10px;
  color: #1b375d;
  background-color: #ffffff;
  border-radius: 3px;
  /*border-width: 1px;*/
  border: none;
  /*box-shadow: 0 5px 5px -5px #333;*/
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3);

}
.geoSearch{
  position:absolute;
  z-index: 2;
  width: 250px;
  height: 38px;
  border-radius: 3px;
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

</style>
