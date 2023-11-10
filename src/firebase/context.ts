import { FirebaseApp } from "firebase/app";
import React, { createContext } from "react";

export const FirebaseContext = createContext({} as FirebaseApp);

// export default function Firebase() {
//     return (
//         P
//     )
// }
// // // Context.tsx

// export const AppContext = React.createContext({} as ValueProp); //create the context API

// //function body
// export default function Context({ children }: ContextProp) {

//    
// }

// export const useGlobalContext = ():ValueProp => {
//     return useContext(AppContext);
// }