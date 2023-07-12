import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBJskflIeq65Ef42zWFZs08yB4Oyg8HGcs",
    authDomain: "line-clone-d685c.firebaseapp.com",
    projectId: "line-clone-d685c",
    storageBucket: "line-clone-d685c.appspot.com",
    messagingSenderId: "412752942212",
    appId: "1:412752942212:web:0fe756dfdabed51dc19ed1"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();
export { db, auth };