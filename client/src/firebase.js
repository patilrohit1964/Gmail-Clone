// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpHuLF4_j1E-kFc5piwZLHuBSP_hPhQkA",
  authDomain: "clone-7ec76.firebaseapp.com",
  projectId: "clone-7ec76",
  storageBucket: "clone-7ec76.firebasestorage.app",
  messagingSenderId: "272958709965",
  appId: "1:272958709965:web:60f7e5245cf05b14584984",
  measurementId: "G-RKMG0P54NW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
