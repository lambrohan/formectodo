 // Initialize Firebase
 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

 var config = {
  apiKey: "AIzaSyDKP91IVddYQ6JWswGjSs34zjSVDBfQz_I",
  authDomain: "formec-work.firebaseapp.com",
  databaseURL: "https://formec-work.firebaseio.com",
  projectId: "formec-work",
  storageBucket: "formec-work.appspot.com",
  messagingSenderId: "17397114135"
};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({timestampsInSnapshots:true});

export default firebase;
