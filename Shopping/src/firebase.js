// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "darkdeal-30984.firebaseapp.com",
  projectId: "darkdeal-30984",
  storageBucket: "darkdeal-30984.appspot.com",
  messagingSenderId: "238570532262",
  appId: "1:238570532262:web:9fe346cb8109f0fdf13367",
  measurementId: "G-ZHT60WN8K8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)