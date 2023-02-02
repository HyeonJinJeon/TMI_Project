<template>
  <div>
    <b-sidebar id="sidebar-1" shadow>
      <div class="px-3 py-2">
        <div class="sideTitle">
          <h3>
            {{userInfo.nickName}}'s Map
          </h3>
        </div>
        <div style="width:100%; height:630px; overflow:auto; margin-top: 10px;">
        <table class="table " border="1" style="margin-left: auto; margin-right: auto;">
            <thead>
            <tr>
            </tr>
            </thead>
            <tbody>
            <tr @click="$emit('changeLat', memoryList.marker._lat), $emit('changeLng', memoryList.marker._long), $emit('closeModal')"
                v-for="(memoryList,i) in memoryList" :key="i">
              <td>{{memoryList.date}}<br> {{memoryList.title}}</td>
              <td><img class="img1" :src="memoryList.image" /></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="px-3 py-2 dataFalse" v-if="whatData">
        <p>
          아직 등록하지 않았어요!
        </p>
      </div>
      <b-icon @click="goMyMap" id="sidebar_openBtn" icon="house" font-scale="1.5" class="goMypage"></b-icon>
      <MyPage></MyPage>
      <AddMemorySideBar></AddMemorySideBar>
    </b-sidebar>
  </div>
</template>

<script>

import {firebase} from "@/firebase/firebaseConfig";
import AddMemorySideBar from '@/components/AddMemorySideBar.vue';
import MyPage from '@/components/MyPage.vue';
// import VueDaumMap from 'vue-daum-map';

export default {
  name: 'mainSideBar',
  components: {AddMemorySideBar, MyPage},
  data() {
    return {
      fbCollection: 'users',
      userInfo : [],
      memoryList: [],
      whatData : false,
      modalWindow : false,
      lat1: this.moveLat,
      long1: this.moveLong
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
    changeCenter(){
      this.$emit("changeCenter", this.memoryList.marker._lat)
    },
    goMyMap(){
      this.$router.push('/mainMap')
      delete localStorage.otherCode
    },
    getData() {
      const self = this;
      const db = firebase.firestore();
      db.collection(self.fbCollection)
          .where('code', '==', localStorage.otherCode)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              return
            }
            querySnapshot.forEach((doc) => {
              self.userInfo = doc.data();
              console.log('111111', self.userInfo)
              setTimeout(() => {
                this.getDatalist()
              }, 1);
            });
          })
    },
    getDatalist() {
      const self = this;
      const db = firebase.firestore();
      console.log(self.whatData)
      db.collection("memory")
          .where("user.code",'==', localStorage.otherCode)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
              self.whatData = true
              console.log(self.whatData)
            }
            querySnapshot.forEach((memory) => {
              const _data = memory.data();
              _data.id = memory.id
              const date = new Date(_data.date.seconds * 1000);
              _data.date = getDate(date);
              self.memoryList.push(_data);
              // console.log(self.memoryList)
              // console.log(self.memore)
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
    logout() {
      firebase.auth().signOut()
      this.$router.push('/')
    },
  },
  props: {
    lat: Number,
    long: Number,
    modal: Boolean
  },
  computed:{
    moveLat1: function (){
      return this.lat1
    },
    moveLong1: function (){
      return this.long1
    }
  }

}
</script>

<style scoped>
.sideTitle {
  position: absolute;
  top: 0px;
  margin-top: 10px;
}
.goMypage {
  position: absolute;
  left:10px;
  top:90%;
}
.img1 {
  /*width: auto; height: auto;*/
  max-width: 100px;
  max-height: 100px;
  /*width: 600px;*/
  /*height: 600px;*/
  object-fit: cover;
}

</style>

