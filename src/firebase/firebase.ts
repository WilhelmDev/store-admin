import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
import firebaseConfig from './config';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const firebase = {
    app,
    db
}
export default firebase