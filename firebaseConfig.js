// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO4RsDxBC65fPAq2Byl7M5PKLnrD0NRoc",
  authDomain: "secondhandproducts.firebaseapp.com",
  projectId: "secondhandproducts",
  storageBucket: "secondhandproducts.firebasestorage.app",
  messagingSenderId: "91731597786",
  appId: "1:91731597786:web:dae3110de37a540e5648e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Auth + Database
export const auth = getAuth(app);
export const db = getDatabase(app);

export default app;