// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRrkzHlL00VF7s-nEA8jMMW9HzTrok4xo",
  authDomain: "morningstar-fashion.firebaseapp.com",
  projectId: "morningstar-fashion",
  storageBucket: "morningstar-fashion.appspot.com",
  messagingSenderId: "674197581397",
  appId: "1:674197581397:web:2f2e450dbaa87ce1352edc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app