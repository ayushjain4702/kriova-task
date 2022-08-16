// import firebase from 'firebase/app';
// import 'firebase/firestore';
// // import 'firebase/auth';
// import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDI2pojy0s8K12b5q9w89E-WoYZwY5zR5g",
    authDomain: "kriova-task-dev.firebaseapp.com",
    projectId: "kriova-task-dev",
    storageBucket: "kriova-task-dev.appspot.com",
    messagingSenderId: "986080128194",
    appId: "1:986080128194:web:a97cbe2855c4f0bd5c1f5b"
  };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// // const auth = firebase.auth();
// export const auth = getAuth();
// // export {db,auth};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth();