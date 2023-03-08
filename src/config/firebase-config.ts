// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOfaIHA5MjiCn16d3PSSLN894krDhU71M",
  authDomain: "employees-a7bad.firebaseapp.com",
  projectId: "employees-a7bad",
  storageBucket: "employees-a7bad.appspot.com",
  messagingSenderId: "314005719581",
  appId: "1:314005719581:web:f8d53c61960fe34a0a54f4",
  measurementId: "G-9Y9YYGG6G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);