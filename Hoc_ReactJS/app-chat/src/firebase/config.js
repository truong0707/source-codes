
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import firebase from 'firebase/app';

import 'firebase/analytics'
import 'firebase/auth' // dùng để xác thực
import 'firebase/firestore'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8WIK0PeRETJpe-zejlDMdGvF31tE_0E4",
  authDomain: "app-chat-385f9.firebaseapp.com",
  projectId: "app-chat-385f9",
  storageBucket: "app-chat-385f9.appspot.com",
  messagingSenderId: "173840188643",
  appId: "1:173840188643:web:524dc82a59e571a69631d6",
  measurementId: "G-JVMSZ2R5RJ"
};

// Khởi tạo fire
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = firebase.auth(); // lưu trữ firebase.auth
const db = firebase.firestore(); // database để lưu trữ firebase.firetore

// export để sủ dụng
export { db, auth}

export default firebase;