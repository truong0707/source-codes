import { initializeApp } from "firebase/app";
/* import { getAnalytics } from "firebase/analytics"; */
import { getAuth} from "firebase/auth";

// Sử dụng các tính năng của firebase

const firebaseConfig = {
    apiKey: "AIzaSyC98W6fDhJ4AaX6kc8QaNGj0BANWRFhTJ0",
    authDomain: "wed-learnlt.firebaseapp.com",
    projectId: "wed-learnlt",
    storageBucket: "wed-learnlt.appspot.com",
    messagingSenderId: "496362311604",
    appId: "1:496362311604:web:f000b93a869067d64cace1",
    measurementId: "G-ZVY9PTXGFY"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
/*   const analytics = getAnalytics(app); */


export const auth = getAuth(app)

