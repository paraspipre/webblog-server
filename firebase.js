// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyAhri9xKvgAYN8O3OihKrY8jc1XzNeT-Ws",
   authDomain: "webblog-dc872.firebaseapp.com",
   projectId: "webblog-dc872",
   storageBucket: "webblog-dc872.appspot.com",
   messagingSenderId: "1001657351308",
   appId: "1:1001657351308:web:32ea99496917fe2e130fa9",
   measurementId: "G-GHKTCMR7V6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



