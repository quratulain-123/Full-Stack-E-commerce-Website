// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   // apiKey deleted because of privacy
  authDomain: "minimart-a5d74.firebaseapp.com",
  projectId: "minimart-a5d74",
  storageBucket: "minimart-a5d74.appspot.com",
  messagingSenderId: "400506563548",
  appId: "1:400506563548:web:c553d8d74d62e355b37d19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);