// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2__eZOchHyTNe2GjGyn9HjQs4r0YqhM0",
  authDomain: "netflixgpt-3f706.firebaseapp.com",
  projectId: "netflixgpt-3f706",
  storageBucket: "netflixgpt-3f706.appspot.com",
  messagingSenderId: "76124898555",
  appId: "1:76124898555:web:40008ee026401ae812dc5e",
  measurementId: "G-WK9W0S1QPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


 export const auth = getAuth();