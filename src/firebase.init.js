// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYE0_sm2tdrwn58YaJPBJyr1LfnAGBFYc",
    authDomain: "true-balance-yoga.firebaseapp.com",
    projectId: "true-balance-yoga",
    storageBucket: "true-balance-yoga.appspot.com",
    messagingSenderId: "314087627250",
    appId: "1:314087627250:web:311b038b16b113f4fb336b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;