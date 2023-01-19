<template>
  <div>
    <b-sidebar id="sidebar-1" shadow>
      <div class="px-3 py-2">
        <div>
          <h4>
            {{userInfo.nickName}}'s Map
          </h4>
        </div>

        <div>
          <table class="table " border="1" style="margin-left: auto; margin-right: auto;">
            <thead>
            <tr>
            </tr>
            </thead>
            <tbody>
            <tr @click="$emit('changeLat', memoryList.marker._lat), $emit('changeLng', memoryList.marker._long)" v-for="(memoryList,i) in memoryList" :key="i">
              <td>{{memoryList.date}}<br> {{memoryList.title}}</td>
              <td>{{memoryList.image}}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="px-3 py-2 dataFalse" v-if="whatData">
        <p>
          추억을 남겨보세요
        </p>
      </div>
      <!--      <b-button v-b-toggle.sidebar-2 id="sidebar_openBtn">subPage</b-button>-->
      <b-icon v-b-toggle.sidebar-2 id="sidebar_openBtn" icon="pencil-fill" font-scale="1.5" class="goMypage"></b-icon>
      <b-icon v-b-toggle.sidebar-3 id="sidebar_openBtn" icon="plus-lg" font-scale="1.5" class="goAddMemory"></b-icon>
      <button @click="logout" class="logOutBtn btn-outline-light-blue" >
        <b-icon icon="power" aria-hidden="true"></b-icon> Logout
      </button>
      <MyPage></MyPage>
      <AddMemorySideBar></AddMemorySideBar>
    </b-sidebar>
  </div>
</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";
import AddMemorySideBar from "@/components/AddMemorySideBar.vue";
import MyPage from "@/components/MyPage.vue";
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
      self.getDatalist();
    },
    changeCenter(){
      this.$emit("changeCenter", this.memoryList.marker._lat)
    },
    getData() {
      const self = this;
      const db = firebase.firestore();
      db.collection(self.fbCollection)
          .doc(self.$store.state.user.uid)
          .get()
          .then((snapshot) => {
            self.userInfo = snapshot.data();
          })
    },
    getDatalist() {
      const self = this;
      const db = firebase.firestore();
      console.log(self.whatData)
      db.collection("memory")
          .where("userId",'==',self.$store.state.user.uid)
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
    long: Number
  },
}
</script>

<style>
.logOutBtn {
  position: absolute;
  z-index:2;
  font-size: 15px;
  width: 130px;
  height: 40px;
  left: 50%;
  top: 95%;
}
.goMypage {
  position: absolute;
  left:10px;
  top:90%;
}
.goAddMemory {
  position: absolute;
  left:120px;
  top: 90%;
}
</style>