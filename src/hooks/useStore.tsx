import { useContext } from "react";
import { StoreContext } from "../context/store";

const useStore = () => {
  return useContext(StoreContext)
}

export default useStore