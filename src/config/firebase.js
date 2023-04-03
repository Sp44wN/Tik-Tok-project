
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyADq09FYdFgSUFRa-HifV8VEecICR0TWJA",
  authDomain: "tiktok---jornada-14cf3.firebaseapp.com",
  projectId: "tiktok---jornada-14cf3",
  storageBucket: "tiktok---jornada-14cf3.appspot.com",
  messagingSenderId: "285413646382",
  appId: "1:285413646382:web:2e515d6be64d0b4e983fbf"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;