import Vue from 'vue'
import Router from 'vue-router'
import {firebase} from "@/firebase/firebaseConfig";
import "firebase/auth";
import store from "@/store";

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login'),
    },
    {
      path: '/myPage',
      name: 'myPage',
      component: () => import('./components/MyPage.vue'),
    },
    {
      path: '/mainSideBar',
      name: 'mainSideBar',
      component: () => import('./components/MainSideBar'),
    },
    {
      path: '/mainMap',
      name: 'mainMap',
      component: () => import('./views/MainMap'),
    },
    {
      path: '/',
      name: 'startPage',
      component: () => import('./views/StartPage.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home'),
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: () => import('./views/SignUp'),
    },
    {
      path: '/otherMap',
      name: 'OtherMap',
      component: () => import('./views/OtherMap'),
    },
  ]
})
const makeTitle = (title) =>
    title ? `${title} | KoROM Database` : "KoROM Database";

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = makeTitle(to.meta.title);
  });
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(async (user) => {

    // let _isAdmin = '';
    // let _isMaster = '';

    await store.dispatch('getUser', user)
        .then(() => {
          if (user) {
            console.log(user)
            console.log('user', store.state.user)
            // _isAdmin = store.state.claims.isAdmin
            // console.log('isAdmin : ', _isAdmin)
            // _isMaster = store.state.claims.isMaster
            // console.log('isMaster : ', _isMaster)
          } else {
            console.log('없다.')
          }
        })


    const firebaseCurrentUser = firebase.auth().currentUser
    console.log(firebaseCurrentUser)

    if (store.state.firebaseLoaded)
      next()
  })

});


export default router

