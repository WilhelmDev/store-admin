import { DishProps } from "../interfaces/dishes"
import useFirebase from "../hooks/useFirebase"
import { Firestore, doc, updateDoc } from "firebase/firestore"

export const Dish = ({ dish }:DishProps) => {
  const { db } = useFirebase()
  const { id, name, price, image, existency, category, description} = dish
  // Update data in firebase
  const updateExistency = async (e:string) => {
    const docRef = doc(db as Firestore, 'products', id)
    await updateDoc(docRef, {
      existency: (e === 'true')
    })
  }
  return (
    <div className="w-full px-3 mb-4">
      <div className="p-5 shadow-md bg-white">
        <div className=" lg:flex">
          <div className=" lg:w-5/12 xl:w-3/12">
            <img src={image} alt={`image ${name}`} />
          </div>
          <div className=" lg:w-7/12 xl:w-9/12 lg:pl-5">
            <p className=" font-bold text-2xl text-yellow-600 mb-4">{name}</p>
            <p className="text-gray-600 mb-4">
              Categoria: 
              <span className="text-gray-700 font-bold"> {category.toUpperCase()}</span>
            </p>
            <p className="text-gray-600 mb-4">{description}</p>
            <p className="text-gray-600 mb-3">
              Precio: 
              <span className="text-gray-700 font-bold"> {price}$</span>
            </p>
            <label htmlFor="disp">
              <span className="text-gray-800">Existencia: </span>
              <select name="disp" id="disp" className="shadow appearance-none border rounded text-center px-2 py-1 leading-tight focus:outline-none focus:shadow"
              value={existency.toString()} onChange={(e) => updateExistency(e.target.value)}>
                <option value="true">Disponible</option>
                <option value="false">No Disponible</option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
