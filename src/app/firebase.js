// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmbBRmyXSYYB-oc7asY8HnsKio3BWUzS8",
  authDomain: "next-auth-project-ae01e.firebaseapp.com",
  projectId: "next-auth-project-ae01e",
  storageBucket: "next-auth-project-ae01e.appspot.com",
  messagingSenderId: "637327742195",
  appId: "1:637327742195:web:ed7ca17d64bbd1425c9386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)