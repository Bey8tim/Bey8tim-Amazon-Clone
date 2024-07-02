// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaXzb8jqzLkvgapuukjAMqp8K3qtxhFj8",
  authDomain: "clone-ecf4a.firebaseapp.com",
  projectId: "clone-ecf4a",
  storageBucket: "clone-ecf4a.appspot.com",
  messagingSenderId: "839183793907",
  appId: "1:839183793907:web:183d7c013c4241fe954186",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//export the file others can use it
export const auth = getAuth(app);
export const db = app.firestore();
