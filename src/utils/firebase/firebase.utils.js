import { initializeApp } from 'firebase/app';
import { getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBh2PTpM3QPIPxWHwL70mAJ0RVuC33nP5o",
  authDomain: "crwn-clothing-db-3e825.firebaseapp.com",
  projectId: "crwn-clothing-db-3e825",
  storageBucket: "crwn-clothing-db-3e825.appspot.com",
  messagingSenderId: "48304057131",
  appId: "1:48304057131:web:ed4050ee0f161daef2b36e"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user');
    }
  }

  return userDocRef;
};