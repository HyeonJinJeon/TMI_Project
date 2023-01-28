<template>
  <div class>
    <b-sidebar  no-slide class="addMemory" id="sidebar-3">
      <div class="px-3 py-2">
        <label for="title" class="grey-text" style="margin:10px">제목</label>
        <input v-model="title" type="text" id="title" class="form-control" >

        <label for="content" class="grey-text" style="margin:10px">내용</label>
        <input v-model="content" type="textarea" id="content" class="form-control" >
        <hr>
        <label for="content" class="grey-text" style="margin:10px">이미지 저장</label> <br>
        <input type="file" class="form-control" ref="fileInput" accept="image/jpeg, image/jpg" id="inputGroupFile02"  multiple>
        <hr>
        <div>
          <label for="example-datepicker" class="grey-text" style="margin:10px" >날짜 선택</label>
          <b-datepicker id="example-datepicker" v-model="date" class="mb-2 dateSelect"></b-datepicker>
          {{date}}
        </div>
        <hr>
        <label for="content" class="grey-text" style="margin:10px">위치 지정하기</label>
        <input v-model="geo" class="form-control" type="text" placeholder="Search" aria-label="Search" />
        <b-button  @click="searchGeo(geo)" class="moveBtn btn-mdb-color" >이동</b-button>

        <vue-daum-map id="addMap"
                      :appKey="appkey"
                      :center.sync="center"
                      :level.sync="level"
                      :mapTypeId="mapTypeId"
                      :libraries="libraries"
                      style="width:100%; height:30vh;"
                      @load="onLoad"
        >
        </vue-daum-map>
        <b-button @click="onUpload()">저장하기</b-button>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";
// import * as geofire from 'geofire-common';
// import geofire from 'geofire';
import 'firebase/storage'
import VueDaumMap from "vue-daum-map";
export default {
  name: 'addMemorySideBar',
  components: {VueDaumMap},
  data() {
    return {
      appkey: 'f486e714c436dbd1f7761ca8d96e43c8',
      center: {lat: 37.5411, lng: 127.068},
      level: 10,
      mapTypeId: VueDaumMap.MapTypeId.NORMAL,
      libraries: ['services'],
      mapObject: null,
      map: null,
      maps: null,
      markers: [],
      markersInMap: [],
      geo: '',
      date: '',
      fbCollection: 'memory',
      userInfo: {},
      title: '',
      content: '',
      hash: null,
      // marker: new firebase.firestore.GeoPoint(this.lat, this.long)
      marker: {},
      lat: 0.0,
      long: 0.0,
      caption : '',
      img1: [],
      imageData: null
    }
  },
  mounted() {
    const self = this;
    self.init();
  },
  methods: {
    init() {
      const self = this;
      self.getData();
    },
    getData() {
      const self = this;
      const db = firebase.firestore();
      db.collection('users')
          .doc(self.$store.state.user.uid)
          .get()
          .then((snapshot) => {
            self.userInfo = snapshot.data();
          })
    },
    addMemory() {
      const self = this;         // self를 쓰는 이유는 바깥의 this들과 햇갈리지 않기 위해서
      const db = firebase.firestore();
      const timestamp = new Date(self.date + " 00:00:00");
      const marker = new firebase.firestore.GeoPoint(this.lat, this.long);
      // const firestore.GeoPoint = require('geopoint')
      const _data = {            // data()에 있는 데이터가 바로 들어갈 수 없다.
        title: self.title,
        content: self.content,
        date: timestamp,
        userId: self.$store.state.user.uid,
        // marker: self.marker,
        image: self.img1,
        marker: marker,
        user: {
          name: this.userInfo.name,
          code: this.userInfo.code
        },
      }
      db.collection(self.fbCollection) //<- collection('컬랙션명') 바로 쓸수있다.
          .add(_data)
          .then(() => {            // 아무 문제없이 윗쪽 코드가 다 성공하면 then이 실행
            alert("저장되었습니다")
            location.reload();
          })  // 성공하면 무엇을 할건지 정하면 된다/ 이 코드에선 alert가 실행된다
          .catch((e) => {          // 실패하면 catch가 실행된다. e는 errer의 약자
            console.log(e)
            alert("저장에 실패했습니다.")
          })
    },
    // previewImage(event) {
    //   this.uploadValue = 0;
    //   this.img1 = null;
    //   this.imageData = event.target.files[0];
    //   console.log(this.imageData)
    //   // this.onUpload()
    // },
    onUpload() {
      const files = this.$refs.fileInput.files
      for (let i = 0; i < files.length; i++) {
        this.imageData = files[i]
        const storageRef = firebase
            .storage()
            .ref(`${this.currentUser}`)
            .child(`${this.imageData.name}`)
            .put(this.imageData);
        storageRef.on(`state_changed`, snapshot => {
              this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            }, error => {
              console.log(error.message);
            }, () => {
              this.uploadValue = 100;
              storageRef.snapshot.ref.getDownloadURL().then((url) => {
                this.img1.push(url);
                if(i == files.length-1){
                  this.addMemory();
                }
                console.log(this.img1);
              });
            }
        );
      }
    },
    onLoad(map, daum) {
      this.map = map;
      this.maps = daum.map
      let marker = new kakao.maps.Marker({
        position: map.getCenter()
      });
      daum.maps.event.addListener(map, 'click', (mouseEvent) => {
        marker.setMap(map);
        // 클릭한 위도, 경도 정보를 가져옵니다
        let latlng = mouseEvent.latLng;
        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);
        // this.changeLatLng();
        this.lat = latlng.getLat();
        this.long = latlng.getLng();
        console.log(this.lat)
      });
    },
    searchGeo(geo) {
      const ps = new kakao.maps.services.Places();
      console.log('11', kakao.maps.services)
      ps.keywordSearch(geo, placesSearchCB);
      console.log('22', ps.keywordSearch)
      const map = this.map
      function placesSearchCB(data, status) {
        console.log('33', map)
        console.log('44', kakao.maps.services)
        console.log('55', map.setBounds)
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
  },
  props: {
  }
}
</script>

<style scoped>
#sidebar-3{
  position: absolute;
  left: 320px;
  width: 400px;
}
#addMap{
}
.dateSelect{
  height: 20px;
}
</style>