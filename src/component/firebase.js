// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvUxgat1aNWKDfDaLWWvGErrY7ARlPTAA",
    authDomain: "e-commerceweb-d63ac.firebaseapp.com",
    projectId: "e-commerceweb-d63ac",
    storageBucket: "e-commerceweb-d63ac.appspot.com",
    messagingSenderId: "352885637426",
    appId: "1:352885637426:web:4db3401194d46c8235972b",
    measurementId: "G-ZL10Z5HW0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db=getFirestore(app)
export default app;