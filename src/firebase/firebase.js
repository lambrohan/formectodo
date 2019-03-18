 // Initialize Firebase
 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

 var config = {
  apiKey: "xxxxxxxxxxxxxxxxxx",
  authDomain: "xxxxxx.firebaseapp.com",
  databaseURL: "xxxxxx",
  projectId: "formec-xxx",
  storageBucket: "xxxx.appspot.com",
  messagingSenderId: "xxxxxx"
};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({timestampsInSnapshots:true});

export default firebase;
