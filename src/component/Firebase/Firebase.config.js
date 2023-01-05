// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB0SXvVpPIqeL3EuZZJdGM9c2ne84CFWA",
  authDomain: "smooth-styling.firebaseapp.com",
  projectId: "smooth-styling",
  storageBucket: "smooth-styling.appspot.com",
  messagingSenderId: "1090585654217",
  appId: "1:1090585654217:web:b9dd2d62a617b3a71bae18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;