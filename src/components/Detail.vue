<template>
  <div v-if="modal == true" class="black-bg">
    <div class="white-bg">
      <!--      수정버튼을 누르지 않았으면 상세페이지 출력-->
      <div v-if="edit == false">
        <button class="closeBtn" @click="$emit('closeModal')">닫기</button>
        <div v-if="owner == true">
          <b-icon id="sidebar_openBtn" icon="pencil-fill" font-scale="1.5" class="editButton" @click="goEdit"></b-icon>
        </div>

        <h5 class="date1">{{memory.date}}</h5>
        <h5 class="title1" >제목: {{memory.title}}</h5>
        <h5 class="content1 ">{{memory.content}}</h5>
        <img :src="memory.image[cnt]" />
          <b-icon @click="beforeImage" id="beforeBtn" icon="chevron-left" font-scale="1.5" class="changeImageLeft fs-2"></b-icon>
          <b-icon @click="nextImage" id="nextBtn" icon="chevron-right" font-scale="1.5" class="changeImageRight fs-2"></b-icon>
      </div>
      <!--      수정버튼을 누르면 수정페이지 출력-->
      <div v-if="edit == true ">
        <h5 class="date1">{{memory.date}}</h5>
        <img :src="memory.image" />
        <!--        <label for="content" class="grey-text" style="margin:10px">이미지 저장</label> <br>-->
        <input type="file" class="form-control imgSelect" ref="fileInput" accept="image/jpeg, image/jpg" id="inputGroupFile02" multiple/>
        <label for="title" class="grey-text labelTag1" style="margin:10px">제목</label>
        <input  v-model="memory.title" type="text" id="title" class="form-control inputTag1" >
        <label for="content" class="grey-text labelTag2" style="margin:10px">내용</label>
        <input v-model="memory.content" type="text" id="content" class="form-control inputTag2" >
        <button class="no btn-outline-mdb-color" @click="endEdit">취소</button>
        <button class="ok btn-outline-mdb-color" @click="onUpload">수정</button>

      </div>
    </div>
  </div>
</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";

export default {
  name: 'detail',
  data() {
    return {
      memory: {},
      edit: false,
      fbCollection: "memory",
      owner: true,
      caption : '',
      img1: [],
      imageData: null,
      cnt: 0,
      beforeBtn: false,
      nextBtn: true,
    }
  },
  watch : {

  },
  props : {
    items: Array,
    obj: Object,
    modal : Boolean,
  },
  created() {
    this.memory= this.obj
  },
  mounted() {
    this.ownerCheck()
  },
  methods: {
    goEdit() {
      this.edit=true
    },
    endEdit() {
      this.edit=false
    },
    confirm() {
      const self = this;
      const db = firebase.firestore();
      const _data = {
        title: self.memory.title,
        content: self.memory.content,
        image: self.img1,
      }
      db.collection(self.fbCollection)
          .doc(self.memory.id)
          .set(_data, {merge: true} )
          .then(() => {
            alert("수정되었습니다.")
            location.reload();
          })
          .catch((e) => {
            console.log(e)
            alert("수정에 실패했습니다.")
          })
    },
    ownerCheck() {
      const self = this;
      if(self.$store.state.user.uid === self.memory.userId){
        self.owner = true
        console.log("주인임")
      }
      else {
        self.owner = false
        console.log("주인아님")
      }

    },
    // previewImage(event) {
    //   this.uploadValue = 0;
    //   this.img1 = null;
    //   this.imageData = event.target.files[0];
    //   console.log(this.imageData)
    //   // this.onUpload()
    // },
    onUpload() {
      const files = this.$refs.fileInput.files;
      if(files.length >= 1) {
        const promises = [];
        for (let i = 0; i < files.length; i++) {
          this.imageData = files[i];
          const storageRef = firebase
              .storage()
              .ref(`${this.currentUser}`)
              .child(`${this.imageData.name}`);
          promises.push(storageRef.put(this.imageData).then((snapshot) => {
            return snapshot.ref.getDownloadURL();
          }));
        }
        Promise.all(promises).then((urls) => {
          this.img1 = this.img1.concat(urls);
          this.confirm();
        });
      } else {
        this.img1 = this.memory.image
        this.confirm();
      }
    },
    beforeImage(){
      if(this.cnt == 0){
        // this.beforeBtn = false;
        // this.nextBtn = true;
        this.cnt = this.memory.image.length-1
        console.log(this.beforeBtn)
      }
      else{
        this.cnt--;
        // this.nextBtn = true;
        console.log(this.beforeBtn)
      }
    },
    nextImage(){
      if(this.cnt == this.memory.image.length-1){
        // this.nextBtn = false;
        // this.beforeBtn = true;
        this.cnt = 0;
        console.log(this.nextBtn)

      }
      else{
        this.cnt++;
        // this.beforeBtn = true;
        console.log(this.nextBtn)

      }
    }

  }

}

</script>

<style scoped>
#detail{
  /*position: absolute;*/
  /*z-index : 100;*/
  /*height: 50%;*/
}
body {
  margin : 0;
}

/*.black-bg {*/
/*  width: 100%; height: 100vh;*/
/*  background: rgba(0,0,0,0.5);*/
/*  position: absolute; padding: 20px;*/
/*}*/

.white-bg {
  width: 700px; background: white;
  height: 500px;
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
}
.closeBtn {
  position: absolute;
  left: 49%;
  top: 85%;
}
img {
  width: 300px;
  height: 300px;
  /*object-fit: cover;*/
  position: absolute;
  top: 45px;
  left: 35px;
}
.title1 {
  position: absolute;
  top: 100px;
  left: 410px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
}
.content1 {
  position: absolute;
  top: 150px;
  left: 410px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px
}
.editButton {
  position: absolute;
  top:20px;
  left: 650px;
}
.labelTag1 {
  position: absolute;
  top:100px;
  left: 350px;
  width: 600px;
}
.inputTag1 {
  position: absolute;
  top:150px;
  left: 350px;
  width: 300px;
}
.labelTag2 {
  position: absolute;
  top:200px;
  left: 350px;
  width: 300px;
}
.inputTag2 {
  position: absolute;
  top:250px;
  left: 350px;
  width: 300px;
}
.no {
  position: absolute;
  top:450px;
  left:350px;
}
.ok {
  position: absolute;
  top:450px;
  left:300px;
}
.imgSelect {
  position:absolute;
  width: 300px;
  top:350px;
  left: 35px;
}
.date1 {
  position: absolute;
  top: 10px;
  left: 20px;
}
.changeImageLeft {
  margin-top: 180px;
}
.changeImageRight {
  margin-top: 180px;
  margin-left: 314px;
}
</style>
