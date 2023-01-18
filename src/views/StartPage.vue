<template>
  <div>
    <div class = "title">
      <h2><span class = "text-red">T</span>rip</h2>
      <h2><span class = "text-red">M</span>emory</h2>
      <h2><span class = "text-red">I</span>nformation</h2>
    </div>
    <hr align = "center" width = "550px" color="white"/>

    <h3>추억을 한 눈에 보고 싶을 때</h3>
    <button class = "loginButton white" @click="googleLoginBtn">Sign in with Google</button>
    <img class = "googleImg" src = "../assets/images/googleImage.png">

    <router-link to="login" class="loginLink">로그인</router-link>
    <router-link to="signUp" class="signUpLink">회원가입</router-link>
  </div>
</template>

<script>
import {firebase} from "@/firebase/firebaseConfig";

export default {
  name: 'login',
  data() {
    return {
      fbCollection: 'users',
    }
  },
  methods: {
    googleLoginBtn() {
      const self = this;
      const db = firebase.firestore();
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({
        'login_hint': 'user@example.com'
      });
      // 로그인 팝업창 띄우기
      firebase.auth().signInWithPopup(provider)
          .then(function(result) {
        const token = result.credential.accessToken;  //eslint-disable-line no-unused-vars
        const user = result.user;
        console.log(user);
        db.collection(self.fbCollection)
            .where("googleId",'==',user.email)
            .get()
            .then((querySnapshot) => {
              if (querySnapshot.size === 0) {
                alert('회원가입 필요')
                console.log('회원가입 안됨')
                self.$router.push("/SignUp");
              }
              if (querySnapshot.size !== 0) {
                alert('구글 로그인 성공! 일반 로그인으로 로그인 하세요')

              }
              // self.$router.push("/mainMAp");
            })
      }).catch(function(error) {
        // Handle Errors here.
        const errorCode = error.code; //eslint-disable-line no-unused-vars
        const errorMessage = error.message; //eslint-disable-line no-unused-vars
        // The email of the user's account used.
        const email = error.email;  //eslint-disable-line no-unused-vars
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;    //eslint-disable-line no-unused-vars
        // ...
      });
    },
  },
}
</script>

<style>
body {
  background-image: url("../assets/images/bgPhoto.jpg");
  background-color:rgba(0, 0, 0, 0.5);
  background-size: cover;
}
a {
  text-decoration:none;
  color: white;
  font-weight: 600;

}
.title {
  position: absolute;
  /*width: 35%;*/
  /*height: 40%;*/
  left: 30%;
  top: 300px;

  /*font-family: 'Roboto';*/
  font-style: normal;
  font-weight: 700;
  font-size: 500px;
  line-height: 59px;

  color: #FFFFFF;

  text-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25);
}
h2{
  font-style: normal;
  font-weight: 700;
  font-size: 75px;
  line-height: 59px;
}
hr {
  position: absolute;
  left: 37%;
  top: 74%;
  height: 3px;
}
h3{
  position: absolute;
  left: 46%;
  top: 70%;
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  color: white;
  line-height: 59px;
}
.text-red {
  color: red;
}
.loginButton{
  position: absolute;
  width: 350px;
  height: 60px;
  left: 41%;
  top: 78%;
  font-size:23px;
  line-height: 50px;
  text-align: center;
  background: white;
  color: gray;
  /*border: solid 2px grey;*/
  border-radius: 12px;
}
.googleImg {
  position: absolute;
  left: 42%;
  top: 78.8%;
  width: 40px;
  height: 40px;
}
.loginLink {
  position: absolute;
  left: 42%;
  top: 85%;
  font-size:23px;
  color: white;
}
.signUpLink {
  position: absolute;
  left: 50%;
  top: 85%;
  font-size:23px;
  color: white;
}
</style>