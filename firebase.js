// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKwg7uyp95ioRVkKqJLZf3NVokZZ0BZ4s",
  authDomain: "cctv-app-377607.firebaseapp.com",
  projectId: "cctv-app-377607",
  storageBucket: "cctv-app-377607.appspot.com",
  messagingSenderId: "310386094667",
  appId: "1:310386094667:web:21eafa3f596bfa78e0d3ce",
  measurementId: "G-YG88L2TRXL"
};

let app;

if (firebase.apps.length === 0 ) {
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app()
}

const auth = firebase.auth()
export {auth}