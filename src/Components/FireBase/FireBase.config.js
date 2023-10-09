// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUWGTVTtm4S94_Nn0_YeT7ktjLq_pIhQ0",
    authDomain: "my-event-manegment.firebaseapp.com",
    projectId: "my-event-manegment",
    storageBucket: "my-event-manegment.appspot.com",
    messagingSenderId: "724864702919",
    appId: "1:724864702919:web:a459cbc012f62a97a761e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;