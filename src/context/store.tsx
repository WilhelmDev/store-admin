import React, { createContext, useState } from "react";
import { Dishes } from "../interfaces/dishes";
import { StoreContextProps } from "../interfaces/store";

const StoreContext = createContext<StoreContextProps | object>({})

const StoreProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [dialogProduct, setdialogProduct] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Dishes | object>({})

  const dialogTrigger = (product : Dishes) => {
    setdialogProduct(!dialogProduct)
    setSelectedProduct(product)
  }
    return (
      <StoreContext.Provider value={{
        dialogTrigger, selectedProduct, dialogProduct
      }}>
        {children}
      </StoreContext.Provider>
    )
}
export {
  StoreContext
}

export default StoreProvider