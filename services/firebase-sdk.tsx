import { initializeApp, FirebaseApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP4S0mapN33edisYB9zm6Tu4Im_bqYtxU",
  authDomain: "labdut.firebaseapp.com",
  databaseURL: "https://labdut-default-rtdb.firebaseio.com",
  projectId: "labdut",
  storageBucket: "labdut.firebasestorage.app",
  messagingSenderId: "1097486847540",
  appId: "1:1097486847540:web:36555a25631fdcb3cf8461"
};

// Initialize Firebase
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;