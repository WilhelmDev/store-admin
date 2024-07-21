import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebaseConfig from './config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage()

const provider = new GoogleAuthProvider();
const auth = getAuth();

const firebase = {
    app,
    db,
    storage,
    provider,
    auth,
    signInWithPopup,
}
export default firebase