import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAYkaxQgKxA6-_FqOQe5IUXIke013HvUTI",
    authDomain: "clothing-db-bc316.firebaseapp.com",
    projectId: "clothing-db-bc316",
    storageBucket: "clothing-db-bc316.appspot.com",
    messagingSenderId: "572275908272",
    appId: "1:572275908272:web:68eeec283003a3f6d12575",
    measurementId: "G-6KSX3GS326"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;

