import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDjScn0udMl5CTNpUqqFqj7XwItObqPPQk",
    authDomain: "firegram-d62d2.firebaseapp.com",
    databaseURL: "https://firegram-d62d2.firebaseio.com",
    projectId: "firegram-d62d2",
    storageBucket: "firegram-d62d2.appspot.com",
    messagingSenderId: "858726116922",
    appId: "1:858726116922:web:f9dba21936040e52e58f03",
    measurementId: "G-6QBPSSTDMB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };