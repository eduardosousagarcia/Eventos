import firebase from'firebase';


 
const firebaseConfig = {
  apiKey: "AIzaSyAnLiMFkcxPVWwc16HvvfKJLXDHQ6d5dsA",
  authDomain: "eventos-2c67a.firebaseapp.com",
  projectId: "eventos-2c67a",
  storageBucket: "eventos-2c67a.appspot.com",
  messagingSenderId: "901733726930",
  appId: "1:901733726930:web:f1f59e9fe9c3a0747a0b0b",
  measurementId: "G-42YN0GTBSY"
};

  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);