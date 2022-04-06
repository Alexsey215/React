// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut as firbaseSignOut} from "firebase/auth";
import {getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZbDjb10lZWZNTDamXIGNZt1jbkactCko",
    authDomain: "react-project-gb.firebaseapp.com",
    databaseURL: "https://react-project-gb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-project-gb",
    storageBucket: "react-project-gb.appspot.com",
    messagingSenderId: "635186210782",
    appId: "1:635186210782:web:b57e1e255f848e287c1f4f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
}

export const login = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async () => {
    await firbaseSignOut(auth);
}
