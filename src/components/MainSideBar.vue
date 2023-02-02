<template>
  <div>
    <b-sidebar id="sidebar-1" shadow>
      <div class="px-3 py-2">
        <div class="sideTitle">
          <h3>
            {{userInfo.nickName}}'s Map
          </h3>
        </div>

        <div class="listTable" style="width:100%; height:78vh; overflow:auto; margin-top: 10px;">
          <table class="table " border="1" style="margin-left: auto; margin-right: auto;">
            <thead>
            <tr>
            </tr>
            </thead>
            <tbody>
            <tr @click="$emit('changeLat', memoryList.marker._lat), $emit('changeLng', memoryList.marker._long), $emit('closeModal'), $emit('moveLoc') "
                v-for="(memoryList,i) in memoryList" :key="i">
              <td>
                <div v-if="deleteCheck == true" class="custom-control custom-checkbox">
                  <input v-model="arr" type="checkbox" class="custom-control-input" :id="i" name="list[]"
                         :value="memoryList.id">
                  <label class="custom-control-label" :for="i"></label>
                </div>
              </td>
              <td>{{ memoryList.date }}<br> {{ memoryList.title }}</td>
              <td><img class="img1" :src="memoryList.image"/></td>
            </tr>
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

      <b-icon @click="goMypage" v-b-toggle.sidebar-2 id="sidebar_openBtn" icon="person-fill" font-scale="1.5" class="goMypage" ref="imMypage"></b-icon>
      <div v-if="imMypage">
        <MyPage></MyPage>
      </div>
      <b-icon @click="goAddmemory" v-b-toggle.sidebar-3 id="sidebar_openBtn" icon="plus-lg" font-scale="1.5" class="goAddMemory" ref="imAddmemory"></b-icon>
      <div v-if="imAddmemory">
        <AddMemorySideBar></AddMemorySideBar>
      </div>
      <b-icon @click="onCheck" id="sidebar_openBtn" icon="pencil-fill" font-scale="1.5" class="deleteCheck"></b-icon>
      <b-button v-if="deleteCheck == true" @click="deleteList" variant="danger" class="deleteBtn"> 삭제하기 </b-button>
      <b-button v-if="deleteCheck == true" @click="offCheck" variant="primary" class="cancelBtn"> 취소하기 </b-button>

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
      userInfo: [],
      memoryList: [],
      whatData: false,
      modalWindow: false,
      lat1: this.moveLat,
      long1: this.moveLong,
      deleteCheck: false,
      arr: [],
      imMypage: false,
      imAddmemory: false,
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
    goMypage() {
      this.imMypage = !this.imMypage
      this.imAddmemory = false;
    },
    goAddmemory() {
      this.imAddmemory= !this.imAddmemory
      this.imMypage = false;
    },
    changeCenter() {
      this.$emit("changeCenter", this.memoryList.marker._lat)
    },
    onCheck() {
      this.deleteCheck = true;
    },
    offCheck() {
      this.deleteCheck = false;
      this.arr.splice(0);
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
          .where("userId", '==', self.$store.state.user.uid)
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
            for(var i=0; i<self.memoryList.length; i++) {
              self.memoryList.sort(function(a,b) {
                return new Date(b.date)-new Date(a.date)
              })
            }
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
    deleteList() {
      const self = this;
      const db = firebase.firestore();
      const batch = db.batch()
      // const ref2 = db.collection("a").doc()
      // batch.set(ref2,{},{merge:true})
      //
      // const ref3 = db.collection("v").doc()
      // batch.set(ref3,{},{merge:true})

      for (let i = 0; i < this.arr.length; i++) {
        const ref = db.collection("memory").doc(this.arr[i])
        batch.delete(ref)
      }
      batch.commit()
          .then(() => {
            alert("삭제 완료")
            self.$router.go();
          })
    },
  },
  props: {
    lat: Number,
    long: Number,
    modal : Boolean,
  },

}
</script>

<style scoped>
.deleteBtn{
  position: absolute;
  z-index: 2;
  font-size: 15px;
  width: 130px;
  height: 40px;
  left: 1%;
  top: 93%;
}
.cancelBtn{
  position: absolute;
  z-index: 2;
  font-size: 15px;
  width: 130px;
  height: 40px;
  left: 50%;
  top: 93%;
}
.goMypage {
  position: absolute;
  left: 10%;
  top: 90%;
}
.goAddMemory {
  position: absolute;
  left: 48%;
  top: 90%;
}
.deleteCheck {
  position: absolute;
  left: 85%;
  top: 90%;
}
.img1 {
  /*width: auto; height: auto;*/
  max-width: 100px;
  max-height: 100px;
  /*width: 600px;*/
  /*height: 600px;*/
  object-fit: cover;
}
table {
  height: 20px;
}
.dataFalse{
  position: absolute;
  top:40vh;
  left:27%;
}
.sideTitle {
  position: absolute;
  top: 0px;
  margin-top: 10px;
}
</style>
