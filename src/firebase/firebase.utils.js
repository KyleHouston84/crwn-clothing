import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCg1JOc5EO9p0DHoOfEcDxf0rpH3jmrd9o",
  authDomain: "crwn-clothing-56902.firebaseapp.com",
  projectId: "crwn-clothing-56902",
  storageBucket: "crwn-clothing-56902.appspot.com",
  messagingSenderId: "648466177510",
  appId: "1:648466177510:web:365cd99f23934c9fe50a27",
  measurementId: "G-XQSR7JGN7Q"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // User data missing, exit function
  if (!userAuth) return;

  // Request user data
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  // If the user doesn't exist, create them!
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  // return user data
  return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;