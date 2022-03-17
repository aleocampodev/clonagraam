// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOduTtC63s7bWA6xkvhPh8hWk7cV-iG7k",
  authDomain: "clonagraam.firebaseapp.com",
  projectId: "clonagraam",
  storageBucket: "clonagraam.appspot.com",
  messagingSenderId: "444413162219",
  appId: "1:444413162219:web:c0a87439898075153384ae",
  measurementId: "G-01RT8TH5VW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
