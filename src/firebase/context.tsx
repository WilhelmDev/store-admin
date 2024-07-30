import { createContext } from "react";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import firebaseConfig from "./config";
import { saveToken } from "../services/localstorage.service";

export interface Contextfirebase {
    app: FirebaseApp;
    db: Firestore;
    storage: FirebaseStorage
    handleLoginWithPopUp: () => Promise<User>
}

const FirebaseContext = createContext<Partial<Contextfirebase>>({})

const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)
  const storage = getStorage()
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleLoginWithPopUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const tokenUser = await result.user.getIdToken()
      saveToken(tokenUser)
      return result.user
    } catch (error) {
      console.error('Error signing in with popup:', error);
      throw error;
    }
  }

  return (
    <FirebaseContext.Provider value={{
      app,
      db,
      storage,
      handleLoginWithPopUp,
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}

export { FirebaseContext }
export default FirebaseProvider