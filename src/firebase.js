import firebase from "firebase"

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBvt8aM0pKWdjXRoQjyRXIxKMZgvT2pRKI",
  authDomain: "piaoaltovieu.firebaseapp.com",
  projectId: "piaoaltovieu",
  storageBucket: "piaoaltovieu.appspot.com",
  messagingSenderId: "291353375885",
  appId: "1:291353375885:web:ce110f20bfc703567b5ec4",
})

var db = firebaseApp.firestore()

export { db }
