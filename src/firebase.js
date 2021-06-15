import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD-iMZJIg8kk9UbN2zv76-rhAK8t901yKc",
    authDomain: "crud-project-firebase-6a7fc.firebaseapp.com",
    databaseURL: "https://crud-project-firebase-6a7fc-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "crud-project-firebase-6a7fc",
    storageBucket: "crud-project-firebase-6a7fc.appspot.com",
    messagingSenderId: "697397319443",
    appId: "1:697397319443:web:9795d93eb8b465783eace6",
    measurementId: "G-XG336P107S"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase; 