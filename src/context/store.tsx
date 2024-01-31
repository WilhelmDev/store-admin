import React, { createContext, useState } from "react";
import { Dishes } from "../interfaces/dishes";
import { StoreContextProps } from "../interfaces/store";
import useFirebase from "../hooks/useFirebase";
import { Firestore, deleteDoc, doc } from "firebase/firestore";

const StoreContext = createContext<StoreContextProps | object>({})

const StoreProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [dialogProduct, setdialogProduct] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Dishes | object>({})
  const [loading, setLoading] = useState(false)

  const { db } = useFirebase()

  const dialogTrigger = (product ?: Dishes) => {
    setdialogProduct(!dialogProduct)
    if (product) {
      setSelectedProduct(product)
    }
  }

  const deleteProduct = async (id:string) => {
    setLoading(true)
    try {
      await deleteDoc(doc(db as Firestore, "products", id));
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
      dialogTrigger()
    }
  }
    return (
      <StoreContext.Provider value={{
        dialogTrigger, selectedProduct, dialogProduct, deleteProduct, loading
      }}>
        {children}
      </StoreContext.Provider>
    )
}
export {
  StoreContext
}

export default StoreProvider