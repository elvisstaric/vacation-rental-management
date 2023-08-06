import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCq-P1Har9zJOAU_JLxFjif6jWgfLP8OtY",
  authDomain: "vacation-rental-manageme-10d06.firebaseapp.com",
  projectId: "vacation-rental-manageme-10d06",
  storageBucket: "vacation-rental-manageme-10d06.appspot.com",
  messagingSenderId: "897698888821",
  appId: "1:897698888821:web:bdc3b380e9a5c0c1014c3c",
};

firebase.initializeApp(firebaseConfig);

let baza = firebase.firestore();

export { firebase, baza };
