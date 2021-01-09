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


export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);

        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;

