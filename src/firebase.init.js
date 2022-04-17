// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWsgc5u3LLxAOsS0Eb8Yt0rUBwbu2giAY",
    authDomain: "study-hacks-corner.firebaseapp.com",
    projectId: "study-hacks-corner",
    storageBucket: "study-hacks-corner.appspot.com",
    messagingSenderId: "411469820802",
    appId: "1:411469820802:web:217d2b8716a606ca4b959b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;