import { Dishes } from "./dishes";

export interface StoreContextProps {
  dialogTrigger: (product?: Dishes) => void
  selectedProduct?: Dishes
  dialogProduct: boolean
}