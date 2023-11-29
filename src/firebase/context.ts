import { createContext } from "react";
import firebase from ".";
import { FirebaseApp } from "firebase/app";
import { Firestore } from "firebase/firestore";
import { FirebaseStorage } from "firebase/storage";

interface firebase {
    app?: FirebaseApp;
    db?: Firestore;
    storage?: FirebaseStorage
}

const FirebaseContext = createContext<firebase>({})

export default FirebaseContext