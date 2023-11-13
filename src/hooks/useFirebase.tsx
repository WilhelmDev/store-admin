import { FirebaseContext } from "../firebase"
import { useContext } from "react"

const useFirebase = () => {
    return (useContext(FirebaseContext))
}

export default useFirebase