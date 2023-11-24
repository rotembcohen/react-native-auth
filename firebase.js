// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0p9p0NvZM40ju_LnJhvOpvSj8pssaOlM",
  authDomain: "fir-auth-d0f16.firebaseapp.com",
  projectId: "fir-auth-d0f16",
  storageBucket: "fir-auth-d0f16.appspot.com",
  messagingSenderId: "407236140754",
  appId: "1:407236140754:web:e6c5253618e9a51a6e570b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
