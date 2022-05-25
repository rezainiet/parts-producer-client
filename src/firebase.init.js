import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA1sqUNWBpkRTSrXSYp8TN5YiD0THdy9JU",
    authDomain: "parts-producer.firebaseapp.com",
    projectId: "parts-producer",
    storageBucket: "parts-producer.appspot.com",
    messagingSenderId: "773271595142",
    appId: "1:773271595142:web:20e8cf69380562b15b0907"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;