import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebaseConfig from './config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage()

const firebase = {
    app,
    db,
    storage
}
export default firebase