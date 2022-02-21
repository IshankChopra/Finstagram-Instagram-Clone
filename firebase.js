import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAOSS3ay528V01zJhG91kBu46oXEtrFUW0",
  authDomain: "instagram-clone-1f3fa.firebaseapp.com",
  projectId: "instagram-clone-1f3fa",
  storageBucket: "instagram-clone-1f3fa.appspot.com",
  messagingSenderId: "591589810796",
  appId: "1:591589810796:web:5d213fc8fe10431ceb6e49",
  measurementId: "G-5Q8WVNF108",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { firebase, db };
