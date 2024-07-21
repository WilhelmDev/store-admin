import { useContext } from "react"
import { Contextfirebase, FirebaseContext } from "../firebase/context"

const useFirebase = () => {
    return useContext(FirebaseContext) as Contextfirebase
}

export default useFirebase