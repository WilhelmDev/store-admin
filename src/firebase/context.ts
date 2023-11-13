import { createContext } from "react";
import firebase from ".";
import { FirebaseApp } from "firebase/app";
import { Firestore } from "firebase/firestore";

interface firebase {
    app?: FirebaseApp;
    db?: Firestore;
}

const FirebaseContext = createContext(firebase)

export default FirebaseContext