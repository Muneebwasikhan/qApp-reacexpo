import * as firebase from 'firebase';   
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAHc6m8fcPCTHGScJb-U7lyOfZP3LT5MhA",
    authDomain: "campus-requirements-panacloud.firebaseapp.com",
    databaseURL: "https://campus-requirements-panacloud.firebaseio.com",
    projectId: "campus-requirements-panacloud",
    storageBucket: "campus-requirements-panacloud.appspot.com",
    messagingSenderId: "473980182474"
  };
  firebase.initializeApp(config);

  const db = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  db.settings(settings);
  
  //export db from here for using it in all page like im using firestore so for acceccing firestore in all pages we use db , 
  export default (db);