import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage';
import "firebase/firestore";
import "firebase/auth";


firebase.initializeApp({
    apiKey: "AIzaSyCn5j2MN9kr6UAW5WyKcndsUd2D6tqLqII",
    authDomain: "tmi-project-f00ef.firebaseapp.com",
    projectId: "tmi-project-f00ef",
    storageBucket: "tmi-project-f00ef.appspot.com",
    messagingSenderId: "940364583403",
    appId: "1:940364583403:web:4581a95bee632776a5c9ae",
    measurementId: "G-RFNVY5ETJQ"
});

firebase.auth().languageCode = 'ko'

const auth = firebase.auth()
const firestore = firebase.firestore()
const functions = firebase.app().functions('asia-northeast3')

export {auth, firestore, functions, firebase}





