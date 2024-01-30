import { DishProps } from "../interfaces/dishes"
import useFirebase from "../hooks/useFirebase"
import { Firestore, doc, updateDoc } from "firebase/firestore"
import { Switch } from "@material-tailwind/react";
import useStore from "../hooks/useStore";
import { StoreContextProps } from "../interfaces/store";

export const Dish = ({ dish }:DishProps) => {
  const { db } = useFirebase()
  const { dialogTrigger } = useStore() as StoreContextProps
  const { id, name, price, image, existency, active } = dish
  // Update data in firebase
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleActive = async (value : any) => {
    const actualValue = value.target.value === 'true' ? true : false
    const docRef = doc(db as Firestore, 'products', id)
    await updateDoc(docRef, {
      active: !actualValue
    })
  }
  return (
    <div className="w-full px-3">
      <div className="p-5 shadow-md bg-white ">
        <main className="flex flex-col gap-2">
          <section className=" border-b border-gray-100 rounded shadow-sm">
            <img src={image} alt={`image ${name}`} className="rounded aspect-square cursor-pointer" onClick={() => dialogTrigger(dish)}/>
          </section>
          <section className="">
            <p className=" font-bold text-2xl text-yellow-600 mb-4">{name}</p>
            <p className="text-gray-600 mb-3">
              Precio: 
              <span className="text-gray-700 font-bold"> {price}$</span>
            </p>
            <p className="text-gray-800 mb-3">Existente: {existency}</p>
            <div className="mt-3">
              <Switch crossOrigin={undefined} color="yellow" checked={active} value={active.toString()} label={'Activo'} onChange={handleActive}/>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
