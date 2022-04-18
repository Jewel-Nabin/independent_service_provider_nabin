// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAvMs34wKYco_39Vh-wUCfzgCmk_Oyj4D4",
    authDomain: "balance-yoga-25ef2.firebaseapp.com",
    projectId: "balance-yoga-25ef2",
    storageBucket: "balance-yoga-25ef2.appspot.com",
    messagingSenderId: "176140552932",
    appId: "1:176140552932:web:585c81cbe4d1024a25baf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;