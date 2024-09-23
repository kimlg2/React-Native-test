// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdzMrMHVTzSTgWisgTaR_aIoOXv0MATv0",
  authDomain: "react-native-todo-app-ef6c4.firebaseapp.com",
  projectId: "react-native-todo-app-ef6c4",
  storageBucket: "react-native-todo-app-ef6c4.appspot.com",
  messagingSenderId: "137924552592",
  appId: "1:137924552592:web:3de917b4de5a9a01aef515",
  measurementId: "G-8KM2TE9YM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;