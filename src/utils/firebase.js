// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKEhCkRHMAB6nk2_3rn7NUjKdTBVWiYUU",
  authDomain: "namaste-netflix-gpt-86d0a.firebaseapp.com",
  projectId: "namaste-netflix-gpt-86d0a",
  storageBucket: "namaste-netflix-gpt-86d0a.appspot.com",
  messagingSenderId: "482189181261",
  appId: "1:482189181261:web:1abd7a1ce10102d9f5b704",
  measurementId: "G-51K9ZQ2J57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();




// Email used for firebase=> prathutripathee@gmail.com