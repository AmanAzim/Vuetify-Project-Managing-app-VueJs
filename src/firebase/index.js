import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUIdg6CbnY99v7ELLOKKRNyEE2LCGtQWA",
    authDomain: "aman-fire-store.firebaseapp.com",
    databaseURL: "https://aman-fire-store.firebaseio.com",
    projectId: "aman-fire-store",
    storageBucket: "aman-fire-store.appspot.com",
    messagingSenderId: "336169597390",
    appId: "1:336169597390:web:b8c8cc02458d8f29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db=firebase.firestore();

db.settings({timestampsInSnapshots:true});

export default db;
