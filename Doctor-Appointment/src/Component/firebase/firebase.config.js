// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbd8ayhlRknDba3FSZYS_tor_TnvEBaP8",
    authDomain: "doctor-appointment-e3e19.firebaseapp.com",
    projectId: "doctor-appointment-e3e19",
    storageBucket: "doctor-appointment-e3e19.appspot.com",
    messagingSenderId: "1042671806928",
    appId: "1:1042671806928:web:60dddaacb37ee2e0e571d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;