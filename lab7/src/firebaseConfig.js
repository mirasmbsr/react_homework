// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvayM4bX6JpOXdftBlvO9WtMvZyPX9__A",
  authDomain: "lab7-5adf2.firebaseapp.com",
  projectId: "lab7-5adf2",
  storageBucket: "lab7-5adf2.firebasestorage.app",
  messagingSenderId: "222039897334",
  appId: "1:222039897334:web:94a1e1a2093162b0caa8d7",
  measurementId: "G-XNX1WRDR75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAnalytics(app);

export { app, auth };