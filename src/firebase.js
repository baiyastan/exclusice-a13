// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUuFLu6mlor1OWXIvNOtwfAMQJfFQPRWQ",
  authDomain: "auth-c42db.firebaseapp.com",
  projectId: "auth-c42db",
  storageBucket: "auth-c42db.firebasestorage.app",
  messagingSenderId: "969278762072",
  appId: "1:969278762072:web:62136c653c2467d4a16e2d",
  measurementId: "G-9XH9PWVJP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)